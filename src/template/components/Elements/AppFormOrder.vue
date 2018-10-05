<script>
import {fieldsMapMake} from './AppForm/Fields/_helper/MapsSiteoFields';
export default {
  functional: true,
  name: 'AppFormOrder',

  render(h, context) {
      var structure =  context.parent.$store.state.APP_INSTANCE.design.AppFormOrder.children;
      var props =   context.parent.$store.state.APP_INSTANCE.design.AppFormOrder.props||{};
      props.propsStructure = fieldsMapMake(structure);
      props.i18nkey = "formOrder";

      return  h('AppForm', {props:  props})

  }

}

</script>
