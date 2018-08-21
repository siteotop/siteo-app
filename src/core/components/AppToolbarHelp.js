import ToolbarMenu from './extends/ToolbarMenu.js';
import AppComponentToolbar from './AppComponentToolbar';
export default {
  name: 'AppToolbarHelp',
  extends: ToolbarMenu,
  components: {AppComponentToolbar},
  props: {
    desc: {
      type: [String, Boolean],
      default: '',
    }
  },
  methods: {
    renderMenuContent(h) {
      var self = this;
     return   h('v-card', [
         h(AppComponentToolbar, {props: { iconTitle:'help-circle', title: 'Help',  bindToolbar: {dense: true, dark:true, flat: true, color: 'accent'}, closeAction: function () {self.statusMenu = false}}}),
         h('v-card-text', [ this.desc])

      ])

    }
  }

}
