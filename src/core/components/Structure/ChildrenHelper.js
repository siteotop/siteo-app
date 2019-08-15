import * as baseChildren from './index';

export default {
  functional: true,
  props: {

    /**
      @type Object or String
      Full Object which describe element or string name for element (for Example PLt )
    */
    element: {

    },

    /**
      @type Object  of structure
      Addititonal structure for baseChildren

    */
    structure: {
      default: function () {
        return {};
      }
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
        _attrs = element.a/*_attrib*/? element.a/*_attrib*/: design.a/*_attrib*/;
        _class = element.c/*_class*/? element.c/*_class*/: design.c/*_class*/;
        _children = element.h/*_children*/? element.h/*_children*/: design.h/*_children*/;
    } else {
       _props = element.p/*_props*/;
       _class = element.c/*_class*/;
       _data = element.d/*_data*/;
       _attrs = element.a/*_attrib*/;
       _children = element.h/*_children*/;
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
