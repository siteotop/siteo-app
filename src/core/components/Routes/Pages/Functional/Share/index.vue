

<script>
// pageToolbar
/**  false? h(FunctionalPageToolbar, {props: {
  contentStructure:context.props.structure,
  hightUp: 300,
  sharing: context.props.sharing
},
on: {
    shareWindow: ()=>{ context.parent.shareWindow = true}
  }}):'',




  COPY FROM SCHEMA.js
//shareWindow
//  context.props.shareWindow? h(FunctionalShareWindow, { on: {closeShare: ()=>{ context.parent.shareWindow = false}}}):'',




*/
import Colors from '../../../../_helper/colors';
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

    },

    render (h) {
        return h('BLinks', {
          props: {
            items: this.collectLinks,
            $vl: this.$vl,
            $clp: {fab: true, outlined: true}
        }});

    }




}


</script>
