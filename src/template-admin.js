import {template, DesignComponents} from './template/admin.js';
import {SiteoCoreInstall} from './core/index';
import DesignSettingsPlugin  from './template-admin/index';
//import {AdminStorePlugin} from 'core-admin/plugin.js';

SiteoCoreInstall(
  template,
  {
    WEBSITE: _WEBSITE, // createDefaultDesign(_WEBSITE),
    DNS: _DNS
  },

  [/*AdminStorePlugin,*/ DesignComponents, DesignSettingsPlugin]

)
