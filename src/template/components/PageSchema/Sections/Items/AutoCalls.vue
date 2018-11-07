

<script>
import Messengers from './_helper/messengers';
import Colors from './_helper/colors';
import ExtendLinks from './_extends/AutoLinks';

export default {
  extends: ExtendLinks,
  defaultAPPProperty: 'contacts',

  computed: {

      collectLinks() {
        var new_array = [];
        for (var i in this.services)  {
           var service = this.services[i];
            if (service[this.actionType]) {

                new_array.push({
                    href: this.getHrefForService(service),
                    color: Colors[service.type] || '',
                    icon:  service.type,
                    title: service.url_id,
                    subtitle: service.type,
                 });

            }
          }

          return new_array;

      }
  },

  methods: {
      getHrefForService(service) {

          if (Messengers[service.type]&&Messengers[service.type].call) {
              return Messengers[service.type].call
              .replace(/@url/g, service.url_id);

          }  else {
            return  id;
          }

      }

  }

}


</script>
