<template>
  <div><v-tabs

     centered
     color="primary darken-1"
     dark
     value="recall"
     :iconsAndText="icon"

   >
     <v-tabs-slider color="primary"></v-tabs-slider>

     <v-tab v-for="(BComponent ) in getTabsActions" :key="BComponent.index" :to="onlyTabs?'':BComponent.to" >
       {{BComponent._n}}

       <AppIcon v-if="icon" :name="BComponent._i"></AppIcon>

     </v-tab>

     <v-tab-item v-if="onlyTabs" eager
       v-for="(BComponent) in getTabsActions"  :key="BComponent.index"
      >
       <component :is="BComponent.$$" ></component>
     </v-tab-item>

   </v-tabs>
    <component v-if="!onlyTabs" :is="$options.mapComponents[typeAction]" ></component>
 </div>
</template>

<script>

export default {
  props: {
    typeAction: {
      type: String,
      defualt: 'order'
    },

    onlyTabs: { // turn on tabs (not router-link)
      type: Boolean,
      default: true
    },

    icon: {
      type: Boolean,
      default: true
    }

  },
  data() {
    return {
      activeTab: this.typeAction
    }

  },

  mapComponents: {

     order: 'BFormOrder',
     recall: 'BFormRecall',
     call: 'WiCalls',
     chat: 'WiChats',
     links: 'WiWrapLinks',
     locations: 'WiLocations',
  },
  components: {
      'WiChats': {
         functional: true,
         render(h, context) {
            return h('WiContacts', {props: {$vl: true,$clp: {outline:true, siicon: 'si-chat' } }})
         }
      },

      'WiCalls': {
         functional: true,
         render(h, context) {
            return h('WiContacts', {props: {$vl: true, $type: 'call',$clp: {outline:true, siicon: 'si-call' } }})
         }
      },
      'WiWrapLinks': {
         functional: true,
         render(h, context) {
            return h('WiLinks', {props: {$vl: true, $t: 'links',$clp: {outline:true, siicon: 'si-links' } }})
         }
      }
  },

  computed: {
    getTabsActions () {
        var tabs = [];
        var cmpns = this.$options.mapComponents;
        for (var id in cmpns) {
           tabs.push({
             _n: id,
             index: id,
             to: {name:'order',params: {typeAction:id}},
             $$: cmpns[id],
             _i: 'si-'+id
           });
        }

        return tabs;
    }

  }

}

</script>
