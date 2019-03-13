
import SectionListWrap from './SectionListWrap';

export default {
  extends: SectionListWrap,

  props: {
    toggleComponent: { // variants ['list', 'cards', 'card' ]
      type: String,
      default: 'cards'
    },
  }





}
