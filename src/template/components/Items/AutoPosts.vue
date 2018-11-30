<template functional>
  <SectionListWrap  v-bind="props" :items="parent.$store.state.APP_POSTS.items.objects" :$bf="(props.toggleComponent == 'list'||props.toggleComponent == 'card')? '  xs12 ': 'd-flex xs12 sm6 md4'" $bl="row wrap fill-height">
    <template slot-scope="{item}">
       <b-post
        :_t="item.title"
        :_d="item.preview"
        :_m="item.picture"
        :_u="item.url"
        :$vl="props.$vl"
        ></b-post>
    </template>
  </SectionListWrap>
</template>


<script>
export default {

}
</script>
