// entry-client.js

import  createApp from './core';

//console.log(window['siteo-app']);
console.log(window['siteo-plugins']);

if (window['siteo-pages']) {
  if (!window['siteo-plugins']) {
      window['siteo-plugins'] = {};
  }
  window['siteo-plugins']['siteo-pages'] = window['siteo-pages'];
}

var app= createApp({
    configs: window.__SITEO_CONFIG__,
    APP: window['siteo-app'],
    messages: window['siteo-locale-en'],
    plugins: window['siteo-plugins']
    //template: window['siteo-template']

});


app.$router.onReady(() => {


    const matchedComponents = app.$router.getMatchedComponents();

    // registers all stores for components
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


   if (window.__INITIAL_STATE__) {
        app.$store.replaceState(window.__INITIAL_STATE__);
   } else {
    // if no window.__INITIAL_STATE__
    //all modules from store  are available after $mount()
    for( var mutation in __SITEO_INSTANCE__) {
      app.$store.commit(mutation, __SITEO_INSTANCE__[mutation]);
    }

   }

  // update theme
  if (app.$store.state.APP_INSTANCE.design.theme
      &&app.$store.state.APP_INSTANCE.design.theme.colors) {
    app.$vuetify.theme = app.$store.state.APP_INSTANCE.design.theme.colors;
  }
  //about  devide code client and SSR  https://bit.ly/2tnfDa4 
  app.$mount('#app');
  // allow use async load in beforeMount
  app.$store.state.allowAsyncLoad = true;
})
