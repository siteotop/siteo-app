import Dialog from './Dialog.vue';

export default {

  functional: true,
  render(h, context) {
      return h(Dialog, {props: {actionProps: context.props }});
  }

}
