<template >
<SectionWrap v-if="typeAction">
  <v-flex xs12 text-xs-center>
  <AppActionList  :active="typeAction"></AppActionList>

  </v-flex>
  <v-flex md6>
  <component :is="'app-action-'+typeAction" :vList="true"   ></component>
  </v-flex>
</SectionWrap>
<SectionWrap v-else>
  <OrderActionButtons  :block="true"></OrderActionButtons>
</SectionWrap>
</template>

<script>
import {createOrders} from '../../../core/store/models';
import MixinsLoaderStoreModule from '../_mixins/loader-store-module';



export default {
  name: 'PageOrder',
  mixins: [MixinsLoaderStoreModule],

  $_LoadModule_plain: createOrders('WEBSITE_API_URL', false),
  props: {
    typeAction: {
      type: String,
      defualt: 'order'
    }


  },

  computed: {
    formAction() {
      return this.$_LoadModule_getStoreLink('createObject');
    }
  }

}

</script>
