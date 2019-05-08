import * as baseChildren from './index';

export default {
  functional: true,
  props: {
    element: {

    },
    structure: {
      default: function () {
        return {};
      }
    },

    defDesign: {
      type: Boolean,
      default: false
    }

  },

  render(h, context) {

    var createdComponent, name,  element = context.props.element;

    if (typeof(element) =='string') {
      name = element;
    } else {
       name = element._n;
    }

    if (baseChildren[name]) {
      createdComponent = baseChildren[name];
    }else if(  context.props.structure[name]) {
      createdComponent = context.props.structure[name];
    } else {
        createdComponent = name;
    }


    var _p, _c, _ch, _d;

    var design = context.parent.$store.state.appInstance.objectActive.design[name];
    if (design) {
        if (design._p) {
          _p = {...design._p, ...(element._p||{})};
        }
        if (design._d) {
          _d = {...design._d, ...(element._d||{})};
        }
        _c = element._c? element._c: design._c;
        _ch = element._ch? element._ch: design._ch;
    } else {
       _p = element._p;
       _c = element._c;
       _d = element._d;
       _ch = element._ch;
    }


    return h(createdComponent, {
     props: {
       cnf: _p||{},
       cntnt: _d||{},
       chldrn: _ch||[]
     },
     class: _c,
     on:  context.listeners
   })



  }

}
