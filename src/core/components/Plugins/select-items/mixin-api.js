

export default {

  props: {
    // link to api
    internalApi: {
      type: String,
      default:''
    },
    // Id for Website
    siteoId: {
       type: String,
       default: ''
    },
    limit: {
       type: String,
       default: '20'
    }
  },
  data() {
      return {
          loading: false,
          items: [],
      }
  },
  methods: {
    fetchItems() {
       console.log('goooood');

       var  config = {
          url: this.apiUrl,
          params: {
            limit: this.limit
          }
       }
       this.loading=true;
       this.$store.dispatch('callAPI', config).then(result=>{
           console.log(result);
           if (result.status==200&&result.data) {
             
               this.items =result.data.items||[];
           }
           this.loading = false;
       }).catch(error=>{
          console.log(error);
           this.loading = false;
       })

    },
  },

  computed: {
    apiUrl() {
      if (this.internalApi) {
         return this.internalApi;
      }

       var siteoId='';
       // if siteoId present
       if (this.siteoId) {
         // siteoId can be json or simple  string
         if (this.siteoId=='parentId') {
            siteoId=this.$store.getters['getSiteoConfig']('mainWebsite');
         } else {
            siteoId=this.siteoId;
         }

       } else {
         siteoId=this.$store.getters['appInstance/activeId'];
       }
       return   '/apps/'+siteoId+'/values';
    }
  }


}
