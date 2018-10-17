const actionsList = [
    {
      name: 'order',
      color: 'accent'
    },

    {
      name: 'recall',
      color: 'orange',
    },
    {
      name: 'call',
      color: 'green',
    },
    {
      name: 'chat',
      color: 'blue',
    },

    {
      name: 'links',
      color: 'light-blue',
    },
];

export default {
    functional: true,

    props: {
      active: {
        type: String,
        default: ''
      },
      block: {
        type: Boolean,
        default: false
      }
    },

    render(h, context) {
        if (!context.props.block) {
        return actionsList.map(function(action) {

            return h('v-tooltip', {props: {top:true}}, [
              h('AppAction', {
                slot:"activator",
                props: {
                  hideText: true,
                  to:{
                    name:'order',
                    params: {typeAction: action.name}},
                  dark: true,
                  siicon: 'si-'+ action.name,
                  small: context.parent.$vuetify.breakpoint.xs,
                  large:false,
                  color:  action.color,
                  fab: true,
                  outline:context.props.active ==action.name? true: false
              } }),
              context.parent.$t('actions.'+action.name)

            ]);
        });
      }  else {
        return actionsList.map(function(action) {


              return h('AppAction', {
                props: {

                  to:{
                    name:'order',
                    params: {typeAction: action.name}},
                  dark: true,
                  actionText: context.parent.$t('actions.'+action.name),
                  siicon: 'si-'+ action.name,
                //  small: context.parent.$vuetify.breakpoint.xs,
                //  large:false,
                  color:  action.color,
                  block: true
                //  fab: true,
                //  outline:context.props.active ==action.name? true: false
              } })



        });
      }

    }


}
