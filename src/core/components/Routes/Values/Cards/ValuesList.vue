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
      <v-btn v-if="props.videoId"  fab small @click="(event)=>{props.clickOnVideo({videoId: props.videoId, title: props.title})}">
        <v-icon>$vuetify.icons.video</v-icon>
      </v-btn>
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
