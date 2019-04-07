
import StpSection from './StpSection';

export default {
  extends: StpSection,
  props: {
    $cl: { // component list. component  which using in all $bls list (only this component)
      type: [Boolean, String],
      default: false
    },

    $clp: { // component list props.  if component has $cl will be use this
        type: Object,
        default: function () {return {};}
    },

    items: {
      type: Array,
      default: function () {
        return [];
      }
    },


    $vl:  { // version list type of list ( list like V-list )
      type: Boolean,
      default:false
    }

  }
}
