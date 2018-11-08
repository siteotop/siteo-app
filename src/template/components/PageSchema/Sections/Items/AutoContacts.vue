

<script>
import Messengers from './_helper/messengers';
import Colors from './_helper/colors';
import ExtendLinks from './_extends/Links';

export default {
  extends: ExtendLinks,
  props: {
      $t: {
         type: String,
         default: 'chat'
      },
  },

  computed: {

      collectLinks() {
        var new_array = [];
        var services =this.$store.state.APP_INSTANCE.contacts;
        for (var i in services )  {
           var service = services [i];
            if (service[this.$t]) {

                new_array.push({
                    href: this.getHrefForService(service),
                    color: Colors[service.type] || '',
                    icon:  service.type,
                    title: service.title|| service.type,
                    subtitle: service.url_id ,
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
