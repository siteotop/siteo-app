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
                  <!--<v-avatar size="32" class="ma-1 white--text" :color="hover?'primary darken-2':'primary'">{{props.index}}</v-avatar> -->
                  <v-spacer></v-spacer>
                  <v-btn v-if="props.clickOnVideo&&props.videoId"  fab small @click="(event)=>{
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
          </v-img>
      <v-card-title class="text-h5">
        <router-link
         v-if="props.about.bind.to"
         class="text-decoration-none"
         :to="props.about.bind.to">
         {{props.title}}
        </router-link>
        <a class="text-decoration-none" :href="props.about.bind.href" v-else>{{props.title}}</a>
      </v-card-title>
      <v-card-subtitle>
        {{props.subtitle}}
      </v-card-subtitle>
      <v-card-text >
        {{props.preview}}
      </v-card-text>
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
      </v-card-actions>

    </v-card>
  </v-hover>
</template>

<script>

export default {

}

</script>
