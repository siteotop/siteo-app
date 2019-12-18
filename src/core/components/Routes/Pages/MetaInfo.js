

export default {

  computed: {
    /**
     generate canonikal href link for vue-meta
     if page is main generate start domain
    */
    canonical() {

      //console.log('route');
      //console.log(this.$route);
      if (this.$route.path == '/') {
        return this.$store.getters.CORE_HOST;
      } else {
        return this.$store.getters.CORE_HOST + this.$route.path;
      }

      /*if (this.$store.state.appInstance.objectActive._websites_page == this.pageObject._id) {
        return this.$store.getters.CORE_HOST;
      } else {
          return this.$store.getters.CORE_HOST +'/'+ this.pageObject.url;
      }*/

    },

    metaTitle() {
      return this.pageObject.meta_title;
    },


    statusError(state) {
        return this.$store.state.srvPageErr;
    }
  },

  metaInfo () {
   return {
      title: this.metaTitle,
      meta: [

        {
          name: 'description',
          vmid: 'des',
          content: this.pageObject.meta_description
        },
        {
          name: 'robots',
          vmid: 'rob',
          content: this.pageObject.meta_robots ||'index,follow'
        },

        /**
            instructions for Open Graph Protocol https://ogp.me/
        */

        {
          property: 'og:type',
          vmid: 'ogy',
          content:'article'
        },

        {
          property: 'og:title',
          vmid: 'ogt',
          content: this.pageObject.og_title|| this.pageObject.meta_title
        },

        {
          property: 'og:url',
          vmid: 'ogu',
          content: this.canonical
        },

        this.pageObject.og_image || this.pageObject.picture? {
          property: 'og:image',
          vmid: 'ogi',
          content: this.pageObject.og_image || this.pageObject.picture
        }: '',

      ],
      link: [
       {
        rel: 'canonical',
        href: this.canonical
       },
      ]

    }
  }
}
