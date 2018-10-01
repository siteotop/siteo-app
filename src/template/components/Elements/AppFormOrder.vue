<script>
/*
const  FunctComp = {
    functional: true,
    render(h, c){
      console.log(c);
      return   h('v-text-field', c.data);
    }
}
*/


export default {
  functional: true,
  name: 'AppFormOrder',

  render(h, context) {
      var structure =  context.parent.$store.state.APP_INSTANCE.design.AppFormOrder.children,
      props =   context.parent.$store.state.APP_INSTANCE.design.AppFormOrder.props||{};
      props.propsStructure = structure;
      props.i18nkey = "formOrder";

      return  h('AppForm', {props:  props})

  }

}

</script>
