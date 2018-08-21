
var helperMessage = function (h, message, type) {
  return h(type,   {
     attrs: {
            value: message.state,
            color: message.type,
            transition: "scale-transition",
            dismissible:true,

          //timeout:message.timeout,
            'multi-line': true,
            vertical: true,
            top: true,


        },
      model: {
          value: message.state,
          callback: function(v) {
            message.state = v;
          },
          expression: "message.state"
      }
  }
      ,

      [
          message.text,
          message.action? h('v-btn', {
              attrs: { to: message.action.to },
            }, [ message.action.text ]) : '',
        //<v-btn flat @click.native="message.state = false">Close</v-btn>
         (type=='v-snackbar'? h('v-btn', {
                  attrs: {flat:true},
                  nativeOn: {
                    click: function($event) {
                      message.state = false
                    }
                  }

                },
                ['Close']
              ): '')

      ]
);

}


export default {

    //mixins: [IsMobile],

    //name: 'AppMessagesBlock',

    props: {

        filter: {
          type: Boolean,
          default: false
        },

        block: {
          type: String,
          default: 'v-snackbar'
        },
        messages: {
          type: Array,
          default: []
        }
    },




   functional: true,


   render(h, context) {

        var props = context.props;
        //console.log(context);


        return h( 'div',

                    [

                  
                     //  Mobile.methods.getIsMobile(context.parent)?
                       props.messages.map(function(message) {
                              return  helperMessage(h, message, props.block );
                        })


                    ]




          )

    }




}
