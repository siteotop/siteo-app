<template>
  <v-menu eager offset-overflow
  right z-index="1000" nudge-right="60" max-width="500" max-height="500"  :close-on-content-click="false" v-model="menuActive">
      <template v-slot:activator="{ on }">
          <v-btn v-on="on" fab :style="{backgroundColor:value}" >
            <v-icon>$vuetify.icons.edit</v-icon>
          </v-btn>
      </template>

        <v-card v-if="menuActive">
          <v-toolbar dense >

            <v-btn small :color="reserveColor" fab @click="valueData=reserveColor" >
              <v-icon>{{$options._icons.refresh}}</v-icon>
            </v-btn>

            <v-spacer></v-spacer>



            <v-btn small  fab  @click="menuActive=false" >
              <v-icon>$vuetify.icons.close</v-icon>
            </v-btn>

        </v-toolbar>
        <v-card-text class="pa-0">
        <MDPalette  @input="setNameColor($event)"></MDPalette>



    </v-card-text>

        </v-card>
</v-menu>

</template>

<script>
import MixinVModelInput from '../../forms/AppForm/Fields/_mixins/v-model-input';
import MDPalette from './MDPalette.vue';

import {mdiRefresh} from '@mdi/js'
export default {

    $type: 'background',
    components: {
      MDPalette,

    },

    _icons: {
      refresh: mdiRefresh
    },
    mixins: [MixinVModelInput],

    data() {

        return {

            menuActive: false,
            reserveColor: '',

        }

    },

    created() {
        this.reserveColor= this.value;
    },



    methods: {



        setNameColor($event) {
            console.log($event);
            this.valueData= $event.hex;

        }

    }




}
</script>
