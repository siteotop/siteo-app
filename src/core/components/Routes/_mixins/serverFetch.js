

export default {
    data() {
        return {
          moduleAction: 'getList',
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
        function for register module
      */
      registerModule(preserveState) {
        let opt = {moduleItems: true};
        if (this.moduleAction == 'getObject') {
          opt = {};
        }
        this.$store.registerApiModule({
          name: this.$options.nameModule,
          module: this.getStoreModule? this.getStoreModule(): this.$options.storeModule,
          moduleOptions:  opt,
          preserveState: preserveState
        });
      },

      /**
        find real params and getting prefix for params 
      */
      setClearParamFromPath(dirtyValue, paramName) {
          let real = paramName + 'Real';
          let prefix = paramName + 'Prefix';
          if (this[prefix]) {
            this[real] = dirtyValue.replace(this[prefix], "");
          } else {
            this[real] = dirtyValue;
          }
      },

      errorResolve(error) {
        if (error.response) {
          this.$store.commit('setSrvPageErr',  error.response.data );
        } else {
             this.$store.commit('setSrvPageErr', {status: 500}  )
        }
      },

      /**
        registerModule();
        fetchItem();
      */
      fetchItem(){

         // use limit from settings website
         // usefull for websites with short list, where need show all list with values


         this.loaded = true;

         return new Promise ((resolve, reject)=>{

             this.$store.dispatch(this.$options.nameModule+'/'+this.moduleAction, this.getParamsForFetch()).then((result)=>{

                if (this.resultResolve) {
                  this.resultResolve(result);
                }

                this.loaded = false;
                resolve(true);
             }).catch(error=>{
               this.errorResolve(error);
               this.loaded = false;
               resolve(error);
               //reject(error);
             });;
         })

      },

      serverMount() {
          if (this.$store.state[this.$options.nameModule]) {
              this.registerModule(true);
          } else {
            this.registerModule();
            this.fetchItem();
          }

      }
    }
}
