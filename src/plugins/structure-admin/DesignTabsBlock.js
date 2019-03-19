

import ChildrenHeaderSlot from './Blocks/Children/HeaderSlot.vue';

const MAP_NAMES = {
  '_n': 'name',
  '_p': 'props',
  '_c': 'class',
  '_d': 'data',
  '_ch': 'children'
}


const resolvePropertyName = function(shortName) {
    if (MAP_NAMES[shortName]) {
      return MAP_NAMES[shortName];
    } else {
      return shortName;
    }


}

export default {

    name: 'DesignTabsBlock',

    functional: true,

    props: {
        designStructure: {
          type: [Array],
          default: function () {
            return [];
          }
        },
        children: {
          type: Boolean,
          default: false
        }


    },

    render(h, context) {
      var self = this;
        return  context.props.designStructure.map(function (component, indexComponent) {
                  //console.log( designStructure[nameOption])
              var componentSettings =[];
              if (component)  {
                 componentSettings = Object.keys(component);

              }
                //console.log(componentSettings);
                return h('v-expansion-panel-content', {props: {disabled: (componentSettings.length-1?false: true), hideActions: (componentSettings.length-1?false: true) }}, [
                      !context.props.children? h('div', { slot: 'header'},  [
                        component._n,
                      ])  : h(ChildrenHeaderSlot, {props: {name: component._n, ...context.props}  }),
                    h('v-card', [ h('v-card-text', [ h('v-tabs', [
                        componentSettings.map(function(shortNameSettingBlock) {
                          // name is not settings block
                          var nameSettingBlock = resolvePropertyName(shortNameSettingBlock)
                          if (nameSettingBlock=='name') {
                            return '';
                          }
                          // return settings block
                          return h('v-tab', [nameSettingBlock])
                        }),
                        componentSettings.map(function(shortNameSettingBlock) {
                            var nameSettingBlock = resolvePropertyName(shortNameSettingBlock)
                            // name is not settings block
                            if (nameSettingBlock=='name') {
                              return '';
                            }
                            // return settings block
                            return h('v-tab-item', [
                              h('settings-'+nameSettingBlock, {props: {

                                value:component[shortNameSettingBlock],
                                componentName: component._n
                              },
                              on: {
                                // input if changed value for settings block (props, class, or children)
                                input: function (value) {
                                  component[shortNameSettingBlock]=value;
                                  //self.$emit('input', )
                                }
                              }
                            })
                            ]);
                        })
                      ])
                      ]),
                    ])


                    ]
                  )

            })
      }



}
