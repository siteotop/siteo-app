<template functional>
<b-title v-bind="{_ti: props.name, _de:props.about, _st:props.position, _me:props.picture, _vc: 'elevation-1 text-xs-center',  _ms: 150, _mt:true, _tc: 'headline', _dc:'body-2 font-weight-light' }" ></b-title>
</template>


<script>

  export default {

      props: {
         name: { // author
           type: String,
           default: '',
         },

         position: { // position
           type: String,
           default: '',
         },
         picture: { // avatar
           type: String,
           default: '',
         },

         about: { // quote
           type: String,
           default: '',
         }
      }
  }
</script>
