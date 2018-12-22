export default {

  data () {
    return {

        statusLoading: false // false or true only
    }

  },

  methods: {
       /*
         start spinner, hide button, clear mesagges from server
       */
       startLoading(){

         this.statusLoading = true;

       },


       /*
         spinner,  show button and reset form
       */

       stopLoading(){
         this.statusLoading = false;


       }

   }


}
