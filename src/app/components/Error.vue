<template>
  <PageSchema :structure="[{
      $$:'SectionWrap',
      _props: {
        _t: title,
        _d: description,
        $tc: 'primary',
        $_t: 'white--text display-4',
        $_d: 'headline white--text',
        $bls: [
          {
            $$:'AppAction',
            $bf:'text-xs-center'

          },
        ]
      }
    } ]"></PageSchema>
</template>

<script>

export default {

  props : {
      status: [Number, Object],
      error_code: String,
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
          return `${this.error_description}; Error code: ${this.error_code};`;
         }

         return  this.$t('error'+this.status);

      }

  }


}

</script>
