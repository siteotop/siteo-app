

// entry-server.js
import  createApp  from '../src/core';
import  template  from '../src/template';
import  siteoApp  from '../src/app';
siteoApp.options.template = template;
import  SiteoLocalEN  from '../src/core/i18n/en';
import  axios from 'axios';
import  defaultDesign  from './default.design';

const get_APP_INSTANCE = (configsAPI)=>{
    //console.log(configsAPI.api_url+'/websites/'+configsAPI.siteo_id);
    return axios.get(configsAPI.api_url+'/websites/'+configsAPI.siteo_id+'/instance', {
      headers: {'common': { 'Authorization':"Bearer "+ configsAPI.public_token }}
    });
}


export default (context) => {
  // поскольку могут быть асинхронные хуки маршрута или компоненты,
  // мы будем возвращать Promise, чтобы сервер смог дожидаться
  // пока всё не будет готово к рендерингу.
  return get_APP_INSTANCE (context.configsAPI).then(response=>{
    if (!response.data.data) {
       throw response.data;
    }
      //console.log(response.data);
      // connect configs to public file


      // if design not found connect default design
      if (!response.data.design) {
        response.data.design = defaultDesign;
      }
     context._APP_INSTANCE = response.data;
     return new Promise((resolve, reject) => {

      // for getting AppInstance we need id for APP_INSTANCE

      siteoApp.options.instance = response.data;
      siteoApp.options.messages = SiteoLocalEN;
      var app = createApp(context.configsAPI, siteoApp);
      app.$store.commit('saveInstanse', response.data);
      context.meta = app.$meta();
      // устанавливаем маршрут для маршрутизатора серверной части
      app.$router.push(context.url)

      // ожидаем, пока маршрутизатор разрешит возможные асинхронные компоненты и хуки
      app.$router.onReady(() => {
        const matchedComponents = app.$router.getMatchedComponents()
        // нет подходящих маршрутов, отклоняем с 404
        console.log(matchedComponents);
        if (!matchedComponents.length) {
          return reject({ code: 404 })
        }


      // вызов `asyncData()` на всех соответствующих компонентах
      Promise.all(matchedComponents.map(Component => {
        if (Component.asyncData) {
          return Component.asyncData({
            store: app.$store,
            route: app.$router.currentRoute
          })
        }
      })).then(() => {
        // После разрешения всех preFetch хуков, наше хранилище теперь
        // заполнено состоянием, необходимым для рендеринга приложения.
        // Когда мы присоединяем состояние к контексту, и есть опция `template`
        // используемая для рендерера, состояние будет автоматически
        // сериализовано и внедрено в HTML как `window.__INITIAL_STATE__`.
        //console.log(app.$store.state);
        context.state = app.$store.state;

        resolve(app);
      }).catch(reject)
      }, reject)
    })
  })


}
