import * as components from './Sections';

export default {
    functional: true,

    props: {
        structurePage: {
            type: [Array, Object],
            default: function () {
                return [
                  {
                    // name section
                    _n: 'Header',
                    // data section
                    _d: {
                      _ti: 'Title  Header Block ',  //
                      _de: 'Description Header Block',  //
                      _at: 'Action Text',  //
                      _ah: 'Action Href',  //
                      _bc: '', // background color
                      _bi: '', // background image  
                    },
                    // settings section
                    _s: {

                    }
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
