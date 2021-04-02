
import "core-js/stable";
import "regenerator-runtime/runtime"

import  { createSiteo} from './core';

import Vue from 'vue'

/**Progres bar */

import LoadScript from './core/vue-plugins/LoadScript';
Vue.use(LoadScript);

//  add before create siteo (on SSR same)
var app = createSiteo({
    configs: window.__SITEO_CONFIG__,
    client: true
});

app.$router.onReady(() => {

   if (window.__INITIAL_STATE__) {
        //fix problem with #hash work (on server we remove route from state, here we added route)
        window.__INITIAL_STATE__. route = app.$route;
        //fix
        // replase state from SSR
        app.$store.replaceState(window.__INITIAL_STATE__);
   } else {
    // if no window.__INITIAL_STATE__
    //all modules from store  are available after $mount()
    for( var mutation in __SITEO_INSTANCE__) {
      app.$store.commit(mutation, __SITEO_INSTANCE__[mutation]);
    }

   }
  //about  devide code client and SSR  https://bit.ly/2tnfDa4

  app.$mount('#app');
  // update theme

  // allow use async load in beforeMount
  app.$store.state.allowAsyncLoad = true;
})


// entry-client.js
/**
  Add Google analitics
*/
if (window.__SITEO_CONFIG__['SiteoPluginGanalitics']) {
    import(

        /*webpackChunkName: "analitics" */
        /*webpackMode: "lazy" */
        'vue-analytics').then((VueAnalytics)=>{
          console.log(VueAnalytics.default);
          Vue.use(VueAnalytics.default, {
            id: window.__SITEO_CONFIG__['SiteoPluginGanalitics']['ui'],
            router: app.$router
          });
          })
}



//https://github.com/typekit/webfontloader
/*
window.WebFontConfig = {
  google: {
    families: ['Roboto:300,400,500,700']
  }
};

(function(d) {
   var wf = d.createElement('script'), s = d.scripts[0];
   wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
   wf.async = true;
   s.parentNode.insertBefore(wf, s);
})(document);
**/
