// entry-server.js
import  {installSiteoTemplate, createSiteo, startSiteo}  from '../src/core';
import  siteoTemplate  from '../src/template';
import  siteoApp  from '../src/app';
import  SiteoLocalEN  from '../src/core/i18n/en';
import  defaultDesign  from './default/design';

installSiteoTemplate(siteoTemplate);

export default (context) => {
  // поскольку могут быть асинхронные хуки маршрута или компоненты,
  // мы будем возвращать Promise, чтобы сервер смог дожидаться
  // пока всё не будет готово к рендерингу.
    if (!context.instance._id) {
       throw {ssr_error_code: 'APP_INSTANCE_NOT_VALID' , response_data_api: context.instance};
    }
  // if design not found connect default design
   if (!context.instance.design) {
      context.instance.design = defaultDesign;
   }

   return new Promise((resolve, reject) => {

    // for getting AppInstance we need id for appInstance
    createSiteo( {
      configs: context.configs_frontend,
      messages: SiteoLocalEN,
    });

    var app = startSiteo(siteoApp);

    app.$store.commit('appInstance/setModel', context.instance);
    context.meta = app.$meta();

    // minify styles for theme
    app.$vuetify.options.minifyTheme = function (css) {
      return process.env.NODE_ENV === 'production'
        ? css.replace(/[\s|\r\n|\r|\n]/g, '')
        : css
    }

    app.$vuetify.theme = app.$store.state.appInstance.objectActive.design.theme.colors;
    // устанавливаем маршрут для маршрутизатора серверной части
    app.$router.push(context.url)

    // ожидаем, пока маршрутизатор разрешит возможные асинхронные компоненты и хуки
    app.$router.onReady(() => {
      const matchedComponents = app.$router.getMatchedComponents();

      // нет подходящих маршрутов, отклоняем с 404
      if (!matchedComponents.length) {
        return reject({ssr_error_code: 'NOT_FOUND_COMPONENTS',  __SITEO_INSTANCE__: context.instance  })
      }

      // вызов `asyncData()` на всех соответствующих компонентах
      Promise.all(matchedComponents.map(Component => {
        if (Component.asyncData) {
          return Component.asyncData({
            store: app.$store,
            route: app.$router.currentRoute

          }).catch((error)=>{
            reject({
              ssr_error_code: 'NOT_ASYNC_DATA',
              response_data_api: {
                axios_config:  process.env.NODE_ENV === 'production'
                  ? ''
                  : error.config,

                response_data: error.response&&error.response.data? error.response.data:false
              } ,
              __SITEO_INSTANCE__: context.instance })

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
        app.$store.commit('clearAllMessages');
        context.state = app.$store.state;

        resolve(app);
    }).catch(reject);

  }, reject)
})



}
