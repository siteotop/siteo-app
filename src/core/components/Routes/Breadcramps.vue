<template>
<div>
  <v-breadcrumbs class="pl-2"
  :items="breadc">
    <template v-slot:item="{ item }">
      <v-breadcrumbs-item
        v-bind="item.bread"
      >
        {{ item.text}}
      </v-breadcrumbs-item>
    </template>

  </v-breadcrumbs>
  <script v-html="breadcrumbs" type="application/ld+json">
  </script>
</div>
</template>

<script>
export default {

    props: {
       lastTitle: {
         type: String,
         default: ''
       }
    },

    data() {
      return {
        breadc: [],
      }
    },

    created() {
      this.createBreadc();

    },

    methods: {
      createBreadc() {

         // app link
         let host = this.$store.getters.getSiteoConfig('host');
         this.breadc.push({
           bread: {
             href: 'https://'+ host,
           },
          text: host,
          property:"item",
          typeof:"WebPage"
         });
         this.breadc.push({
          text: this.$store.state.appInstance.objectActive.name,
          bread: {
            to: '/',
            disabled:false,
          },
          property:"item",
          typeof:"WebPage"
         });
         // last link
         if (this.lastTitle) {
           this.breadc.push({
              text: this.lastTitle,
              bread: {
                to: this.$route.path,
                disabled: true
              }
           });
         }
       },
    },
    computed: {
      breadcrumbs() {
        return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": this.breadc.map((item, i)=>{
          return {
            "@type": "ListItem",
            "position":(i+1),
            "name": item.text,
            "item": item.bread.href? item.bread.href:(  this.$store.getters.CORE_HOST + item.bread.to)
          }
        })
        }
      }
    }
}
</script>
