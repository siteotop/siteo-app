
<script>

import {ToolbarElements, createToolbarProps} from './PToolbar.vue';

/**
Main App toolbar (Future Vuetify 2.0 v-app-bar
Top Bar Menu in APP, where is logo, site name, and top menu
*/

export default {
  functional: true,

  render(h, context) {
    var cnf = context.props.cnf;

    var props = createToolbarProps(cnf);
    props.app = true;
    props.clippedLeft = cnf.s;
    props.clippedRight = cnf.t;
    props.collapseOnScroll = cnf.y;
    props.elevateOnScroll= cnf.v;
    props.fadeImgOnScroll = cnf.w;
    props.hideOnScroll = cnf.x;
    props.invertedScroll= cnf.u;
    props.scrollOffScreen= cnf.z;
    props.scrollTarget= cnf.ab;
    props.scrollThreshold = cnf.ac;
    props.shrinkOnScroll  = cnf.ad;

    console.log(props);
    return h('v-app-bar', {
      props: props
    },
      h('StChildrenHelper', {
        props: {
          element:context.props.chldrn,
          list:true,
          structure: ToolbarElements
      }})
    );

  }
}

</script>
