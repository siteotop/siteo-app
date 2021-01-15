<template >

  <v-container>
    <v-row v-if="loading"  justify="center"   alignContent="center" class="text-center" >
      <template v-for="(i) in [1,2,3]">
      <v-col  cols="12" md="4" >
        <v-skeleton-loader
           boilerplate
           type="card"

         ></v-skeleton-loader>
      </v-col>
    </template>
    </v-row>
    <v-row v-else>
      <template v-for="(item, i) in items">
        <v-col
          cols="12" md="4"
        >

        <CardValues
          v-bind="item"
          :about="{
            text:textButton,
            bind: {
                href: item.ext_p? item.url_page : (prefixSite+item.url_page)
              }
            }"
        >
        </CardValues>
      </v-col>
    </template>
  </v-row>
  </v-container>

</template>

<script>
import mixinApi from '../select-items/mixin-api.js'
import CardValues from '../../Routes/Values/Cards/Values.vue';
export default {
  mixins: [mixinApi],
  components: {
    CardValues
  },
  props: {
    prefixSite: {
      type: String,
      default: ''
    },
    textButton: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      loading: true,
    }
  },
  mounted() {
    this.fetchItems();
  }


}
</script>
