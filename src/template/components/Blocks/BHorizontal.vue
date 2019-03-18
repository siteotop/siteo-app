<template functional>
<v-container class="white">
  <v-layout row wrap >

      <v-flex hidden-xs-only sm2 >
        <slot name="image">
          <v-avatar  v-if="props._m"  :tile="props.$_mt" :size="props.$_ms"  >
            <img  :src="props._m" :alt="props._t">
          </v-avatar>
        </slot>
      </v-flex>

      <v-flex xs12 sm7 md8>
        <v-card flat>
          <v-card-text class="mb-0 pb-0">
            <component :is="'h'+(props.$ht||3)"  :class="props.$_t||'title'">{{props._t}}</component>
            <span :class="props.$_s||' grey--text'">{{props._s}}</span>
          </v-card-text>
          <v-card-text  :class="(props.$_d||'body-1')+ (parent.$root.mobile?' text-truncate':'')" >
            {{props._d}}
          </v-card-text>
        </v-card>

      </v-flex>
      <v-flex xs12 sm3 md2>
        <v-card flat>
          <slot name="action" >
            <v-card-actions v-if="props._al"  :class="props.$_al">
              <StAction :to="props._al" :_at="props._at"  :fab="true" :large="false" v-bind="props.$aa" ></StAction>
            </v-card-actions>
          </slot>
        </v-card>
      </v-flex>
  </v-layout>
</v-container>
</template>

<script>

export default {

}
</script>
