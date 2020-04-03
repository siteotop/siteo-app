import * as baseChildren from './index';
const dynamicBase = {
  'PCs':()=> import( /* webpackChunkName: "PCs" */ './PCarusel.vue'),
  'PDl':()=> import( /* webpackChunkName: "PDl" */ './PDialog.vue'),
  'PDl':()=> import( /* webpackChunkName: "PDl" */ './PDialogMenu.js'),
  'PEx':()=> import( /* webpackChunkName: "PEx" */ './PExpansion.vue'),
  'PPl':()=> import( /* webpackChunkName: "PPl" */ './PProgressLinear.vue'),
  'PSd':()=> import( /* webpackChunkName: "PSd" */ './PSpeedDeal.vue'),
  'PSg':()=> import( /* webpackChunkName: "PSg" */ './PSlideGroup.vue'),
  'PSr':()=> import( /* webpackChunkName: "PSr" */ './PScroll.vue'),
  'PTa':()=> import( /* webpackChunkName: "PSr" */ './PTable.vue'),
  'PTb':()=> import( /* webpackChunkName: "PTb" */ './PTabs.vue'),
  'PTm':()=> import( /* webpackChunkName: "PTm" */ './PTimeline.vue'),
  'PYv':()=> import( /* webpackChunkName: "PYv" */ './PYoutubeVideo.vue'),
  'PLs':()=> import( /* webpackChunkName: "PLs" */ './PList.vue'),
  'PAd':()=> import( /* webpackChunkName: "adsense" */ './PAdsense/Index.vue'),

};
export default {
  functional: true,
  props: {

    /**
      @type Object or String
      Full Object which describe element or string name for element (for Example PRw )
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
      // fixed component very often used
      createdComponent = baseChildren[name];
    }else if(  context.props.structure[name]) {
       // using prop structure
      createdComponent = context.props.structure[name];
    } else {
        // dynamic components using import
        if (dynamicBase[name]) {
            createdComponent = dynamicBase[name] ;
        } else {
          // text name component
          createdComponent = name;
        }



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
