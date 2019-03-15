

import ChildrenHeaderSlot from './Blocks/Children/HeaderSlot.vue';


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
        console.log(context.props.designStructure);
    
        return  context.props.designStructure.map(function (component, indexComponent) {
                  //console.log( designStructure[nameOption])
              var componentSettings =[];
              if (component)  {
                 componentSettings = Object.keys(component);

              }
                //console.log(componentSettings);
                return h('v-expansion-panel-content', {props: {disabled: (componentSettings.length-1?false: true), hideActions: (componentSettings.length-1?false: true) }}, [
                      !context.props.children? h('div', { slot: 'header'},  [
                        component.name,
                      ])  : h(ChildrenHeaderSlot, {props: {name: component.name, ...context.props}  }),
                    h('v-card', [ h('v-card-text', [ h('v-tabs', [
                        componentSettings.map(function(nameSettingBlock) {
                          // name is not settings block
                          if (nameSettingBlock=='name') {
                            return '';
                          }
                          // return settings block
                          return h('v-tab', [nameSettingBlock])
                        }),
                        componentSettings.map(function(nameSettingBlock) {
                            // name is not settings block
                            if (nameSettingBlock=='name') {
                              return '';
                            }
                            // return settings block
                            return h('v-tab-item', [
                              h('settings-'+nameSettingBlock, {props: {

                                value:component[nameSettingBlock],
                                componentName: component.name
                              },
                              on: {
                                // input if changed value for settings block (props, class, or children)
                                input: function (value) {
                                  component[nameSettingBlock]=value;
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
