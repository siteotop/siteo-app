import {template, DesignComponents} from './template/admin.js';
import {SiteoCoreInstall} from './core/index';
import DesignSettingsPlugin  from './template-admin/index';
//import {AdminStorePlugin} from 'core-admin/plugin.js';

SiteoCoreInstall(
  _APP_INSTANCE,
  _APP_DOMAIN,
  template,

  [/*AdminStorePlugin,*/ DesignComponents, DesignSettingsPlugin]

)
