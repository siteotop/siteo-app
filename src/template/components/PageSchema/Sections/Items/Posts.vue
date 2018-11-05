<template>
  <SectionListWrap :items="items" :$bf="flexClass" $bl="row wrap fill-height">
    <template slot-scope="{item}">
       <b-post
        :_t="item.title"
        :_d="item.preview"
        :_m="item.picture"
        :_u="item.url"
        ></b-post>
    </template>
  </SectionListWrap>
</template>


<script>
import ListExtend from './_extends/AutoList';
import BPost from '../Blocks/Post.vue';

export default {
  extends: ListExtend,
  storeName: 'APP_POSTS',
  components: {BPost}
}
</script>
