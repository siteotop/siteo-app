<script>

//import SelectableProp from './Props/Selectable.vue'

//import SettingsChildren from  './Children.vue';
//console.log(SettingsChildren);
export default {
  functional: true,
  render(h, context) {
      return h('SettingsChildren', {
        props: {
          draggable: false,
          noDublicateChild: true,
          //cloning: true,
          typeHelper: 'props',
          ... context.props
        },
        on: context.listeners

      } );
  }

}

</script>
