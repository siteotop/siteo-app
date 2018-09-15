<template>
  <v-menu max-width="500" max-height="650"  :close-on-content-click="false" v-model="menuActive">

        <v-btn fab slot="activator" :style="{backgroundColor:value}" ><AppIcon scale="1" name="settings"></AppIcon></v-btn>
        <v-card v-if="menuActive">
          <v-toolbar dense >

            <v-btn small :color="reserveColor" fab @click="valueData=reserveColor" ><AppIcon name="reload"></AppIcon></v-btn>

            <v-spacer></v-spacer>



            <v-btn small  fab  @click="menuActive=false" > <AppIcon name="cancel"></AppIcon> </v-btn>

        </v-toolbar>
        <v-card-text class="pa-0">
        <MDPalette  @input="setNameColor($event)"></MDPalette>



    </v-card-text>

        </v-card>
</v-menu>

</template>

<script>
import MixinVModelInput from '../mixins/v-model-input';
import MDPalette from './MDPalette.vue'
export default {

    $type: 'background',
    components: {
      MDPalette,

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
