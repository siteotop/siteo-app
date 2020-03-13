

export default {
    data() {
        return {
          loaded: false,
          loadingMore: false,
        }
    },

    mounted(){
        this.serverMount();
    },


    // remove module
    destroyed() {
      this.$store.unregisterApiModule ( this.$options.nameModule);
    },

    /**
       works on ssr
    */
    serverPrefetch () {
      // возвращает Promise из действия, поэтому
      // компонент ждёт данные перед рендерингом
      this.registerModule();
      return this.fetchItem();
    },

    methods: {

      
      /**
        registerModule();
        fetchItem();
      */
      fetchItem(){

         // use limit from settings website
         // usefull for websites with short list, where need show all list with values


         this.loaded = true;

         return new Promise ((resolve, reject)=>{

             this.$store.dispatch(this.$options.nameModule+'/getList', this.getParamsForFetch()).then((result)=>{

                if (this.resultResolve) {
                  this.resultResolve(result);
                }

                this.loaded = false;
                resolve(true);
             }).catch(error=>{
               if (error.response) {
                 this.$store.commit('setSrvPageErr',  error.response.data );
               } else {
                    this.$store.commit('setSrvPageErr', {status: 500}  )
               }
               this.loaded = false;
               resolve(error);
               //reject(error);
             });;
         })

      },

      serverMount() {
        if (this.$store.state.allowAsyncLoad) {
            this.registerModule();
            this.fetchItem();
        } else {
          this.registerModule(true);
        }
      }
    }
}
