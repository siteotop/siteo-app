import textField from './_helper/text-field.js';

export default {

  functional: true,

  render(h, context) {
    return textField(h, context,
      { email:true}
    );

  }


}
