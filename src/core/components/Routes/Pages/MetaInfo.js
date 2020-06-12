

export default {

  computed: {
    /**
     generate canonikal href link for vue-meta
     if page is main generate start domain
    */
    canonical() {
      let path = this.$route.path;
      path = path.endsWith('/')? path.slice(0, -1): path;
      /*if (this.$route.path == '/') {
        return this.$store.getters.CORE_HOST;
      } else {
        return this.$store.getters.CORE_HOST + this.$route.path;
      } */
      return this.$store.getters.CORE_HOST + path
    },

    metaLinks() {
       var metalink = [
         {
              rel: 'canonical',
              href: this.canonical
         },

      ];

      if (this.autoHreflang) {
          // path is diferent for multiwebsites
          var langPath='';
          if (this.$route.path != '/') {
            langPath = this.$route.path;
          }
         const langs = this.$store.state.appInstance.objectActive.langs;
         langs.map((website)=>{
           metalink.push({
                rel:"alternate",
                hreflang: website.lang,
                href: website.url + langPath
           });
         })

      }

      return metalink;

    },

    metaTitle() {
      return this.pageObject.meta_title;
    }
  },

  metaInfo () {
   return {
      title: this.metaTitle,
      meta: [

        {
          name: 'description',
          vmid: 'des',
          content: this.pageObject.meta_description||this.metaDescr||this.metaTitle
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
          content: this.pageObject.og_title|| this.metaTitle
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
      link: this.metaLinks

    }
  },
  methods: {
    replaceTitle(meta_title) {
       return meta_title.replace(/\{\{([^}]+)\}\}/, (i, match)=>{
              if (match == 'N') {
                return this.countItems;
              }
              return   match
          });
    }
  }
}
