<template >
  <v-autocomplete
      :items="items"
      @focus="activated=true"
      v-bind="propsSelect"
      :label="correctLabel"
      item-value="_id"
      item-text="title"
      @change="change($event)"
    >

    <template v-slot:item="data">
      <v-list-item-avatar>
        <v-avatar color="primary" class="white--text"><span>{{data.item.title[0]}}</span></v-avatar>
        <!-- <img :src="data.item.avatar"> -->
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title >{{data.item.title}}</v-list-item-title>
        <v-list-item-subtitle >{{data.item.subtitle}}</v-list-item-subtitle>
      </v-list-item-content>

    </template>


    </v-autocomplete>
</template>

<script>

import  _find  from 'lodash/find';
export default {

  props: {
     label: {
        type: String,
        default: ''
     },

     nameStore: {
       type: String,
       default: ''

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

         }
      }
  },
  created() {
     this.propsSelect =  Object.assign(this.propsSelect, this.vComp);
  },
  mounted() {

  },
  watch: {
    activated (newValue, oldValue) {
        if (newValue!=oldValue&&newValue){
          this.fetchItems();
        }
    }
  },
  computed: {

      correctLabel() {
          if (this.nameStore) {
             return this.$store.state.appInstance.objectActive[this.nameStore]||'null';
          } else {
            return this.label;
          }

      },

      apiUrl() {
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
        if (element&&element.internal_url ) {
          document.location.href = element.internal_url;
        }


    }
  }



}
</script>
