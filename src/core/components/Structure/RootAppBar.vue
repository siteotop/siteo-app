
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
    props.color = cnf.c;
    return h('v-app-bar', {
      props: props
    }, [
      (context.props.chldrn||[]).map(function(element){
        return h('StChildrenHelper', {props: {element:element, structure: ToolbarElements}})
      })
    ]);

  }
}

</script>
