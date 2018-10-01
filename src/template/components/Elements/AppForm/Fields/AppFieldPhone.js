import textField from './_helper/text-field.js';

/**
  Functional Component for input Phone for OrderForm
*/
export default {

  functional: true,
  render(h, context) {
    context.props.prefix="+";
    return textField(h, context,
      {numeric:true, min: 10,  max:14}
    );

  }


}
