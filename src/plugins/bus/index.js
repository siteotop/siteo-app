

export default {
  name: 'siteo-plugin-bus',
  install: function(Vue, $coreVue) {

      var $pluginOptions = $coreVue._siteo_config['siteo-plugin-bus'];

      var $vuetify =  Vue.prototype.$vuetify;

      function listener(event) {
          console.log(event)
          if (!$pluginOptions.origin) {
              console.log('no setup origin host');
              return;
          }

          if (event.origin != $pluginOptions.origin) {
            // что-то прислали с неизвестного домена - проигнорируем..
            return;
          }

          //alert( "получено: " + event.data );
          try{
            var recieved =  JSON.parse(event.data);
            if (recieved.storeEvent && recieved.storeEventName ) {
              $coreVue.store[recieved.storeEvent](recieved.storeEventName, recieved.data);

              if (recieved.data.design&&recieved.data.design.theme)  {
                   $vuetify.theme = recieved.data.design.theme.colors;
              }

            }
          } catch (err) {
            console.log(err);
          }
     }

      if (window.addEventListener) {
        window.addEventListener("message", listener);
      } else {
        // IE8
        window.attachEvent("onmessage", listener);
      }

  }
}
