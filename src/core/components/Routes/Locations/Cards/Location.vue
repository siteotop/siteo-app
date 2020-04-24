<template functional>
  <v-card
      @click="(event)=>{props.clickOnLocation(event, props.location)}" :dark="props.active"
      :color="props.active?'primary darken-2':''"
      :ripple="false"
    >
    <v-card-title>{{props.index}}. {{props.location.title}} {{propsactive}}</v-card-title>
    <v-card-subtitle>
      {{props.location.street}},  {{props.location.city}} {{props.location.region}} {{props.location.country}}
    </v-card-subtitle>
    <v-card-text>
      <div>  {{props.location.preview}}</div>

    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn v-if="!props.active"  @click="(event)=>{props.clickOnLocation(event, props.location)}">
        {{parent.$t('rm')}}
      </v-btn>
      <v-btn v-else  @click="(event)=>{props.clickOnLocation(event,false)}">
        <v-icon>$vuetify.icon.close</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>

export default {
   props: {
      location: {
        type: Object,

      },
      index: {
        type: Number
      },
      active: {
        type: Boolean,
        default: false
      },
      clickOnLocation: {
        type: Function
      }
   }
}

</script>
