

export default {

  functional: true,

  render(h, context) {

    return h('v-text-field', {
      props: context.props.vComp,
      on: context.listeners ,
      attrs: context.data.attrs}
    );
  }


}
