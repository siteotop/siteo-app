

<script>
import Colors from './_helper/colors';
import ExtendLinks from './_extends/Links';

export default {

  extends: ExtendLinks,

  computed: {

        collectLinks() {
          var new_array = [];
          var services= this.$store.state.APP_INSTANCE.links;
          for (var i in services)  {
             var service = services[i];
              new_array.push({
                  href: service.href,
                  color: Colors[service.type] || '',
                  icon:  service.type,
                  title:  service.title,
                  subtitle: service.type,
               });

            }

            return new_array;

        }
    }




}


</script>
