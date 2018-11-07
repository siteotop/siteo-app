<template >
<div>
  <PageSchema :structure="structure"></PageSchema>
</div>
</template>

<script>

export default {
  name: 'PageOrder',
  //  components: {AppActionLocations},
  mapComponents: {
     locations: 'AutoLocations',
     order: 'BFormOrder',
     recall: 'BFormRecall',
     call: 'AppActionCall',
     chat: 'AppActionChat',
     links: 'AppActionLinks'
  },

  props: {
    typeAction: {
      type: String,
      defualt: 'order'
    }
  },

  computed: {
    structure() {
      var bls = [], nameAction=this.$options.mapComponents[this.typeAction];
      console.log(nameAction);
      if (this.typeAction) {
        bls =  [

          {
            _n:'AppActionList',
            _props: {
              active: this.typeAction
            }
          },

          {
            _n:nameAction,
            $bf: 'sm8 md6',
            _props: {
                vList: true
            }
          }
        ];
      } else {
        bls = [
          {
            _n:'OrderActionButtons',
            _props: {
              block:true
            }
          }
        ]
      }


      return [
        {
          _n: 'SectionWrap',
          _props: {
            $bf: 'xs12 text-xs-center',
            //$bl:'text-xs-center',
            $bls:bls

          }
        }
      ]

    }


  }

}

</script>
