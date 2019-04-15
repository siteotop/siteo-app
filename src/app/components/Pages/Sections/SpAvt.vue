<template functional>
<v-avatar
   :tile="props.t"
   :size="props.s"
   :color="props.c"
 >
   <img v-if="props.$data.p" :src="props.$data.p" :alt="props.$data.pt">
   <span v-else class="white--text headline">
     <AppIcon v-if="props.$data.i" :name="props.$data.i"></AppIcon>
     <span v-else>{{props.$data.t}}</span>
   </span>
</v-avatar>
</template>
<script>
export default {

}
</script>
