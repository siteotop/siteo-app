<template functional>
  <v-list v-if="props.$vl" two-line>

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
              <RBt :fab="true"
                :href="LINK.href"
                :_at="LINK.title"
                v-bind="Object.assign({fab:true, large:false} , props.$clp)"
                >
              </RBt>

            </v-list-tile-action>
          </v-list-tile>
  </v-list>
  <div v-else>
    <v-tooltip top lazy
 v-for="(LINK, index) in  props.items" :key="index">
    <slot v-bind:item="LINK">
      <RBt slot="activator"
        v-bind="Object.assign({_at:LINK.title,  href:LINK.href, color:LINK.color, dark: true, siicon:'si-'+LINK.icon  }, props.$clp)"
        ></RBt>
        <span>{{LINK.title}}</span>
      </slot>
    </v-tooltip>
  </div>
</template>

<script>
//import ListProps from '../Helper/list-props.js';
export default {
  //extends:ListProps

}

</script>
