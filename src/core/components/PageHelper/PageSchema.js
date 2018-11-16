

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
      console.log(' render page ');
      return context.props.structure.map(function(section) {
          return h(section._n, { props: section._props  } )
      })
    }


}
