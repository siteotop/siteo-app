

<script>

import Colors from './colors';
import Sharing from './sharing';

export default {

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
                icon:  service.i,
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

    },

    render (h) {
        return h('div',
          [this.collectLinks.map(function(link) {
            return  h('v-btn', {props: {
              color: link.color,
              large: true,
              dark: true,
              fab:true,
              href: link.href,

            },
            attrs: {
                target: "_blank"
            },
            class: 'ma-1'
          }, [
                h('v-icon', link.icon)
            ] );
          }  )
      ])

    }




}


</script>
