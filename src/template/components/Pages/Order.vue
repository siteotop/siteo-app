<template >
<div>
  <PageSchema :structure="structure"></PageSchema>
</div>
</template>

<script>
/*
<SectionWrap >
  <v-container v-if="typeAction">
     <v-layout >
       <v-flex xs12 text-xs-center>
         <AppActionList  :active="typeAction"></AppActionList>
       </v-flex>
     </v-layout>
     <v-layout row wrap justify-center>
       <v-flex sm8 md6>
         <component :is="'app-action-'+typeAction" :vList="true" ></component>
       </v-flex>
     </v-layout>
  </v-container>
  <v-container  v-else>
    <v-layout>
      <OrderActionButtons  :block="true"></OrderActionButtons>
    </v-layout>
  </v-container>
</SectionWrap>
*/

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
