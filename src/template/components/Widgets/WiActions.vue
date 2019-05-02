<template functional>
  <BLinks :items="$options.actionsList" :$clp="{fab:true}">
    <template slot-scope="{item}">
     <PAc slot="activator"
       :href="item.href"
       :_at="item.name"
       :dark="true"
       :fab="true"
       :large="false"
       :color="item.color"
       :small="parent.$root.mobile"
       :siicon="'si-'+ item.name"
       :outline="props.active ==item.name? true: false"
       :to="{name:'order',params: {typeAction: item.name}}"
      ></PAc>
      <span>{{parent.$t('actions.'+item.name)}}</span>
    </template>
  </BLinks>
</template>
<script>


export default {


    props: {
      active: {
        type: String,
        default: ''
      },

      block: {
        type: Boolean,
        default: false
      }
    },

   actionsList : [
        {
          name: 'order',
          color: 'accent'
        },

        {
          name: 'recall',
          color: 'orange',
        },
        {
          name: 'call',
          color: 'green',
        },
        {
          name: 'chat',
          color: 'blue',
        },

        {
          name: 'links',
          color: 'light-blue',
        },

        {
          name: 'locations',
          color: 'red lighten-1',
        }
    ]


}
</script>
