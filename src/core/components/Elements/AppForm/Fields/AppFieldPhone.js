/**
  Functional Component for input Phone for OrderForm
*/
export default {

  functional: true,
  render(h, context) {
    context.props.prefix="+";
    context.listeners.paste = function(ev) {
        let paste = (ev.clipboardData || window.clipboardData).getData('text');
        console.log(paste);
        /**
          delete specials chars for phone number  ()-+
        */
        console.log('need create filtering for phone number ')
    }
    return h('v-text-field',  context.data);
    /*return textField(h, context,
      {numeric:true, min: 10,  max:14}
    );*/

  }


}
