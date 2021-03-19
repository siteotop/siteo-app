<template>
<v-container fluid>
    <v-responsive
      class="mx-auto"
      :width="width">
      <SiteoBreadcramps
        :lastTitle="collection.title"
      >
      </SiteoBreadcramps>
      </v-responsive>
      <v-responsive
      class="mx-auto"
      :width="width"
       v-if="collection.jsonStructure.n">
        <v-img v-if="collection.picture" :src="collection.picture">
        </v-img>
        <v-row>
         <v-col cols="12" class=" mb-2">
           <h1 class="text-h4 text-md-h2">{{collection.title}}</h1>
             {{collection.description}}

         </v-col>

       </v-row>
      </v-responsive>
      <v-responsive
      class="mx-auto"
      :width="width"
        :key="i"
        v-for="(item, i) in
         collection.jsonStructure.list"
      >
      <v-row>
        <v-col >
        <component :is="'Post'+item.t" v-bind="item" :i="i">
        </component>
      </v-col>
      </v-row>
      </v-responsive >
      <script v-html="jsonLtd" type="application/ld+json">
      </script>
</v-container>
</template>


<script>
import { mapState } from 'vuex';
import PHtml  from  '../../../Structure/PHtml.vue';
import mixinFunctional from './mixin.js';
const title = {
   functional: true,
   render(h, context) {
     let cl = '';
     return h(context.props.t, {attrs: {id:'h-'+context.props.i}, class:context.props.cl||cl}, context.props.d);
   }
};
export default {
  mixins: [mixinFunctional],
  components: {
    PHtml,
    Posth1:title,
    Posth2:title,
    Posth3:title,
    Posthtml: {
       functional: true,
       render(h, context) {
         return h('PHtml', {
            props:{
             cntnt: {t: context.props.d},
             classText: 'text-h5 font-weight-regular',
             cnf: {
                 n: (context.props.i%2==0)?0:1
             },
             }
           });
       }
    },

    Postvid: {
       functional: true,
       render(h, context) {
         return h('PYv', {
            props:{
                cntnt: {
                    v: context.props.d,
                  },
                cnf: {}
              }
           });
       }
    },

    Postimg: {
       functional: true,
       render(h, context) {
         return h('v-img', {
            props:{
                maxHeight:700,
                src: context.props.d
              }
           });
       }
    },

    Postquote: {
        functional: true,
        render(h,context) {
          return h('blockquote', {
            class:'blockquote text-h5 font-weight-medium text--secondary',
            domProps:{innerHTML:context.props.d}
          } )
        }
    },
    Postmenu: {
      functional: true,
      render(h,context) {
         let menu = context.parent.generateMenu();
         return h('v-sheet', {
            class:'pa-4',
            props: {shaped: true, elevation: 1, color:'grey lighten-4'}},  [h('ol', menu.map(function(item) {
           return h('li', {class:"text-h6 font-weight-medium mb-3"},
             [h('a', {

               attrs: {href:'#'+item.hash },
                on: {
                  click:()=>context.parent.gotoContent(item.hash)
                }
             }, item.title)]
          )
        }))])
      }
    }

  },
  data() {
      return {
        menu: [],
        width: 920,
      }
  },
  computed: {
    jsonLtd() {

        return {
          "@context": "https://schema.org",
          "@type": "NewsArticle",
          "headline": this.collection.title,
          "image": [
            this.collection.picture,
            this.collection.thumb420
           ],
          "datePublished": this.collection.datePublished,
          "dateModified": this.collection.dateModified
    }
    },
    ...mapState({
      collection: state => state.pages.objectActive
    })
  },

  methods: {
    generateMenu() {
        if (this.menu.length>0) {
          return this.menu;
        }
        var menu = [];
        this.collection.jsonStructure.list.map(function(item, index){
           if (
           item.t=='h2'
           ||item.t=='h3') {
             var item = {
                hash: 'h-'+index,
                title: item.d
             }
            menu.push(item);

           }
        })
        this.menu = menu;
        return menu;

    }
  },

}
</script>
