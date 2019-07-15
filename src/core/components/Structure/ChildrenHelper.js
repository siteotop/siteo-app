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
        if (design.p/*_props*/) {
          _props = {...design.p/*_props*/, ...(element.p/*_props*/||{})};
        }
        if (design.d/*_data*/) {
          _data = {...design.d/*_data*/, ...(element.d/*_data*/||{})};
        }
        _attrs = element._a? element._a: design._a;
        _class = element._c? element._c: design._c;
        _children = element._ch? element._ch: design._ch;
    } else {
       _props = element.p/*_props*/;
       _class = element._c;
       _data = element.d/*_data*/;
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
