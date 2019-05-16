<template>
  <v-menu z-index="1000" max-width="500" max-height="650"  :close-on-content-click="false" v-model="menuActive">
         <template v-slot:activator="{ on }">
           <v-text-field
             label="color"
             outline
             v-on="on"
             readonly
             v-model="valueData">
             <template v-slot:append>
               <v-btn  small fab :color="valueData" @click="menuActive=true">
                 <AppIcon  name="si-settings"></AppIcon>
               </v-btn>
             </template>

           </v-text-field>
         </template>

        <v-card v-if="menuActive">
          <v-toolbar dense >

            <v-btn small :color="reserveColor" fab @click="valueData=reserveColor" ><AppIcon name="si-refresh"></AppIcon></v-btn>
            <v-btn small fab @click="removeColor()" ><AppIcon name="si-delete"></AppIcon></v-btn>
            <v-spacer></v-spacer>
            <v-toolbar-title v-if ="valueData">{{valueData}}</v-toolbar-title>
            <v-toolbar-title v-else >no selected</v-toolbar-title>
            <v-btn small :class="classActiveButton" fab  @click="closeMenu()" > <AppIcon name="si-check"></AppIcon> </v-btn>
            <v-btn small  fab  @click="menuActive=false" > <AppIcon name="si-close"></AppIcon> </v-btn>

        </v-toolbar>
        <v-card-text class="pa-0">
          <v-tabs  >
            <v-tab >
                Theme Palette
            </v-tab>
            <v-tab >
                Material Design Palette
            </v-tab>
            <v-tab-item >
                <ThemePalette :typeName="$options.$type" :value="eventResult" @input="setNameColor($event)" ></ThemePalette>
            </v-tab-item>
            <v-tab-item >
                <MDPalette :typeName="$options.$type" :value="eventResult" @input="setNameColor($event)"></MDPalette>
            </v-tab-item>
          </v-tabs>



    </v-card-text>

        </v-card>
</v-menu>

</template>

<script>

import MDPalette from '../../ColorPalette/MDPalette.vue'
import ThemePalette from '../../ColorPalette/ThemePalette.vue'
import MixinVModelInput from '../../../forms/AppForm/Fields/_mixins/v-model-input';
export default {

    $type: 'background',
    components: {
      MDPalette,
      ThemePalette
    },

    props: {
      hexType:  {
        type: Boolean,
        default: false
      }
    },

    mixins: [MixinVModelInput],

    data() {

        return {

            menuActive: false,
            reserveColor: '',
            eventResult: {name:'', text:'', hex: ''},
        }

    },

    created() {
        this.reserveColor= this.value;
    },

    computed: {
        name () {
            return this.$options.$type;
        },

        /**
        selected color
        */
        classActiveButton() {
           return this.eventResult.name+' '+this.eventResult.text;
        }

    },

    methods: {
        closeMenu() {


            this.menuActive=false;

        },

        removeColor() {
          this.valueData = '';
        },


        setNameColor($event) {
            this.valueData= $event.name;
            this.eventResult = $event;
        }

    }




}
</script>
