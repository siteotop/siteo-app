<template functional>
  <v-layout
        slot="header"
        row

          >
            <v-flex xs2>
              <AppIcon name="drag"> </AppIcon>
            </v-flex>

            <v-flex xs8>
              {{props.name}}
            </v-flex>

            

          </v-layout>
</template>

<script>

export default  {
      props: ['name', 'designStructure'],

    /*render (h, context) {

     return h('div', { slot: 'header'},  [  h('v-btn', {
        props:{fab:true, small: true, flat:true},
        on:{click:function(event){
          event.stopPropagation();
          context.props.designStructure.splice(indexComponent, 1);


      }}})] )
    }*/
}

</script>
