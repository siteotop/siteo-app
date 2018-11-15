import Rendering from '../../http/rendering';
//import Messages from 'core/mixins/messages.js';
import Loader from './component-loading.js';
export default {


  mixins: [ Loader],
  $page_uri: false,

  data () {
    return {

        pageStructure: false

      }
  },


  created() {

        this.getDataPageStructure();

  },


  /**
    the function using when change routing
  */
  beforeRouteUpdate(to, from, next){

      this.getDataPageStructure();
      next();
  },




  methods: {



    /*********  Function which we can mixins in our form component */

      /**
        response object must include data
      **/
      successGetStructure(dataStructure){

      },


      /**
            set basic data from response server when we create page
      */
      setServerData(serverData) {
        //  console.log(serverData);
         //console.log('SetServerData');

        //if we have no structure it base API call
          var content = '';
          if (serverData.structure) {
              content = serverData.structure;

             if (serverData.meta) {
                this.$_ContentI18N_set(serverData.meta);
             } /*else {
                this.$_ContentI18N_setFromRoutes();

             }*/



          } else {
             content = serverData;
          }

            this.pageStructure  = content;
          //  this.initPageStructure();
            this.successGetStructure(this.pageStructure);

      },


      /**
      abstract method which start when page get structure from server
      */


      // sdf
      /*
        request to the server  for getting page  structure or messages
      */
      getDataPageStructure(){


        const server_url = this.$route.fullPath;
        const server_path =  this.$route.path;

        console.log(this.$route);

        // For 401 Unauthorized we not using prerenderStructure. USe only Api for communications
        if (_PRERENDER&&_PRERENDER.path == server_path && _PRERENDER.status && _PRERENDER.status!=401) {
             console.log('A catch prerender structure ');
             this.pageStructure = null;
             this.getDataStructureFromPrerender(_PRERENDER);

        } else {
          console.log('page structure = ');
          console.log(this.pageStructure);
          if (this.pageStructure) {

             this.getDataStructureFromClass();
            // return false;
          } else {
            if (this.$options.$page_uri) {
              console.log('get json from server');
              this.getDataStructureFromServer(server_url);
            }
          }


        }



      },


      /**
        if pageStructure != null
      */
      getDataStructureFromClass() {
        console.log('start prepare');
        this.preparePageStructure();
        this.successGetStructure(this.pageStructure);

      


      },

      getDataStructureFromServer(server_url) {
        var self = this;
        this.startLoading();
        Rendering.get(server_url).then(function (response) {
                self.stopLoading();
                self.setServerData(response.data);


        }).catch(function(error) {
            //console.log(error);
            self.stopLoading();
            self.$store.dispatch('generateSystemMessageRespone', error)

           //  self.catchError(error.response);

        });

      },


      /**
          this function start only one time when start first page
      */
      getDataStructureFromPrerender(prerender) {

        if (prerender.status < 400  ) {

              this.setServerData(prerender.structure);
            //  console.log('start errors');
          } else {

              var error_response = {status:prerender.status , data: prerender.structure };

              console.log(error_response);
              this.$store.dispatch('generateSystemMessageRespone', {response: error_response});
            //  this.catchError(error_response);

          }



      }



  }

}
