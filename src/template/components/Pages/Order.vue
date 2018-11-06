<template >
<div>
  <PageSchema :structure="structure"></PageSchema>
</div>
</template>

<script>

export default {
  name: 'PageOrder',
  //  components: {AppActionLocations},


  props: {
    typeAction: {
      type: String,
      defualt: 'order'
    }
  },

  computed: {
    structure() {
      var bls = [], nameAction='';

      if (this.typeAction =='locations') {
         nameAction = 'AutoLocations';
      } else {
        nameAction = 'app-action-'+this.typeAction;
      }

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
