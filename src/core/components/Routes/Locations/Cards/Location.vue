<template functional>
  <v-card
      @click="(event)=>{props.clickOnLocation(event, props.location)}"
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
      <v-btn :to="{name: 'location', params: {
        locationIdUrl: props.location.idUrl,
        locationId: props.location._id
      }}"  @click="(event)=>{props.clickOnLocation(event, props.location)}">
        {{parent.$t('rm')}}
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

      clickOnLocation: {
        type: Function
      }
   }
}

</script>
