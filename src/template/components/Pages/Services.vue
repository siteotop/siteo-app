<template functional>
  <SectionWrapList  storeName="APP_SERVICES" >
      <template slot-scope="{ item }">
          <v-card  >
              <v-img v-if="item.picture"
                aspect-ratio="1.77"
                class="white--text"
                :src="item.picture"
              >
                <v-container fill-height fluid>
                  <v-layout fill-height>
                    <v-flex xs12 align-end flexbox>
                      <span class="headline">{{item.title}}</span>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-img>
              <v-card-title v-else class="headline">
                 {{item.title}}
              </v-card-title>
              <v-card-title v-if="item.subtitle">
                <span class="headline font-weight-medium">${{item.price}} </span>
                <v-spacer></v-spacer>
                <AppAction :large="false"></AppAction>
              </v-card-title>
              <v-card-text>
                {{item.preview}}
              </v-card-text>
            </v-card>
      </template>
  </SectionWrapList>

</template>

<script>

//import PageSchema from '../PageSchema';

export default {

}

</script>
