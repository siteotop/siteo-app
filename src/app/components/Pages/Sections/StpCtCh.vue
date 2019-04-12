<template functional>
<v-container v-if="props.$children" :class="props.cc">
      <v-layout :class="props.lc">
        <StChildrenHelper :children="props.$children" wrapper="v-flex" :wrapperclass="props.fc" ></StChildrenHelper>
      </v-layout>
    </v-container>
</template>
<script>
export default {
// Children component
}
</script>
