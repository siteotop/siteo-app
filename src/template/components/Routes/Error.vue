<template>
<div>
  <PageSchema :structure="[{
      $$:'SectionWrap',
      _props: {
        _t: title,
        _d: description,
        $tc: 'primary',
        $_t: 'white--text display-4',
        $_d: 'ma-2 display-1 white--text',
        $bls: [
          {
            $$:'AppAction',
            $bf:'text-xs-center'

          },
        ]
      }
    } ]"></PageSchema>
</div>

</template>

<script>

export default {

  props : {
      status: [Number, Object]
  },

  computed: {

      // this code described in lang file
      isTitle() {
        if ( typeof (this.status) =='object')  {
            return false;
        }  else {
          return true;
        }

      },

      title () {

          if (this.isTitle) {
              return  this.$t('page'+this.status+'.title')
          } else {
            return 'Server Error ' + this.status.status;
          }
      },

      description() {
          if (this.isTitle) {
            return this.$t('page'+this.status+'.description');
         } else {
           return this.status.message;
         }
      }

  }


}

</script>
