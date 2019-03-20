/**
  Main components for Page structure
*/

export {default as StDrawer} from './StDrawer';
export {default as StToolbar}  from './StToolbar';
export {default as StRoot} from './StRoot';
export {default as StFooter} from './StFooter';

export {default as StVerMenu } from './StVerMenu.vue';
export {default as StDrawerToolbar } from './StDrawerToolbar.js';
export {default as StHorMenu} from './StHorMenu';
export {default as StLogo} from './StLogo';
export {default as StDrawerToogle} from './StDrawerToogle';
export {default as StTitle} from './StTitle';

export const StAction = 'StAction';
export const StSpacer = 'v-spacer';

export const StDivider = {
  functional: true,
  name: "StDivider",
  render(h) {
    return h('v-divider', {props: {vertical: true}});
  }
};
