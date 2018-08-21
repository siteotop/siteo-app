import template from './template/install.js';
import {SiteoCoreInstall} from './core/index';

SiteoCoreInstall(
  template,
  {
    WEBSITE:  _WEBSITE,
    DNS: _DNS
  }
)
