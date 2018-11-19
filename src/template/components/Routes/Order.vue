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
            return h('AutoContacts', {props: {$vl: true, $type: 'call',$clp: {outline:true, siicon: 'si-call' } }})
         }
      },
      'AutoWrapLinks': {
         functional: true,
         render(h, context) {
            return h('AutoLinks', {props: {$vl: true, $t: 'links',$clp: {outline:true, siicon: 'si-links' } }})
         }
      }
  },

  mapComponents: {
     locations: 'AutoLocations',
     order: 'BFormOrder',
     recall: 'BFormRecall',
     call: 'AutoCalls',
     chat: 'AutoChats',
     links: 'AutoWrapLinks'
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
            $$:'AutoActions',
            _props: {
              active: this.typeAction
            }
          },

          {
            $$:nameAction,
            $bf: 'sm8 md6',
            _props: {
                $vl: true
            }
          }
        ];
      } else {
        bls = [
          {
            $$:'AutoActions',
            _props: {
              block:true
            }
          }
        ]
      }


      return [
        {
          $$: 'SectionWrap',
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
