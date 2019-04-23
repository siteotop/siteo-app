
//STRUCTURE


export {default as SdTtl} from './SdTtl';
export {default as SdTgl} from './SdTgl';
export {default as SdLgo}  from './SdLgo.vue';
export {default as SdMnv} from './SdMnv.vue';
export {default as SdMnh} from './SdMnh';

// PAGE
export {default as SpCt}  from  './SpCt.vue';
export {default as SpTlb}  from  './SpTlb.vue';
export {default as SpPrl}  from  './SpPrl.vue';
export {default as SpImg}  from  './SpImg.vue';
export {default as SpVid}  from  './SpVid.vue';
export {default as SpTtl}  from  './SpTtl.vue';
export {default as SpAvt}  from  './SpAvt.vue';
export {default as SpTxt}  from  './SpTxt.vue';

export {default as SpCrd}  from  './SpCrd.vue';
export {default as SpCrs}  from  './SpCrs.vue';
export {default as SpExp}  from  './SpExp.vue';
export {default as SpTbs}  from  './SpTbs.vue';
export {default as SpLst}  from  './SpLst.vue';
export {default as SpTml}  from  './SpTml.vue';


export const StPlugin = 'StPlugin';

export const SpDvd = 'VDivider'
export const SpDvv = {
  functional: true,
  render(h) {
    return h('v-divider', {props: {vertical: true}});
  }
};
