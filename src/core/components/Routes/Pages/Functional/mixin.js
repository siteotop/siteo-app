

export default {

    methods: {
      /**
       Function for Menu
       go to id element
      */
      async  gotoContent(event,hash) {
        //make pause for onScroll
        event.preventDefault();
        this.scrollPause = true;
        setTimeout(()=>{
           this.scrollPause = false;
        }, 400)
        await  this.$vuetify.goTo('#'+hash, {offset: 100, duration: 40});
        this.tab = hash;

        //await  new Promise(resolve => setTimeout(, 200))
      },
    }
}
