<template functional>
<v-container v-if="props.$children" :class="props.cc">
      <v-layout :class="props.lc||'row wrap justify-center'">
        <StChildrenHelper :children="props.$children" wrapper="v-flex" ></StChildrenHelper>
      </v-layout>
    </v-container>
</template>
<script>
export default {
// Children component
}
</script>
