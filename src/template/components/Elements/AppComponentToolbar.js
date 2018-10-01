
import AppToolbarHelp from './AppToolbarHelp';
import {HelperMenuListRenderAction, HelperChooiceVariantMenu} from '../_helper/MenuActions';
const AppToolbarHelper = {

  __render_IconTitle(h, iconTitle) {


        return h('AppIcon', {props: {name: iconTitle,  scale: 2}})

  },

  __render_DescIcon(h, desc) {
      return h(AppToolbarHelp, { props:  {iconBar: 'si-help',  desc: desc}})
  },

}

export default {
    name: 'AppComponentToolbar',
    functional: true,

    props: {

       title: {
         type: [String, Boolean],
         default: '',
       },

       desc: {
         type: [String, Boolean],
         default: '',
       },

       iconTitle: {
         type:[String, Boolean ],
         default: false
       },

       closeAction: {
         type:[Function, Boolean ],
         default: false
       },

       mainActions: {
         type: [Object, Array, Boolean],
         default: false
       },

       bindToolbar: {
         type: Object,
         default: function () {
           return  { flat:true,    light:true };
         }
       },

       backAction: {
         type: [Boolean, Function],
         default: false
       }

    },

    render(h, context) {
      return h('v-toolbar', {props: context.props.bindToolbar },
        [
          context.props.backAction? HelperMenuListRenderAction(h, {icon: 'prev', title: 'Back', event: context.props.backAction }): '',
          context.props.iconTitle? AppToolbarHelper.__render_IconTitle(h, context.props.iconTitle): '',
          h('v-toolbar-title', [context.props.title]),
          h('v-spacer'),

          context.props.desc? AppToolbarHelper.__render_DescIcon(h,   context.props.desc):'',
          context.props.mainActions? HelperChooiceVariantMenu(h, context.props.mainActions, true) :'' ,
          context.props.closeAction? HelperMenuListRenderAction(h, {icon: 'si-close', title: 'close', event: context.props.closeAction}): ''
        ]
      );


    }



}
