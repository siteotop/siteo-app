export default {

  functional: true,

  props: {
    vList: {
      type: Boolean,
      default: false
    }
  },


  render(h, context){
      return h('AutoCalls', {props: {vList: context.props.vList, actionType: 'chat'}});
  }

}
