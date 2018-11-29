<template functional>
  <PageSchema v-else  :shareWindow="props.shareWindow" :sharing="true" :pageToolbar="true"  :structure="[
    {
      $$: 'SectionWrap',
      _props: {
        $tc: 'primary',
        $co:'v-img',
        $ht:'1',
        $he:'300',
        $_t:'display-3 white--text',
        $_d:'display-1 white--text pa-1 font-weight-medium',
        _t:props.objectService.title,
        _d:props.objectService.price + ' $',
        _p:props.objectService.picture
      }
    },

    {
      $$: 'SectionWrap',
      _props: {
        $tc: 'my-0 pa-0',
        $bc: 'my-0 pa-0',
        $tcm: 'ma-0 pa-0',
        $bls:[
           {
            $$:'AutoOrderTabs',
            $bf:'md6 elevation-4 white top-m-3'
           }
          ]
      }
    },

    {
      $$: 'SectionWrap',
      _props: {

        $bls:[
          {
            $$:'BTitle',
            _props: {
              _s: props.objectService.subtitle,
              _d: props.objectService.preview,
              _al: props.objectService.readMore||'',
              _at: 'Read more',
              $_al: 'text-xs-center',
              $aa: {color: 'default', 'siicon':'si-links'}
            }
          }

         ]
      }
    },


    ]">
  </PageSchema>

</template>

<script>

export default {
  props: {
    objectService: {
      type: Object
    },

    shareWindow: {
      type: Boolean,

    }
  }


}

</script>
