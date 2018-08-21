<script>

import AbstractInput from './mixins/input.js';
import AppInputText  from './AppInputText.vue';

export default {

  mixins: [AbstractInput],
  components: { AppInputText },
  functional:true,
  render(h, context) {

     if (!context.props.el.disabled) {
        context.props.el.suffix = context.parent.$store.getters['account/country'];
     }

     return <v-layout row wrap>
              <v-flex xs12>
                <AppInputText el={context.props.el} value={context.props.el.value}> </AppInputText>
              </v-flex>

            </v-layout>
  }


}

</script>
