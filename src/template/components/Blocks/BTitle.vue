<template functional>
<v-card v-if="!props.$vl" :class="props.$vc||'elevation-0 transparent'">
        <v-card-text  v-if="props._m">
          <v-avatar  :tile="props.$_mt" :size="props.$_ms||100"  >
            <img  :src="props._m" :alt="props._t">
          </v-avatar>
        </v-card-text>
        <v-card-text v-if="props._t">
          <component :is="'h'+(props.$ht||3)"  :class="props.$_t||'display-3'">{{props._t}}</component>
        </v-card-text>
        <v-card-text v-if="props._s" :class="props.$_s||'title grey--text'" >
          {{props._s}}
        </v-card-text>
        <v-card-text  :class="props.$_d||'headline'" >
          {{props._d}}
        </v-card-text>
        <v-card-text v-if="props._al"  :class="props.$_al" >
              <AppAction :to="props._al" :_at="props._at" v-bind="props.$aa"></AppAction>
        </v-card-text>
</v-card>

<b-horizontal v-else  v-bind="props">
</b-horizontal>

</template>


<script>

export default {

}
</script>
