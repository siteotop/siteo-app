<template functional>
  <v-layout
  slot="header"
  row
  >
    <v-flex :style="{cursor:'move'}" class="draggable" xs2>
      <AppIcon name="si-drag"> </AppIcon>
    </v-flex>
    <v-flex xs8>
      {{props.name}}
    </v-flex>
  </v-layout>
</template>

<script>

export default  {
      props: ['name'],
}

</script>
