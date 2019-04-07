
import StpListSection from './StpListSection';

export default {
  extends: StpListSection,

  props: {
    toggleComponent: { // variants ['list', 'cards', 'card' ]
      type: String,
      default: 'cards'
    },
  }





}
