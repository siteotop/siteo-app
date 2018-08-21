import * as components from 'template/components/Sections/';

export default {
    functional: true,

    props: {
        structurePage: {
            type: [Array, Object],
            default: function () {
                return [
                  {
                    _n: 'Header',
                    _d: {},
                    _s: {}
                  }
                ]
            }
        }
    },

  //  components: components,


    render(h, context ) {

        return context.props.structurePage.map(function(section) {
            return h(components[section._n], { props: {}  }  )
        })

    }

}
