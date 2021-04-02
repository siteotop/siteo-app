export {default as PAl}  from  './PAlert.vue';
export {default as PAv}  from  './PAvatar.vue';
export {default as PCd}  from  './PCard.vue';
export {default as PCt}  from  './PContainer.vue';
export {default as PRw}  from  './PRow.vue';
export {default as PMn}  from  './PMenu.vue';
export {default as PHt}  from  './PHtml.vue';
export {default as PIc}  from  './PIcon.vue';
export {default as PIm}  from  './PImage.vue';
export {default as PSh}  from  './PSheet.vue';
export {default as PTx}  from  './PText.vue';
export {default as PTl}  from  './PTitle.vue';
export {default as PTr}  from  './PToolbar.vue';

export {default as PRp}  from  './PResponsive.vue';
export const RSp = 'VSpacer';
export const RDv = {
  functional: true,
  render(h) {
    return h('v-divider', {props: {vertical: true}});
  }
};
