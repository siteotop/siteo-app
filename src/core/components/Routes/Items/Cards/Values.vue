<template functional>
  <v-hover>
    <v-card

       slot-scope="{ hover }"
       :class="`elevation-${hover ? 12 : 2}`"
    >

          <v-img
            aspect-ratio="1.61"
            class="primary darken-2 white--text"
            :gradient="hover?'to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)':''"
            :src="props.thumb['420']"
            :alt="props.title"
          >
           <v-toolbar flat class="transparent ">
                  <v-avatar size="32" class="ma-1 white--text" :color="hover?'primary darken-2':'primary'">{{props.index}}</v-avatar>
                  <v-spacer></v-spacer>
                  <v-btn v-if="props.videoId"  fab small @click="(event)=>{props.clickOnVideo({videoId: props.videoId, title: props.title})}">
                    <v-icon>$vuetify.icons.video</v-icon>
                  </v-btn>


           </v-toolbar>



            <!--<v-container fill-height fluid>
              <v-row >
                <v-col  >

                </v-col>

                <v-col class="text-center" >
                  <span v-if="!hover" class="headline">{{props.title}}</span>
                  <div v-else class="align-center ">
                        <BPrice class="headline font-weight-bold "
                          :discount="props.discount"
                          :price="props.price">
                        </BPrice>
                      <div>
                        <PBt  :to="props._to"></PBt>
                      </div>
                  </div>
                </v-col>
              </v-row>
            </v-container>-->
          </v-img>
          <v-list-item>

       <v-list-item-content>
         <v-list-item-title class="headline"><h3>{{props.title}}</h3></v-list-item-title>
         <v-list-item-subtitle>{{props.subtitle}}</v-list-item-subtitle>
       </v-list-item-content>
      </v-list-item>
      {{props.comp}}
      <v-card-text >
        {{props.preview}}
      </v-card-text>
        <!--  <v-card-title>
            <BPrice class="headline font-weight-medium" :discount="props.discount" :price="props.price"></BPrice>
            <v-spacer></v-spacer>
            <PBt :to="props._to" :fab="true" :large="false"></PBt>
          </v-card-title> -->
        <v-divider  ></v-divider>
          <v-card-actions >
            <v-spacer></v-spacer>
                <v-btn
                  tag="a"
                  disabled
                  text
                  color="deep-purple accent-4"
                >
                  {{parent.$store.getters.getSiteoConfig('t_re')||parent.$t('rm')}}
                </v-btn>
                <v-btn
                  tag="a"
                  disabled
                  text
                  color="primary accent-4"
                >
                 {{parent.$store.getters.getSiteoConfig('t_ac')||parent.$t('action')}}
                </v-btn>
              <!--  <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>mdi-share-variant</v-icon>
                </v-btn>  -->
        </v-card-actions>

    </v-card>
  </v-hover>
</template>

<script>

export default {

}

</script>
