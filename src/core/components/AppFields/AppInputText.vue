<script>

import AbstractInput from './mixins/input.js';


export default {

  mixins: [AbstractInput],
  functional: true,

  render(h, context) {

   var el = context.props.el;
   var value = context.props.value;

   if (context.listeners.input) {
    var   input_on = context.listeners.input;
   } else {
     var  input_on = function (value) {
          el.value = value;
      }
   }

  // console.log(context);
   return h('v-text-field', {props: {
     browserAutocomplete: el.autocomplete? "on" : "off",
     type: el.dynamic_type? el.dynamic_type : 'text',
     prefix: el.prefix,
     suffix: el.suffix,
     label: el.label,
     required: el.required,
     mask: el.mask,
     appendIcon: el.appendIcon,
     //appendIconCb: ,
     dontFillMaskBlanks: false,
     returnMaskedValue: true,
     placeholder: el.placeholder,
     errorMessages: el.feedback,
     error: el.state,
     value: value,
     disabled: el.disbled,
     hint: el.description,
     loading: el.loading,
     counter: el.counter&&el.validate.max? el.validate.max: false

   },
   domProps: {
     name: el.name,
     maxlength: el.validate.max? el.validate.max : null
   },
   on: {
     'input': input_on,
     'click:append' : el.append_icon_cb || function () {}
   }
}, [
     el.progres?  h('v-progress-linear', { slot:'progress',  attrs: {slot:'progress'}, props: el.progress}):''
   ]);

  }

}

</script>
