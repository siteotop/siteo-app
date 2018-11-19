<template functional>
  <v-hover v-if="!props.$vl">
    <v-card
       slot-scope="{ hover }"
       :class="`elevation-${hover ? 12 : 2}`"
    >
          <v-img v-if="props._m"
            aspect-ratio="1.61"
            class="white--text"
            gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
            :src="props._m"
            :alt="props._t"
          >
            <v-container fill-height fluid>
              <v-layout fill-height align-center text-xs-center>
                <v-flex xs12 >
                  <span v-if="!hover" class="headline">{{props._t}}</span>
                  <div v-else class="align-center ">
                      <div class="display-1 ">
                        $ {{props._p}}
                      </div>
                      <div>
                        <AppAction ></AppAction>
                      </div>
                  </div>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>
          <v-card-title v-else class="headline">
             {{props._t}}
          </v-card-title>
          <v-card-title>
            <span class="headline font-weight-medium">$ {{props._p}} </span>
            <v-spacer></v-spacer>
            <AppAction :fab="true" :large="false"></AppAction>
          </v-card-title>
          <v-card-text>
            {{props._d}}
          </v-card-text>
        </v-card>
  </v-hover>
  <b-horizontal v-else  v-bind="props">
    <template slot="image" slot-scope="name">
            <v-img
               aspect-ratio="1"
              :src="props._m"
              :alt="props._t"
            ></v-img>
    </template>
    <template slot="action" slot-scope="name">
          <v-card-text class="headline font-weight-medium"> $ {{props._p}} </v-card-text>
          <v-card-actions>
            <AppAction  :fab="true" :large="false"></AppAction>
          </v-card-actions>
    </template>
  </b-horizontal>
</template>

<script>

export default {

}

</script>
