<template >
  <v-autocomplete
      :items="showRealItems? items : [startObject] "
      @click="setActivateOnClick"
      @focus="setActivateOnFocus"
      v-bind="filterPropsSElected"
      :label="correctLabel"
      v-model="valueData"
      :search-input.sync="search"
      autocomplete
      @change="change($event)"
    >
    <template v-slot:prepend-item>
        <v-skeleton-loader v-if="loading" type="list-item-avatar-two-line@3">
        </v-skeleton-loader>
    </template>
    <template  v-slot:item="data">
      <v-list-item-avatar>
        <v-avatar color="primary" class="white--text"><span>{{data.item[filterPropsSElected.itemText][0]}}</span></v-avatar>
        <!-- <img :src="data.item.avatar"> -->
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title >{{data.item[filterPropsSElected.itemText]}}</v-list-item-title>

      </v-list-item-content>
    </template>
  </v-autocomplete>

</template>

<script>
import VModelInput from '../forms/Fields/_mixins/v-model-input';
import  _find  from 'lodash/find';
import  _debounce  from 'lodash/debounce';
import mixinApi from './mixin-api.js'

export default {
  mixins: [VModelInput, mixinApi],

  props: {
     label: {
        type: String,
        default: ''
     },

     // name field in main store
     nameStore: {
       type: String,
       default: ''

     },
     activateOnStart: {
        type: Boolean,
        default: false
     },

     startObject: {
       type: [Boolean, Object],
       default: false
     },

     changeUrlPage: {
        type:Boolean,
        default: false
     },
     /**
      Function on event change
     */
     eventOnChange: {
       type:[Function, Boolean],
       default: false
     },
     // when use siteo API


     vComp: {
       type: Object,
       default: function () {
         return {

         }
       }
     }
  },

  data() {
      return {
        startObjectShow: false,
        

        activated: false, // not activate get items;
        search:null
      }
  },
  /*
  created() {
    console.log( this.vComp);
     //this.propsSelect =  Object.assign(this.propsSelect, this.vComp);
     console.log( this.propsSelect);
  },*/
  mounted() {
    if (this.startObject!==false){
        this.startObjectShow = true;
        //this.valueData = this.startObject[this.filterPropsSElected.itemValue];
    }
    if (this.activateOnStart) {
       this.activated = true;
    }
  },
  watch: {
    activated (newValue, oldValue) {
        if (newValue!=oldValue&&newValue){
          this.fetchItems();
        }
    },

    search(searchtext, oldSearchText){

        this.searching(searchtext);

    },
  },
  computed: {
      showRealItems() {
          return   this.activated||!this.startObjectShow;
      },
      filterPropsSElected() {
          return Object.assign({
             solo: true,
             light: true,
             rounded: true,
             hideDetails: true,
             itemValue:"_id",
             itemText:"title"
           }, this.vComp);
      },

      correctLabel() {
          if (this.nameStore) {
             return this.$store.state.appInstance.objectActive[this.nameStore]||'null';
          } else {
            return this.label;
          }

      },






  },

  methods: {

    setActivateOnClick() {
        this.activated=true;
    },
    setActivateOnFocus() {
       this.activated=true;
    },

    searching: _debounce(function(e){
        console.log(e);
    }, 250),



    change(eventId) {
        if (this.startObjectShow) {
          this.startObjectShow = false;
        }
        var element = _find (this.items, [this.filterPropsSElected.itemValue, eventId]);

        if (this.changeUrlPage) {
          if (element&&element.url_page ) {
            document.location.href = element.url_page;
          }
        }

        if (this.eventOnChange) {
          this.eventOnChange(element);
        }
    }
  }



}
</script>
