
//STRUCTURE



export {default as RLg}  from './RootLogo.vue';
export {default as SdMnv} from './SdMnv.vue';
export {default as SdMnh} from './SdMnh';

// PAGE
export {default as PCt}  from  './PageContainer.vue';
export {default as PPx}  from  './PageParallax.vue';
export {default as PIm}  from  './PageImage.vue';
export {default as PYv}  from  './PageVideo.vue';
export {default as PCs}  from  './PageCarusel.vue';

export {default as SpTlb}  from  './SpTlb.vue';



export {default as PTl}  from  './PageTitle.vue';
export {default as SpAvt}  from  './SpAvt.vue';
export {default as SpTxt}  from  './SpTxt.vue';

export {default as SpCrd}  from  './SpCrd.vue';

export {default as SpExp}  from  './SpExp.vue';
export {default as SpTbs}  from  './SpTbs.vue';
export {default as SpLst}  from  './SpLst.vue';
export {default as SpTml}  from  './SpTml.vue';
export {default as PAl}  from  './PageAlert.vue';
export {default as SpDlg}  from  './SpDlg.vue';
export {default as SpHtm}  from  './SpHtm.vue';


export const StPlugin = 'StPlugin';

export const SpDvd = 'VDivider'
export const SpDvv = {
  functional: true,
  render(h) {
    return h('v-divider', {props: {vertical: true}});
  }
};
