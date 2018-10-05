<script>
import {fieldsMapMake} from './AppForm/Fields/_helper/MapsSiteoFields';

export default {
  functional: true,
  name: 'AppFormRecall',
  render(h, context) {
    return  h('AppForm', {props: {i18nkey: 'formRecall', propsStructure: fieldsMapMake(['name', 'phone'])   } })
  }

}

</script>
