<template >
<div>
  <PageSchema :structure="structure"></PageSchema>
</div>
</template>

<script>

export default {
  name: 'PageOrder',

  components: {
      'AutoChats': {
         functional: true,
         render(h, context) {
            return h('AutoContacts', {props: {$vl: true,$clp: {outline:true, siicon: 'si-chat' } }})
         }
      },

      'AutoCalls': {
         functional: true,
         render(h, context) {
            return h('AutoContacts', {props: {$vl: true, $t: 'call',$clp: {outline:true, siicon: 'si-call' } }})
         }
      }
  },

  mapComponents: {
     locations: 'AutoLocations',
     order: 'BFormOrder',
     recall: 'BFormRecall',
     call: 'AutoCalls',
     chat: 'AutoChats',
     links: 'AutoLinks'
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
            _n:'AutoActions',
            _props: {
              active: this.typeAction
            }
          },

          {
            _n:nameAction,
            $bf: 'sm8 md6',
            _props: {
                $vl: true
            }
          }
        ];
      } else {
        bls = [
          {
            _n:'AutoActions',
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
