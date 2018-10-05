<template >
<SectionWrap >
    <v-container >
      <v-layout  justify-center class="mb-2">
         <div text-xs-center>
           <AppActionsList :active="typeAction"></AppActionsList>
         </div >
     </v-layout>
     <v-layout  justify-center>
        <v-flex xs12 sm8 md6 >
          <component v-if="" :formAction = "formAction" :is="'app-form-'+typeAction"></component>
        </v-flex md9 >
   </v-layout>
   </v-container>
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
