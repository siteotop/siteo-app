<template>

<v-menu>
   <v-btn  slot="activator" flat>
     <v-badge v-if="statusGPS==-1" right color="error ">
          <span  slot="badge" >!</span>
          <AppIcon class="red--text"  name="gps-no-fixed" ></AppIcon>
     </v-badge>

    <span class="green--text"  v-if="statusGPS>0"> <AppIcon  name="gps-fixed" ></AppIcon></span>
    <span  v-if="!statusGPS"> <AppIcon  name="gps-no-fixed" ></AppIcon></span>
   </v-btn>
     <v-card>
       <v-list>
         <v-list-tile avatar>

           <v-list-tile-content>
             <v-list-tile-title> {{$t('gpsFixed.country_code')}}: {{countryCode}}</v-list-tile-title>
             <v-list-tile-sub-title>{{$t('gpsFixed.ip')}}: {{IP}}</v-list-tile-sub-title>
           </v-list-tile-content>
           <v-list-tile-action>

           </v-list-tile-action>
         </v-list-tile>
       </v-list>
       <v-divider></v-divider>

       <v-card-actions>

         <v-btn v-if="countryCode" v-on:click="sendGpsValue()">Получить </v-btn>
         <v-btn v-if="!countryCode" v-on:click="getCountryCode('gpsSend')" >Определить</v-btn>
       </v-card-actions>
     </v-card>
   </v-menu>

</template>


<script>

import axios from 'axios';

export default {

    props: {

      autoStartGPS: {
        type: Boolean,
        default: false


    }},

    data() {
        return {
            countryCode: '',
            IP: '',  // (ip!='127.0.0.1'? ip : '' ),
            statusGPS: 0,

        }

    },




    created() {

        console.log(this.autoStartGPS);
        if (this.autoStartGPS) {
          this.getCountryCode();
        }

      },
        // 1 get country_code byIP if we can not find it in cache for this IP

        // 2 save country_code in store UserOnline
        // 3 save country_code for this IP  in LocalForage for next query
        // 4 when user register we need update country_Code on the server
        // 5 when user logining we can ask about update country_code if country_code is not the same in country_code  in store



    methods: {

      sendGpsValue(emit) {
          this.$emit('gpsSend', this.countryCode);
      },



      getCountryCode(emit) {

          if (this.countryCode) {
             return false;

          }
        //  this.startedGPS = 1;

          var self = this;
          axios.get('https://api.ipstack.com/check?access_key=9ba593d02e7a04d9d442ca010a7cf714').then(function(result){

               //  console.log('Gps good');
               //  console.log(result);
               if (result.data.ip) {
                  self.IP = result.data.ip;
               }

               if (result.data.country_code)  {
                    self.statusGPS = true;
                //  if (!self.IP) {
                //    self.IP = result.data.ip;
                //    }
                    if (!emit) {
                      emit = 'gpsReady';
                    }
                    self.$emit( emit, result.data.country_code);
                    self.countryCode = result.data.country_code;
                    //self.$store.commit('UserOnline/updateModel', {'countryAlpha2':result.data.country_code});
               } else {
                   self.statusGPS = -1;
               }
              // self.country_code = result.country_code;

          }).catch(function(error){
              self.statusGPS = -1;
              console.log('Gps error ');
              console.log(error);
          })


      }



    }



}

</script>
