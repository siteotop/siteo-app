

export default {


  data() {
    return {
        LocalMessages: []
    }
  },


  methods: {



      $_LocalMessages_add( string_message, type, action) {
         if (typeof(string_message)=='object') {
            string_message.state = true;
            string_message.type = type;
            this.LocalMessages.push(string_message);
         } else {
           this.LocalMessages.push({type:type, text:string_message , state: true, action: action});
         }

      },

      $_LocalMessages_clear() {

          this.LocalMessages = [];
      },

  }




}
