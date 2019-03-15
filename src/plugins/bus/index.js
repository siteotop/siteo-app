

export default {
  name: 'siteo-plugin-bus',

  siteoInstall: function ($coreVue, $pluginOptions) {

      function listener(event) {
          console.log(event);
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
