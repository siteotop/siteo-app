

export default {
    functional: true,
    props: {
      
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
      return  h('div', { class: 'fill-height' },
          ////////// Structure
          h('StChildrenHelper', {
            props: {
              element:context.props.structure,
              list: true
            }})

           ////////// Structure
        )
      }


}
