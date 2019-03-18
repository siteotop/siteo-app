
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
  render(h) {
    return h('v-divider', {props: {vertical: true}});
  }
};

//export {default as  AppFooterAbout } from './AppFooterAbout.vue';
//export {default as  AppFooterMenu } from './AppFooterMenu.vue';
