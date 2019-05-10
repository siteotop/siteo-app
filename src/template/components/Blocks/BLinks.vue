<template functional>
  <v-list v-if="props.$vl" two-line>

          <v-list-item v-for="(LINK, index) in props.items"  @click="" :key="index" >
            <v-list-item-action>
              <v-avatar
                :color="LINK.color"
                class="white--text"
              >
                <AppIcon :name="'si-' +LINK.icon"></AppIcon>
              </v-avatar>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>{{LINK.title}}</v-list-item-title>
              <v-list-item-subtitle>{{LINK.subtitle}}</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action >
              <RBt :fab="true"
                :href="LINK.href"
                :_at="LINK.title"
                v-bind="Object.assign({fab:true, large:false} , props.$clp)"
                >
              </RBt>

            </v-list-item-action>
          </v-list-item>
  </v-list>
  <div v-else>
    <v-tooltip top eager
 v-for="(LINK, index) in  props.items" :key="index">
    <slot v-bind:item="LINK">
      <template v-slot:activator="{ on }">
        <RBt v-on="on"
          v-bind="Object.assign({_at:LINK.title,  href:LINK.href, color:LINK.color, dark: true, siicon:'si-'+LINK.icon  }, props.$clp)"
          ></RBt>
      </template>

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
