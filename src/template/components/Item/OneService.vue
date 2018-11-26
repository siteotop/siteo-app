<template>
<div>
 <SectionWrap
  $co='v-img'
  $ht="1"
  $he="300"
  $_t="display-3 white--text"
  $_d="display-1 white--text pa-1 font-weight-medium"
  :_t="$store.state.APP_SERVICES.objectActive.title"
  :_d="$store.state.APP_SERVICES.objectActive.price + ' $'"
  :_p="$store.state.APP_SERVICES.objectActive.picture"
  >
 </SectionWrap>
 <SectionWrap
 $tc="my-0 py-0"
 $bc="my-0 pa-0"
 :$bls="[{$$:'AutoOrderTabs', $bf:'md6 elevation-4 white top-m-3' }]"
 >

 </SectionWrap>
</div>
</template>

<script>
import ExtendOneItem from './_extends/OneItem';

export default {

  extends: ExtendOneItem,
  storeName: 'APP_SERVICES',

}

</script>
