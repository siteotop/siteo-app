<template>
  <PageSchema :structure="[{

    /*_name*/  n: 'PSc',
      _p: {
        lc: ['column']
      },
      _ch: [
         {
            /*_name*/  n: 'PTl',
           _d: {
             t: title
           },
           _p: {
             h: 'h1'
           }
         },
         {
             /*_name*/  n: 'PTx',
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
