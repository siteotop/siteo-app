

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
      return context.props.structure.map(function(section) {
          return h(section._n, { props: section._props  }  )
      })
    }


}
