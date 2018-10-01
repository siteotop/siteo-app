
/**
  Helper for v-text-field elements
  @param {function} h - createElement
  @param {Object} context - context of functional component
  @param {object} validation - object of validators for vee-validate
*/
export default function (h, context, validation) {
  validation.required =true;

  return h('v-text-field', {
    props: context.props,
    on:context.listeners,
    attrs: {name:context.props.name},
    directives: [
      {  // directive  vee-validate (v-validate)
        name: 'validate',
        value: validation,
      }
    ]

   });
}
