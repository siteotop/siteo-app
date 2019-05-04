
//STRUCTURE



export {default as RLg}  from './RootLogo.vue';
export {default as SdMnv} from './SdMnv.vue';
export {default as PMn} from './PageMenu.vue';

// PAGE
export {default as PCt}  from  './PageContainer.vue';
export {default as PPx}  from  './PageParallax.vue';
export {default as PIm}  from  './PageImage.vue';
export {default as PYv}  from  './PageVideo.vue';
export {default as PCs}  from  './PageCarusel.vue';
export {default as PTl}  from  './PageTitle.vue';
export {default as PAv}  from  './PageAvatar.vue';
export {default as PTx}  from  './PageText.vue';
export {default as PCd}  from  './PageCard.vue';
export {default as PEx}  from  './PageExpansion.vue';
export {default as PTb}  from  './PageTabs.vue';
export {default as PLs}  from  './PageList.vue';
export {default as PTm}  from  './PageTimeline.vue';
export {default as PAl}  from  './PageAlert.vue';
export {default as PDl}  from  './PageDialog.vue';
export {default as PHt}  from  './PageHtml.vue';
export {default as PTr} from  './PageToolbar.vue';

export const RSp = 'VSpacer';

export const StPlugin = 'StPlugin';

export const RDh = 'VDivider'
export const RDv = {
  functional: true,
  render(h) {
    return h('v-divider', {props: {vertical: true}});
  }
};
