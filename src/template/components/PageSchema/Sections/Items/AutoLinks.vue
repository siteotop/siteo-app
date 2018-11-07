

<script>
import Colors from './_helper/colors';
import ExtendLinks from './_extends/AutoLinks';

export default {

  extends: ExtendLinks,
  defaultAPPProperty: 'links',
  props: {
      actionType: {
         type: String,
         default: 'openurl'
      }
  },
  computed: {

        collectLinks() {
          var new_array = [];
          for (var i in this.services)  {
             var service = this.services[i];
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
