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
];

export default {
    functional: true,
    props: ['active'],
    render(h, context) {

        return actionsList.map(function(action) {
            return h('AppAction', {props: {
              hideText: true,
              to:{
                name:'order',
                params: {typeAction: action.name}},
              dark: true,
              siicon: 'si-'+ action.name,
              large:false,
              color:  action.color,
              fab: true,
              outline:context.props.active ==action.name? true: false
            } })
        });

    }


}
