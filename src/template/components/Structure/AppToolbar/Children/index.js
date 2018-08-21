export {default as AppToolbarItems} from './Items';
export {default as AppToolbarLogoIcon} from './LogoIcon';
export {default as AppToolbarSideIcon} from './SideIcon';
export {default as AppToolbarTitle} from './Title';
export {default as AppToolbarAction} from './Action';
export const VSpacer = 'v-spacer';

export const AppToolbarDivider = {
  functional: true,
  render(h) {
    return h('v-divider', {props: {vertical: true}});
  }
} ;
