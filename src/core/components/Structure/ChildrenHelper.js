import * as baseChildren from './index';
const dynamicBase = {
  'PCs':()=> import( /* webpackChunkName: "carusel" */ './PCarusel.vue'),
  'PDl':()=> import( /* webpackChunkName: "dialog" */ './PDialog.vue'),
  'PDl':()=> import( /* webpackChunkName: "menu" */ './PDialogMenu.js'),
  'PEx':()=> import( /* webpackChunkName: "expansion" */ './PExpansion.vue'),
  'PPl':()=> import( /* webpackChunkName: "PPl" */ './PProgressLinear.vue'),
  'PSd':()=> import( /* webpackChunkName: "PSd" */ './PSpeedDeal.vue'),
  'PSg':()=> import( /* webpackChunkName: "carusel" */ './PSlideGroup.vue'),
  'PSr':()=> import( /* webpackChunkName: "PSr" */ './PScroll.vue'),
  'PTa':()=> import( /* webpackChunkName: "PTa" */ './PTable.vue'),
  'PTb':()=> import( /* webpackChunkName: "carusel" */ './PTabs.vue'),
  'PTm':()=> import( /* webpackChunkName: "PTm" */ './PTimeline.vue'),
  'PYv':()=> import( /* webpackChunkName: "PYv" */ './PYoutubeVideo.vue'),
  'PLs':()=> import(
      /* webpackChunkName: "PLs" */
      /* webpackPrefetch: true */

      './PList.vue'),
  'PAd':()=> import( /* webpackChunkName: "adsense" */ './PAdsense/Index.vue'),
  'PPx':()=> import( /* webpackChunkName: "parallax" */ './PParallax.vue'),
  'PLc':()=> import( /* webpackChunkName: "PLc" */ './PLocation.vue'),

};

const ChildrenOne = function (h, context, element) {
  var createdComponent, name;
   // element = context.props.element;

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
      if element is Array of elements
    */
    list: {
       type: Boolean,
       default: false
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

    if (context.props.list) {
     return(context.props.element||[]).map(function(element){
       return ChildrenOne(h, context, element);
     });
    } else {
      return ChildrenOne(h, context, context.props.element);
    }




  }

}
