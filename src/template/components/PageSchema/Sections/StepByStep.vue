<template functional>
<SectionWrap v-bind="props">
  <v-container grid-list-md>
   <v-layout row wrap justify-center >
    <v-flex md8 v-for="(item, i) in props._li"
     :key="i"  >
      <v-card  >
          <v-img
            aspect-ratio="1.77"
            class="white--text"

            :src="item._i"
          >
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <span class="headline">{{item._t}}</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>
          <v-card-title>
            <div>
              <span class="grey--text">{{item._s}}</span><br>

              <span>{{item._d}}</span>
            </div>
          </v-card-title>
        </v-card>
   </v-flex>
  </v-layout>
 </v-container>
</SectionWrap>
</template>

<script>
  import BaseProps from './Helper/base-props.js';
  export default {
    extends: BaseProps,
    props: {
      _li: {
        type: Array,
        default: function() {
          return [];
        },

      }
    },
    //name: 'section-action',
  }
</script>
