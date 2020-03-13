

export default {

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
