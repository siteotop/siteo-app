

export default {

  props: {
    startMessage: {
      type: [Boolean,  Object],
      default: false
    }

  },

  data() {
    return {
        LocalMessages: []
    }
  },

  created() {
      if (this.startMessage) {
        this.$_LocalMessages_add(this.startMessage);
      }

  },

  watch: {

    startMessage(newMessage) {
        if (newMessage) {
            this.$_LocalMessages_add(newMessage);
        }
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

      $_LocalMessages_render(h) {

          return h('AppMessagesBlock', {
              props: {
                  messages:   this.LocalMessages,
                  block: 'v-alert'
              }
          });

      }

  }




}
