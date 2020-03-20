

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


      setClearParamFromPath(dirtyValue, paramName) {
          let real = paramName + 'Real'; 
          let prefix = paramName + 'Prefix';
          if (this[prefix]) {
            this[real] = dirtyValue.replace(this[prefix], "");
          } else {
            this[real] = dirtyValue;
          }
      },
      /*
          dirty category with prefix or suffix
          examples mathes for locations
      */

      findPrefixes() {
        //example patch "/where-eat:category(-[A-Za-z0-9_\-]+?)?:location(-in-[A-Za-z0-9_\-]+)?" ;
        var path = this.$store.getters.getSiteoConfig('seo_path_'+this.$options.nameModule);
        // find params names
        let array1;
        /// find names for params
        var regex1=new RegExp(":([a-z]+?)\\(", "g");
        var mathes_params_names = [];
        //[[":category(", "category"], [":location(", "location"]]
        while ((array1 = regex1.exec(path)) !== null) {
            mathes_params_names.push(array1[1]);
        }
        /// find prefix for params
        var regex1=new RegExp("\\((.*?)\\[", "g");
        var mathes_params_values = [];
        //  [["(-[", "-"], ["(-in-[", "-in-"]]
        while ((array1 = regex1.exec(path)) !== null) {
            mathes_params_values.push(array1[1]);
        }

        if (mathes_params_names.length>0) {
            mathes_params_names.map((param_name, index)=>{
                let pname = param_name + 'Prefix';
                if (this[pname]!==undefined) {
                  this[pname] = mathes_params_values[index]||'';
                }
            })
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
