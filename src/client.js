

import  createApp from './core';
var app= createApp({
    configs: window.__SITEO_CONFIG__,
    APP: window['siteo-app'],
    template: window['siteo-template'],
    messages: window['siteo-locale-en']
});
if (window.__INITIAL_STATE__) {
  app.$store.replaceState(window.__INITIAL_STATE__);

} else {
  // fetch _APP_INSTANCE
  app.$store.commit('saveInstanse', _APP_INSTANCE);

}
app.$mount('#app');
