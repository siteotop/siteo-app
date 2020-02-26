<template>
 <div ><vue-editor v-model="valueData"
  :editorOptions="{scrollingContainer: 'auto'}"
  :editorToolbar="[
      [{ header: 2}, { header: 3}],
      ['link'],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      //['blockquote', 'code-block']
    ]"
  ></vue-editor>
</div>
</template>

<script>

import { VueEditor } from "vue2-editor";
import MixinVModelInput from '../../../forms/AppForm/Fields/_mixins/v-model-input';

export default {
  mixins:[MixinVModelInput],
  components: {
    VueEditor: VueEditor
  }



}

</script>
