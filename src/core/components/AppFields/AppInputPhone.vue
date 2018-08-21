<script>

import AbstractInput from 'core/components/AppFields/mixins/input.js';
import AppInputText  from 'core/components/AppFields/AppInputText.vue';
//import InputSelect  from 'core/components/AppFields/AppSelect.vue';


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
