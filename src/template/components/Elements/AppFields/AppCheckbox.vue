<script>

import AbstractInput from './mixins/input.js';

export default {

  mixins: [AbstractInput],
  //components: {VCheckbox},
  functional: true,

  render(h, context) {
    var el = context.props.el;
    /**how to include checkbox*/
  //  if (el.falseValue==undefined) {el.unchecked = false;}
//    if (el.checked==undefined) {el.checked = true;}

    return h('v-checkbox', {
        props: {
           required: el.required,
           'input-value': el.value,
           label: el.label,
           'false-value': (el.falseValue),
           'true-value': (el.trueValue),
           'error-messages': el.feedback,
           hint: el.description,
           error: el.state
        },
        on: {
          change: (value)=>{

            el.value = value;
            /*  if (el.value == el.falseValue) {
                el.value = value;

             } else {
                el.value = el.falseValue;
             }*/
            }
        }
    }

    );

  }

}

</script>
