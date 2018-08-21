
export default {
    //extends: ExtendAppStructure,
    //props: ['design'],
    name: 'AppToolbarItems',
    functional :true,

    props: {
        extension: {
          type: Boolean,
          default: false
        }
    },

    render (h, context) {
    //  console.log(JSON.stringify(context.props));
      var items =  context.parent.$root.AppToolbarMenu ||[];
    //  console.log(JSON.stringify(design));
      if (!items.length) {
        return '';
      }

      return h('v-toolbar-items',  {
        slot: context.props.extension? 'extension': undefined,
        //props:context.props.props,
        class: context.data.class
      },

       items.map(function (item) {
          if (item.title) {
            return h('v-btn', {props: {to: item.path, exact: true, flat: true}}, [ h('AppIcon', {props: {name:item.i}}),  item.title ])
          }
       })

      )

    }
};
