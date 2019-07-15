<template>
  <PageSchema :structure="[{

      n/*_name*/: 'PSc',
      p/*_props*/: {
        lc: ['column']
      },
      _ch: [
         {
           n/*_name*/: 'PTl',
           d/*_data*/: {
             t: title
           },
           p/*_props*/: {
             h: 'h1'
           }
         },
         {
           n/*_name*/: 'PTx',
           d/*_data*/: {
             t: description
           },

         }
      ]
   } ]"></PageSchema>
</template>

<script>

export default {

  props : {
      status: [Number, Object],
      error_code: String,
      issuer: String,
      error_description: String,
      action: {
        type: Boolean,
        default: false
      }
  },

  computed: {

      title () {
         return `Error: ${this.status}`
      },

      description() {
         if (this.error_description) {
          return `Description: ${this.error_description}; Error code: ${this.error_code}; Issuer: ${this.issuer}`;
         }

         return  this.$t('error'+this.status);

      }

  }


}

</script>
