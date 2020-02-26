<template >
  <v-autocomplete
      :items="items"
      @focus="activated=true"
      v-bind="filterPropsSElected"
      :label="correctLabel"
      v-model="valueData"

      @change="change($event)"
    >
    <template v-slot:prepend-item>
        <v-skeleton-loader v-if="loading" type="list-item-avatar-two-line@3">
        </v-skeleton-loader>
    </template>
    <template v-slot:item="data">
      <v-list-item-avatar>
        <v-avatar color="primary" class="white--text"><span>{{data.item[propsSelect.itemText][0]}}</span></v-avatar>
        <!-- <img :src="data.item.avatar"> -->
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title >{{data.item[propsSelect.itemText]}}</v-list-item-title>

      </v-list-item-content>
    </template>
  </v-autocomplete>

</template>

<script>
import VModelInput from '../forms/AppForm/Fields/_mixins/v-model-input';
import  _find  from 'lodash/find';
export default {
  mixins: [VModelInput],

  props: {
     label: {
        type: String,
        default: ''
     },

     nameStore: {
       type: String,
       default: ''

     },
     activateOnStart: {
        type: Boolean,
        default: false
     },
     // when use siteo API
     internalApi: {
       type: String,
       default:''
     },

     // Id for Website
     siteoId: {
        type: String,
        default: ''
     },

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
        loading: false,
        items: [],
        activated: false, // not activate get items
        propsSelect: {
           solo: true,
           light: true,
           rounded: true,
           hideDetails: true,
           itemValue:"_id",
           itemText:"title"
         }
      }
  },
  /*
  created() {
    console.log( this.vComp);
     //this.propsSelect =  Object.assign(this.propsSelect, this.vComp);
     console.log( this.propsSelect);
  },*/
  mounted() {
    if (this.activateOnStart) {
       this.activated = true;
    }
  },
  watch: {
    activated (newValue, oldValue) {
        if (newValue!=oldValue&&newValue){
          this.fetchItems();
        }
    }
  },
  computed: {

      filterPropsSElected() {
          return Object.assign(this.propsSelect, this.vComp);
      },

      correctLabel() {
          if (this.nameStore) {
             return this.$store.state.appInstance.objectActive[this.nameStore]||'null';
          } else {
            return this.label;
          }

      },

      apiUrl() {
        if (this.internalApi) {
           return this.internalApi;
        }

        var siteoId='';
         if (this.siteoId) {
           siteoId=this.siteoId;
         } else {
           siteoId=this.$store.getters['appInstance/activeId'];
         }
         return   '/apps/'+siteoId+'/values';
      }




  },

  methods: {
    fetchItems() {
       console.log('goooood');

       var  config = {
          url: this.apiUrl,
          params: {
            limit: 20
          }
       }
       this.loading=true;
       this.$store.dispatch('callAPI', config).then(result=>{
           console.log(result);
           if (result.status==200&&result.data) {
               this.items =result.data.items||[];
           }
           this.loading = false;
       }).catch(error=>{
          console.log(error);
           this.loading = false;
       })

    },

    change(eventId) {
        var element = _find (this.items, ['_id', eventId]);
        //console.log(element);
        if (element&&element.url_page ) {
          document.location.href = element.url_page;
        }


    }
  }



}
</script>
