<template >
<SectionWrap v-if="typeAction">
  <OrderActionButtons  :typeAction="typeAction"></OrderActionButtons>
  <OrderAction :vList="true"  :typeAction="typeAction"  ></OrderAction>
</SectionWrap>
<SectionWrap v-else>
  <OrderActionButtons  :block="true"></OrderActionButtons>
</SectionWrap>
</template>

<script>
import {createOrders} from '../../../core/store/models';
import MixinsLoaderStoreModule from '../_mixins/loader-store-module';

import OrderAction from '../PageSchema/Sections/OrderAction.vue';
import OrderActionButtons from '../PageSchema/Sections/OrderActionButtons.vue';

export default {
  name: 'PageOrder',
  mixins: [MixinsLoaderStoreModule],
  components: {
    OrderAction,
    OrderActionButtons
  },
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
