

<script>
import Colors from './_helper/colors';
import Sharing from './_helper/sharing';
import ExtendLinks from './_extends/links';

export default {

  extends: ExtendLinks,
  defaultAPPProperty: 'links',

  props: {

    ogTitle: {
      type: String,
      default: ''
    },

    cannonical: {
      type: String,
      default: ''
    }

  },

  computed: {

        collectLinks() {
          var new_array = [];
          for (var i in Sharing)  {
             var service = Sharing[i];
              new_array.push({
                  href: this.getHrefForService(service),
                  color: Colors[i] || '',
                  icon:  i,
                  title:  i,
                  subtitle: i,
               });

            }

            return new_array;

        }
    },

    methods: {
      getHrefForService(service) {
          return service.sharer
          .replace(/@url/g, this.cannonical)
          .replace(/@title/g,  this.ogTitle)
        //  .replace(/@image/g, this.ogImage)
        //  .replace(/@description/g, this.ogDescription)


      }

    }




}


</script>
