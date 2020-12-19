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
            :src="props.thumb420"
            :alt="props.title"
          >
           <v-toolbar flat class="transparent ">
                  <v-avatar size="32" class="ma-1 white--text" :color="hover?'primary darken-2':'primary'">{{props.index}}</v-avatar>
                  <v-spacer></v-spacer>
                  <v-btn v-if="props.videoId"  fab small @click="(event)=>{
                    props.clickOnVideo(
                      {
                        //videoActiveObject for  PYv in values
                        v: props.videoId,
                        t: props.title,
                        totext: props.about.text,
                        to: props.about.bind.to
                        })}">
                    <v-icon>$vuetify.icons.video</v-icon>
                  </v-btn>


           </v-toolbar>



            <!--<v-container fill-height fluid>
              <v-row >
                <v-col  >

                </v-col>

                <v-col class="text-center" >
                  <span v-if="!hover" class="text-h5">{{props.title}}</span>
                  <div v-else class="align-center ">
                        <BPrice class="text-h5 font-weight-bold "
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
         <v-list-item-title class="text-h5">
           <router-link
            :to="props.about.bind.to">
            {{props.title}}
           </router-link>
          </v-list-item-title>
         <v-list-item-subtitle>{{props.subtitle}}</v-list-item-subtitle>
       </v-list-item-content>
      </v-list-item>
      {{props.comp}}
      <v-card-text >
        {{props.preview}}
      </v-card-text>
        <!--  <v-card-title>
            <BPrice class="text-h5 font-weight-medium" :discount="props.discount" :price="props.price"></BPrice>
            <v-spacer></v-spacer>
            <PBt :to="props._to" :fab="true" :large="false"></PBt>
          </v-card-title> -->
        <v-divider  ></v-divider>
          <v-card-actions >

            <v-spacer></v-spacer>
            <v-btn
                tag="a"
                v-bind="props.about.bind"

                text
                color="primary accent-4"
              >
             {{props.about.text}}
            </v-btn>

            <v-btn
              v-if="props.action"
              tag="a"
              text
              color="primary accent-4"
              v-bind="props.action.bind"

            >
             {{props.action.text}}
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
