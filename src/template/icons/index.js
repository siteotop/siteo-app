import {
  mdiHome,
  mdiFilterVariant,
  mdiAccountSearch,
  mdiMapMarker,
  mdiLibraryBooks,
  mdiMagnify,
  mdiForum,
  mdiSettings,
  mdiArrowUpThick,
  mdiSortVariant,
  mdiViewList,
  //mdiViewGrid,
  //mdiViewModule
 } from '@mdi/js'

import './siteo.js';

export default {

    'si-home': mdiHome,   // main link
    'si-services': mdiViewList, // link for services
    'si-places': mdiMapMarker, // link for subjects
    'si-experts': mdiAccountSearch,
    'si-blog': mdiLibraryBooks,
    'si-action': mdiMagnify,
    'si-qa': mdiForum,
    'si-settings': mdiSettings,
    'si-arrow-down': '',
    'si-arrow-up': mdiArrowUpThick,
    'si-arrow-left': '',
    'si-arrow-right': '',
    'si-sort': mdiSortVariant,
    'si-filter':   mdiFilterVariant
    //'si-grid-1': mdiViewList,
    //'si-grid-2': mdiViewGrid,
    //'si-grid-3': mdiViewModule,



};
