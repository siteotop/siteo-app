// entry-client.js

import  { createSiteo} from './core';

//  add before create siteo (on SSR same)

var app = createSiteo({
    configs: window.__SITEO_CONFIG__,
    messages: window['siteo-locale-en'],
    APP: window['siteo-app'],
    plugins: window['siteo-plugins']
});

app.$router.onReady(() => {


    const matchedComponents = app.$router.getMatchedComponents();

    // registers all stores for components
    app.$store.state.allowAsyncLoad = false;
    matchedComponents.map(Component => {
      if (Component&&Component.asyncData) {
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
  if (app.$store.state.appInstance.objectActive.design) {

    app.updateVuetifyOptions(app.$store.state.appInstance.objectActive.design.Vtf);
  }
  //about  devide code client and SSR  https://bit.ly/2tnfDa4
  app.$mount('#app');
  // allow use async load in beforeMount
  app.$store.state.allowAsyncLoad = true;
})
