const langMenu =  function (h, parent) {
    return h('v-menu', {props: {left: true}}, [
        h('v-btn', {
            props: {
                icon: true
            },
            slot: 'activator'
        }, [
            parent.$store.getters.LANG_PORTAL.toUpperCase()
        ]),

        h('v-list',
          parent.$store.getters.LIST_LANG.map(function (li){
              return h('v-list-tile', {attrs: {href: li.d}},  [
                h('v-list-tile-title', [li.n])
              ])
          })
        )
    ])
};

const SHORT_NAME = 'AppFooter';
/**
  Footer for website
*/
export default {
    //mixins: [ExtendAppStructure],
    functional: true,
    name: 'AppFooter',
  //  children: true,
    wrapped: 'VFooter',

    render(h, context) {
      var design = context.parent.$store.state.appInstance.design[SHORT_NAME] || {};
      return h('v-footer', {
          props: {
            app: true,
            height:'auto',
            ...design.props
          },
          class: design.class
        },
          [
            h('v-container', {props: {fluid: true, 'text-xs-center': true}}, [
                h('v-layout', [
                  h('v-flex', [
                    h('v-btn', {
                      props: {
                        flat: true
                      },
                      attrs: {
                        href: 'https://siteo.top'
                      }
                    },
                    [
                      h('AppIcon', {props: {name: 'siteo-grey'}} ),
                      h('span', {
                        class: {
                          'grey--text': true,
                          'body-1': true,
                          'text--lighten-1': true,
                          'hidden-xs-only': true
                        }
                      }, [ 'siteo.top'])
                    ])
                  ]),

                  h('v-spacer'),
                  h('v-flex', [langMenu(h, context.parent)] )
                ])
            ])
          ]
        )

    }

}
