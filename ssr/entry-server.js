

// entry-server.js
import  createApp  from '../src/core';
import  template  from '../src/template/install';
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
      console.log(response.data);
      // connect configs to public file
      response.data.configs = context.configsAPI;

      // if design not found connect default design
      if (!response.data.design) {
        response.data.design = defaultDesign;
      }
      context._APP_INSTANCE = response.data;
     return new Promise((resolve, reject) => {

      // for getting AppInstance we need id for APP_INSTANCE

      var app = createApp(response.data, SiteoLocalEN, template);
      context.meta = app.$meta();
      // устанавливаем маршрут для маршрутизатора серверной части
      app.$router.push(context.url)

      // ожидаем, пока маршрутизатор разрешит возможные асинхронные компоненты и хуки
      app.$router.onReady(() => {
        const matchedComponents = app.$router.getMatchedComponents()
        // нет подходящих маршрутов, отклоняем с 404
        if (!matchedComponents.length) {
          return reject({ code: 404 })
        }

        // Promise должен разрешиться экземпляром приложения, который будет отрендерен
        resolve(app)
      }, reject)
    })
  })


}
