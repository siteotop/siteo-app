

import {SiteoCoreInstall} from './core/index';
import template from './template/install.js';
import DesignSettingsPlugin  from './template-admin/index';
import {DesignComponents} from './template/admin.js';
//import {AdminStorePlugin} from 'core-admin/plugin.js';

SiteoCoreInstall(
  _APP_INSTANCE,
  _APP_DOMAIN,
  template,

  [/*AdminStorePlugin,*/ DesignComponents, DesignSettingsPlugin]

)
