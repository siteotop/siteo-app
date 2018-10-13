export default {

  functional: true,

  props: {
    vList: {
      type: Boolean,
      default: false
    }
  },



  render(h, context){
      return h('AppActionCall', {props: {vList: context.props.vList, actionType: 'chat'}});
  }

}
