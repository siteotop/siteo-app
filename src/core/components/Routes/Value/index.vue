<template>
<section v-if="!statusError">
  <v-container  v-if="loaded">
     <v-row justify=center>
        <v-col cols="12" sm="5"  md="5" lg="4" xl="3">
          <v-skeleton-loader
            type="image"
          >
          </v-skeleton-loader>
        </v-col>
        <v-col cols="12" sm="7"  md="7" lg="6" xl="5">
          <v-skeleton-loader
            type="heading, list-item,  paragraph, button"
          >
          </v-skeleton-loader>
        </v-col>
     </v-row>
  </v-container>
  <v-container v-else>

      <v-row justify=center>
        <v-col cols="12" class="pa-0">
          <v-toolbar
            flat dense
          >
              <router-link :to="{name:'values'}">
                  back
              </router-link>
          </v-toolbar>
        </v-col>
          <v-col cols="12" sm="5"  md="5" lg="4" xl="3">

            <v-img
                :alt="pageObject.title"
                aspectRatio="1"
                width="800"
                :src="pageObject.thumb420">
            </v-img
          </img>
          </v-col>
          <v-col  cols="12" sm="7"  md="7" lg="6" xl="5" :class="mobile?'':'pl-12'">
            <v-container>
              <v-row>

                <v-col cols="12">
                  <h1 class="display-2 font-weight-bold ">{{pageObject.title}}</h1>
                  <span class="grey--text lighten-1">{{pageObject.subtitle}}</span>
                </v-col>
                <v-col cols="12" class="body-1 .font-weight-regular	">
                  <p>{{pageObject.preview}}</p>
                </v-col>
                <v-col cols="12"
                  v-if="buttonWhere!==false"
                >
                    <v-btn v-if="pageObject.count=='0'"
                      disabled
                      x-large
                    >
                      {{buttonWhere.text}}
                    </v-btn>
                    <v-btn
                      v-else
                       :title="buttonWhere.text+' '+ pageObject.title"

                       :to="buttonWhere.link"
                       x-large
                       color="primary"
                      >
                      {{buttonWhere.text}}
                    </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-col>
      </v-row>

  </v-container>

</section>
<ErrorPage v-else :status="statusError.status"></ErrorPage>

</template>

<script>
import MetaInfo from '../Pages/MetaInfo';
import ServerFetch from '../_mixins/serverFetch';
import values from  '../../../store/modules/values';

import { mapState } from 'vuex';
export default {
    mixins: [MetaInfo, ServerFetch],
    nameModule: 'value',
    storeModule: values('appInstance/urlID'),
    components: {

    },

    props: {
      valueIdUrl: {
        type: String,
        default:''
      }
    },

    data() {
      return {
          mobile: true,
          moduleAction: 'getObject'
      }
    },

    mounted() {
        this.mobile = this.$vuetify.breakpoint.xs;
    },

      computed: {

        metaTitle() {
           if ( this.pageObject.title) {
             return this.pageObject.title
           }
           return  'Value Undefined';
         },

        metaDescr() {
          if (this.pageObject.title) {
            return this.pageObject.title;

        } else {
           return '';
        }

        },
        ...mapState({
          pageObject (state) {
              return state.value? state.value.objectActive: {};
          },
        }),

        buttonWhere() {
          let prefix_loc = this.$store.getters.getSiteoConfig('rlp');

          if (prefix_loc) {
            let prefix_loc_cat = this.$store.getters.getSiteoConfig('rlc');
            let action_text = this.$store.getters.getSiteoConfig('t_ac');
            return  {
                link: {name:'locations', params: {
                        category: prefix_loc_cat + this.pageObject.idUrl
                      }
                    },
                text: action_text
              };
            } else {
                return false;
              }
          }

      },

      methods: {
        getParamsForFetch() {

            if (this.valueIdUrl) {
              return  this.valueIdUrl;
            }
            else {
                this.loaded = false;
                throw "id_is_empty";
            }
        },
      }





}
</script>
