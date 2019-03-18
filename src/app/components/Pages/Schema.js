
import FunctionalSpeedDeal from './Functional/SpeedDeal.vue';
import FunctionalShareWindow from './Functional/ShareWindow.vue';
import FunctionalPageToolbar from './Functional/PageToolbar.vue';
import FunctionalButtonUp from  './Functional/ButtonUp.vue';

export default {
    functional: true,
    props: {
      pageToolbar: {
        type: Boolean,
        default: false
      },
      speedDeal: {
        type: Boolean,
        default: false
      },
      shareWindow: {
        type: Boolean,
        default: false
      },

      sharing: {
        type: Boolean,
        default: false
      },

      buttonUp: {
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
      console.log(' render page ');
      return h('div', [

          // pageToolbar
          context.props.pageToolbar? h(FunctionalPageToolbar, {props: {
            contentStructure:context.props.structure,
            hightUp: 300,
            sharing: context.props.sharing
          },
          on: {
              shareWindow: ()=>{ context.parent.shareWindow = true}
            }}):'',

          ////////// Structure
          context.props.structure.map(function(section) {
              return h(section.$$, { props: section._props  } )
          }),
          ////////// Structure

          //speedDeal
          context.props.speedDeal? h(FunctionalSpeedDeal):'',

          //shareWindow
          context.props.shareWindow? h(FunctionalShareWindow, { on: {closeShare: ()=>{ context.parent.shareWindow = false}}}):'',

          //buttonUp
          context.props.buttonUp? h(FunctionalButtonUp):'',


      ])



    }


}
