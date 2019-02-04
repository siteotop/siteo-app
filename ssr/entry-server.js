// entry-server.js
import  createApp  from '../src/core';
import  PluginPageBlocks  from '../src/plugins/pages';
import  siteoApp  from '../src/app';
import  SiteoLocalEN  from '../src/core/i18n/en';
import  axios from 'axios';
import  defaultDesign  from './default/design';



const get_APP_INSTANCE = (api_url, siteo_id, public_token )=>{

    return axios.get(api_url+'/websites/'+siteo_id+'/instance', {timeout:500}, {
      headers: {'common': { 'Authorization':"Bearer "+ public_token }}
    });
}


export default (context) => {
  // поскольку могут быть асинхронные хуки маршрута или компоненты,
  // мы будем возвращать Promise, чтобы сервер смог дожидаться
  // пока всё не будет готово к рендерингу.

  return get_APP_INSTANCE (
      context.configsAPI.frontend.api_url,
      context.configsAPI.backend.siteo_id,
      context.configsAPI.backend.token)
      .then(response=>{
        if (!response.data.data) {
           throw {ssr_error_code: 'no_data_in_response' , response: response.data};
        }
      // if design not found connect default design
        if (!response.data.design) {
          response.data.design = defaultDesign;
        }
       return new Promise((resolve, reject) => {

        // for getting AppInstance we need id for APP_INSTANCE
        var app = createApp( {
          configs: context.configsAPI.frontend,
          APP:siteoApp,
          messages: SiteoLocalEN,
          plugins: {pageblocks: PluginPageBlocks}
        });
        app.$store.commit('saveInstanse', response.data);
        context.meta = app.$meta();

        // minify styles for theme
        app.$vuetify.options.minifyTheme = function (css) {
          return process.env.NODE_ENV === 'production'
            ? css.replace(/[\s|\r\n|\r|\n]/g, '')
            : css
        }

        app.$vuetify.theme = app.$store.state.APP_INSTANCE.design.theme.colors;
        // устанавливаем маршрут для маршрутизатора серверной части
        app.$router.push(context.url)

        // ожидаем, пока маршрутизатор разрешит возможные асинхронные компоненты и хуки
        app.$router.onReady(() => {
          const matchedComponents = app.$router.getMatchedComponents();

          // нет подходящих маршрутов, отклоняем с 404
          if (!matchedComponents.length) {
            return reject({ssr_error_code: 404, __SITEO_INSTANCE__: response.data  })
          }

          // вызов `asyncData()` на всех соответствующих компонентах
          Promise.all(matchedComponents.map(Component => {
            if (Component.asyncData) {
              return Component.asyncData({
                store: app.$store,
                route: app.$router.currentRoute

              }).catch((error)=>{
                reject({ ssr_error_code: 404,  __SITEO_INSTANCE__: response.data })

              })
            }
          })).then((data) => {
            //console.log(data);
            // После разрешения всех preFetch хуков, наше хранилище теперь
            // заполнено состоянием, необходимым для рендеринга приложения.
            // Когда мы присоединяем состояние к контексту, и есть опция `template`
            // используемая для рендерера, состояние будет автоматически
            // сериализовано и внедрено в HTML как `window.__INITIAL_STATE__`.
            //console.log(app.$store.state);
            app.$store.state.allowAsyncLoad = false;
            context.state = app.$store.state;

            resolve(app);
        }).catch(reject);

      }, reject)
    })
  })


}
