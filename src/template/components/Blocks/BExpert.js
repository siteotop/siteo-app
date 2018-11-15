
  import BTitleProps from './_extends/b-title-props.js';

  export default {
      extends: BTitleProps,
      functional: true,

      render(h, context) {
        var _p_ = context.props;

        return h('BTitle', { props: {..._p_, $vc: _p_.$vc|| 'elevation-1 text-xs-center',  $ms: _p_.$ms|| 150, $_mt: (_p_._$mt===undefined? true : _p_.$_mt), $_t: _p_.$_t|| 'headline', $_d:  _p_.$_d||'body-2 font-weight-light',   } })
      }
  }
