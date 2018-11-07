<template functional>
  <v-list v-if="props.vList" two-line>

          <v-list-tile v-for="(LINK, index) in props.items"  @click="" :key="index" >
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
               <component :is="$options.CallChatButton"

                 :hrefService="LINK.href"
                 :icon="props.actionType"
                ></component>
            </v-list-tile-action>
          </v-list-tile>
  </v-list>
  <div v-else>
    <v-tooltip top lazy
 v-for="(LINK, index) in  props.items" :key="index">
      <component slot="activator"
        :is="$options.CallChatButton"

        :color="LINK.color"
        :icon="LINK.icon"
        :hrefService="LINK.href"
        ></component>
        <span>{{LINK.subtitle}}</span>
    </v-tooltip>
  </div>
</template>

<script>

const CallChatButton = {
  functional: true,
  props: {

      color: {
        type: String,
        default: 'grey'
      },

      hrefService:{
        type: String,
        default: ''
      },

      icon: {
        type: String,
        default: 'chat'
      }
  },

  render(h, context) {
    return h('AppAction', {
        props: {
          color: context.props.color,
          ripple: true,
          fab: true,
          flat: true,
          outline: true,
          large:  false,
          hideText:true,
          siicon:'si-'+ context.props.icon
        },
        attrs: {
          href: context.props.hrefService,
          target:"_blank"
        }

    });

  }
};


export default {

  CallChatButton: CallChatButton,

  props: {

     items: {
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
