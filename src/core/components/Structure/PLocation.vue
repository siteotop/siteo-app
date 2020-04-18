<template>
<div>
   <template
     v-for="(element, index) in chldrn||[]"
    >
      <StChildrenHelper @click="openCard=true" :element="element">
      </StChildrenHelper>
  </template>
   <CardOpenLocation
    v-if="openCard"
    :locationId="cntnt.a"
    :websiteId="cntnt.b"
    @close-dialog="openCard=false"
   >
   </CardOpenLocation>
</div>
</template>

<script>
export default {
    props: [
      'chldrn', 'cntnt', 'cnf'
    ],

    components: {
      CardOpenLocation: ()=> import( /* webpackChunkName: "CardOpenLocation" */ '../Routes/Location/Cards/OpenLocation.vue'),
    },

    data() {
      return {
        openCard: false
      }
    }
}
</script>
