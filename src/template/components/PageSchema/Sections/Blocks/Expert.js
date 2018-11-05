
  import BTitle from  './Title.vue';
  import BTitleProps from './_extends/b-title-props.js';

  export default {
      extends: BTitleProps,
      functional: true,

      render(h, context) {
        return h(BTitle, { props: {_t: context.props._t, _d:context.props._d, _s:context.props._s, _m:context.props._m, $vc: 'elevation-1 text-xs-center',  $ms: 150, $mt:true, $_t: 'headline', $_d:'body-2 font-weight-light' } })
      }
  }
