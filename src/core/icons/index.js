/**
https://github.com/vuetifyjs/vuetify/blob/dev/packages/vuetify/src/components/Vuetify/mixins/icons.ts
'complete': 'mdi-check',
  'cancel': 'mdi-close-circle',
  'close': 'mdi-close',
  'delete': 'mdi-close-circle', // delete (e.g. v-chip close)
  'clear': 'mdi-close',
  'success': 'mdi-check-circle',
  'info': 'mdi-information',
  'warning': 'mdi-exclamation',
  'error': 'mdi-alert',
  'prev': 'mdi-chevron-left',
  'next': 'mdi-chevron-right',
  'checkboxOn': 'mdi-checkbox-marked',
  'checkboxOff': 'mdi-checkbox-blank-outline',
  'checkboxIndeterminate': 'mdi-minus-box',
  'delimiter': 'mdi-circle', // for carousel
  'sort': 'mdi-arrow-up',
  'expand': 'mdi-chevron-down',
  'menu': 'mdi-menu',
  'subgroup': 'mdi-menu-down',
  'dropdown': 'mdi-menu-down',
  'radioOn': 'mdi-radiobox-marked',
  'radioOff': 'mdi-radiobox-blank',
  'edit': 'mdi-pencil',
  'ratingEmpty': 'mdi-star-outline',
  'ratingFull': 'mdi-star',
  'ratingHalf': 'mdi-star-half'
*/


import {
  mdiCheck,
  mdiCloseCircle,
  mdiClose,
  mdiCheckCircle,
  mdiInformation,
  mdiExclamation,
  mdiAlert,
  mdiChevronLeft,
  mdiChevronRight,
  mdiCheckboxMarked,
  mdiCheckboxBlankOutline,
  mdiMinusBox,
  mdiCircle,
  mdiArrowUp,
  mdiChevronDown,
  mdiMenuDown,
  mdiMenu,
  mdiRadioboxMarked,
  mdiRadioboxBlank,
  mdiPencil,
  mdiStarOutline,
  mdiStar,
  mdiStarHalf,
  mdiDotsVertical,
  mdiHome,
  mdiShareVariant,
  mdiChevronUp,
 gestureTapHold

 } from '@mdi/js'


export const vuetifyIcons = {
  complete: mdiCheck,
  cancel: mdiCloseCircle,
  close: mdiClose,
  delete: mdiCloseCircle, // delete (e.g. v-chip close)
  clear: mdiClose,
  success: mdiCheckCircle,
  info: mdiInformation,
  warning: mdiExclamation,
  error: mdiAlert,
  prev: mdiChevronLeft,
  next: mdiChevronRight,
  checkboxOn: mdiCheckboxMarked,
  checkboxOff: mdiCheckboxBlankOutline,
  checkboxIndeterminate: mdiMinusBox,
  delimiter: mdiCircle, // for carousel
  sort: mdiArrowUp,
  expand: mdiChevronDown,
  menu: mdiMenu,
  subgroup: mdiMenuDown,
  dropdown: mdiMenuDown,
  radioOn: mdiRadioboxMarked,
  radioOff: mdiRadioboxBlank,
  edit: mdiPencil,
  ratingEmpty: mdiStarOutline,
  ratingFull: mdiStar,
  ratingHalf: mdiStarHalf,
  menuDots: mdiDotsVertical,
  home: mdiHome,
  share: mdiShareVariant,
  up: mdiChevronUp,
  action: gestureTapHold
}
