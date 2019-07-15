<template functional>
  <v-hover>
    <v-card
       slot-scope="{ hover }"
       :class="`elevation-${hover ? 12 : 2}`"
    >
          <v-img
            aspect-ratio="1.61"
            class="primary darken-2 white--text"
            gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
            :src="props.picture"
            :alt="props.title"
          >
            <v-container fill-height fluid>
              <v-layout fill-height align-center text-xs-center>
                <v-flex xs12 >
                  <span v-if="!hover" class="headline">{{props.title}}</span>
                  <div v-else class="align-center ">
                        <BPrice class="headline font-weight-bold " :discount="props.discount" :price="props.price"></BPrice>
                      <div>
                        <PBt  :to="props._to"></PBt>

                      </div>
                  </div>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>

          <v-card-title>

              <BPrice class="headline font-weight-medium" :discount="props.discount" :price="props.price"></BPrice>
            <v-spacer></v-spacer>
            <PBt :to="props._to" :fab="true" :large="false"></PBt>

          </v-card-title>
          <v-card-text>
            {{props.preview}}
          </v-card-text>
        </v-card>
  </v-hover>
</template>

<script>

export default {

}

</script>
