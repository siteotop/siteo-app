<template functional>
<v-container :class="props.cc">
    <component
       v-if="props.$data.t"
       :is="(props.tt||'h2')"
       :class="(parent.$root.mobile? props.tc: props.tcm||props.tc) ">
       {{props.$data.t}}
    </component>
    <span v-if="props.$data.d" :class="(parent.$root.mobile? props.dc: props.dcm||props.dc) ">
      {{props.$data.d}}
    </span>
</v-container>
</template>

<script>
export default  {

}
</script>
