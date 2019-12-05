<template functional>
  <v-hover>
    <v-card

       slot-scope="{ hover }"
       :class="`elevation-${hover ? 12 : 2}`"
    >
    <v-list-item three-line
>
      <v-list-item-avatar size="56" color="grey">
        <v-img v-if="props.picture"
          :src="props.picture"
        >
       </v-img>
       <span v-else>
            {{props.title[0]}}
        </span>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title ><h3 class="subtitle-2" >{{props.index}}. {{props.title}}</h3></v-list-item-title>
        <v-list-item-subtitle class="font-italic font-weight-bold">{{props.subtitle}}</v-list-item-subtitle>
        <v-list-item-subtitle>{{props.preview}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-card-actions >
      <DialogVideoYoutube v-if="props.videoId" :videoId="props.videoId" :title="props.title">
      </DialogVideoYoutube>
      <v-spacer></v-spacer>
          <v-btn
            tag="a"
            x-small
            disabled
            text
            color="deep-purple accent-4"
          >
            {{parent.$store.getters.getSiteoConfig('t_re')||'MORE'}}
          </v-btn>
          <v-btn
            x-small
            tag="a"
            disabled
            text
            color="primary accent-4"
          >
           {{parent.$store.getters.getSiteoConfig('t_ac')||'ACTION'}}
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
