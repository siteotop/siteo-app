import Icon from 'vue-awesome/components/Icon.vue'
import './siteo.js';

export default  function(bundle) {
  if (bundle) {
      for (var i  in bundle) {
         var icon = {};
         if (typeof(bundle[i])=='string') {
            icon[i] = {
              width: 24,
              height: 24,
              d: bundle[i]
            }
          } else {
            icon = bundle[i];
          }
         Icon.register(icon);
      }

  }

}
