<template>
  <PageSchema :structure="[{

      _n: 'SpCt',
      _p: {
        lc: ['column']
      },
      _ch: [
         {
           _n: 'SpTtl',
           _d: {
             t: title
           },
           _p: {
             h: 'h1'
           }
         },
         {
           _n: 'SpTxt',
           _d: {
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
