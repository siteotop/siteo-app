

//import FunctionalShareWindow from './Functional/ShareWindow.vue';

export default {
    functional: true,
    props: {
      shareWindow: {
        type: Boolean,
        default: false
      },

      sharing: {
        type: Boolean,
        default: false
      },

      structure: {
          type: Array,
          default: function() {
            return [];
          }
      }
    },

    render(h, context) {
      if (!context.props.structure ||!context.props.structure.length) {
        return '';
      }

      // Add div because was error
      return  h('div',
          ////////// Structure
           context.props.structure.map(function(element){
            return h('StChildrenHelper', {props: { element:element}})
          })
          ////////// Structure
        )
      }


}
