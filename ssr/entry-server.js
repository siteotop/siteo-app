// entry-server.js
import  {createSiteo}  from '../src/core';
//import  SiteoLocalEN  from '../src/core/i18n/en';


export default (context) => {
  // поскольку могут быть асинхронные хуки маршрута или компоненты,
  // мы будем возвращать Promise, чтобы сервер смог дожидаться
  // пока всё не будет готово к рендерингу.
    if (!context.instance._id) {
       throw {ssr_error_code: 'APP_INSTANCE_NOT_VALID' , response_data_api: context.instance};
    }
  // if design not found connect default design
   if (context.instance.design) {
     if (typeof context.instance.design == 'string' ) {
        context.instance.design = JSON.parse(context.instance.design);
     }
   } else {
     context.instance.design = {};
   }

   return new Promise((resolve, reject) => {

    // for getting AppInstance we need id for appInstance
    var app =  createSiteo( {
      configs: context.configs_frontend,
    //  messages: SiteoLocalEN,
    });

    console.log (context.instance);
    app.$store.commit('appInstance/setModel', context.instance);
    context.meta = app.$meta();

    // minify styles for theme
  /*  app.$vuetify.options.minifyTheme = function (css) {
      return process.env.NODE_ENV === 'production'
        ? css.replace(/[\s|\r\n|\r|\n]/g, '')
        : css
    }
*/
    // update $vuetify.theme
    app.updateVuetifyOptions(context.instance.design.Vtf);


    // устанавливаем маршрут для маршрутизатора серверной части
    app.$router.push(context.url)

    // ожидаем, пока маршрутизатор разрешит возможные асинхронные компоненты и хуки
    app.$router.onReady(() => {

      context.rendered = () => {
        // После рендеринга приложение, наше хранилище теперь
        // заполнено финальным состоянием из наших компонентов.
        // Когда мы присоединяем состояние к контексту, и есть опция `template`
        // используемая для рендерера, состояние будет автоматически
        // сериализовано и внедрено в HTML как `window.__INITIAL_STATE__`.
        app.$store.commit('clearAllMessages');
        app.$store.state.allowAsyncLoad = false;
        context.state = app.$store.state
      }

      resolve(app);


  }, reject)
})



}
