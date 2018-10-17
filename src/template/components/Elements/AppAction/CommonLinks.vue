<template functional>
  <v-list v-if="props.vList" two-line>

          <v-list-tile v-for="(LINK, index) in props.collectLinks"  @click="" :key="index" >
            <v-list-tile-action>
              <v-avatar
                :color="LINK.color"
                class="white--text"
              >
                <AppIcon :name="'si-' +LINK.icon"></AppIcon>
              </v-avatar>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{LINK.title}}</v-list-tile-title>
              <v-list-tile-sub-title>{{LINK.subtitle}}</v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action >
               <component :is="props.AppActionCallChat"

                 :hrefService="LINK.href"
                 :icon="props.actionType"
                ></component>
            </v-list-tile-action>
          </v-list-tile>
  </v-list>
  <div v-else>
    <v-tooltip top
 v-for="(LINK, index) in  props.collectLinks" :key="index">
      <component slot="activator"
        :is="props.AppActionCallChat"

        :color="LINK.color"
        :icon="LINK.icon"
        :hrefService="LINK.href"
        ></component>
        <span>{{LINK.subtitle}}</span>
    </v-tooltip>
  </div>
</template>

<script>

import AppActionCallChat from './CallChat';


export default {


  props: {

     AppActionCallChat: {
      type: Object,
      default: function () {
        return AppActionCallChat;
      }
     },

     collectLinks: {
       type: [Boolean, Array],
       default: false
     },



     actionType: {
        type: String,
        default: 'call'
     },

     vList: {
       type: Boolean,
       default: false
     },
  }


}

</script>
