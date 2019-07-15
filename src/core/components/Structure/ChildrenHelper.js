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
       name = element.n; /*_name*/
    }

    if (baseChildren[name]) {
      createdComponent = baseChildren[name];
    }else if(  context.props.structure[name]) {
      createdComponent = context.props.structure[name];
    } else {
        createdComponent = name;
    }


    var _props, _class, _attrs, _children, _data;

    var design = context.parent.$store.state.appInstance.objectActive.design[name];
    if (design) {
        if (design._p) {
          _props = {...design._p, ...(element._p||{})};
        }
        if (design._d) {
          _data = {...design._d, ...(element._d||{})};
        }
        _attrs = element._a? element._a: design._a;
        _class = element._c? element._c: design._c;
        _children = element._ch? element._ch: design._ch;
    } else {
       _props = element._p;
       _class = element._c;
       _data = element._d;
       _attrs = element._a;
       _children = element._ch;
    }


    return h(createdComponent, {
     props: {
       cnf: _props||{},
       cntnt: _data||{},
       chldrn: _children||[]
     },
     attrs: _attrs||{},
     class: _class,
     on:  context.listeners
   })



  }

}
