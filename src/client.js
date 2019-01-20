// entry-client.js

import  createApp from './core';

//console.log(window['siteo-app']);
if ( window['siteo-template']) {
    window['siteo-app'].options.template = window['siteo-template'];
}

var app= createApp({
    configs: window.__SITEO_CONFIG__,
    APP: window['siteo-app'],
    messages: window['siteo-locale-en'],
    //template: window['siteo-template']

});


app.$router.onReady(() => {

  if (window.__INITIAL_STATE__) {
    const matchedComponents = app.$router.getMatchedComponents();
    console.log(matchedComponents);
    console.log(app.$router.currentRoute);
    app.$store.state.allowAsyncLoad = false;
    matchedComponents.map(Component => {
      if (Component.asyncData) {
        // only register store from asyncData not allowAsyncLoad
        return Component.asyncData({
          store: app.$store,
          route: app.$router.currentRoute

        })
      }
    });
    app.$store.replaceState(window.__INITIAL_STATE__);

  } else {
    // fetch _APP_INSTANCE
    //  app.$store.state.allowAsyncLoad = true;
    console.log(__SITEO_INSTANCE__);
    app.$store.commit('saveInstanse', __SITEO_INSTANCE__);

  }

  app.$vuetify.theme = app.$store.state.APP_INSTANCE.design.theme.colors;
  // Добавляем хук маршрута для обработки asyncData.
  // Выполняем его после разрешения первоначального маршрута,
  // чтобы дважды не загружать данные, которые у нас уже есть.
  // Используем `router.beforeResolve()`, чтобы все асинхронные компоненты были разрешены.
  //console.log(app);
  app.$mount('#app');
  app.$store.state.allowAsyncLoad = true;
})
