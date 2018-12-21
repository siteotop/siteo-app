

export default {

  functional: true,

  render(h, context) {
    return h('v-text-field', {
      props:{ ...context.props.vComp, value: context.props.value },
      on: context.listeners ,
      attrs: context.data.attrs}
    );
  }


}
