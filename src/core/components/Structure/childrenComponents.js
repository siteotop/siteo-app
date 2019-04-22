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
    var element = context.props.element;
    var createdComponent;

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

    var props = element._p;
    var cls = element._c;
    var cld = element._ch;

    if (context.props.defDesign) {
      var design = context.parent.$store.state.appInstance.objectActive.design[name]||false;
      if (design!==false) {
        props = {...(design._p||{}), ...(element._p||{})};
        cls = element._c? element._c: design._c;
        cld = element._ch? element._ch: design._ch;
      }
    }

    return h(createdComponent, {
     props: {
       cnf: props||{},
       cntnt: element._d||{},
       chldrn: cld
     },
     class: cls

   })



  }

}
