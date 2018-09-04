<template >
<v-container fluid  dark tag="section" class="primary text--secondary ">
  <h1 class="mb-2 display-1 text-xs-center">Form Order sd fsdfaf asdfasdfasd</h1>
  <v-layout justify-center>


      <v-flex v-bind="{
          'd-flex':true,
          xs12:true,
          sm7: true,
          md5: true,
          lg4:true,
          xl3:true
        }">

          <v-card  >
             <AppForm i18nkey="formOrder" :propsStructure="formStructure" ></AppForm>
          </v-card>
      </v-flex>
  </v-layout>
</v-container>
</template>

<script>

import {CreateCheckbox, CreateName, CreatePassword, CreateEmail} from 'core/components/AppFields/helper/create-fields.js';
export default {
  name: 'PageOrder',

  data() {

      return {
        formStructure: {
          userEmail: CreateEmail({autocomplete:true}),
          password: CreatePassword(),
          statesystem: CreateCheckbox({trueValue:1, falseValue:'', value: 1, required: false}),

        },

      }

  },

}

</script>
