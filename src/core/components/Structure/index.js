/**
  Main components for Page structure
*/

//export {default as StDrawer} from './StDrawer';
//export {default as StToolbar}  from './StToolbar';
//export {default as StRoot} from './StRoot';
//export {default as StFooter} from './StFooter';


//export {default as StLogo} from './StLogo';
//export {default as StDrawerToogle} from './StDrawerToogle';


//export const StAction = 'StAction';
//export const StSpacer = 'v-spacer';
export const StPlugin = 'StPlugin';

export const StDivider = {
  functional: true,
  name: "StDivider",
  render(h) {
    return h('v-divider', {props: {vertical: true}});
  }
};
