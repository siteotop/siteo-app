<template>
<v-container fluid class="pa-0">

    <v-container class="mx-cntt-wd">
      <SiteoBreadcramps
        :lastTitle="selfObject.title"
      >
      </SiteoBreadcramps>
    </v-container>

    <v-container class="mx-cntt-wd"
       v-if="selfObject.jsonStructure.n"
    >
      <v-row>
       <v-col cols="12" class="text-center mb-2">
         <h1 class="text-h4 text-md-h2">{{selfObject.title}}</h1>
           {{selfObject.description}}
         </v-col>
           <v-col cols="12" v-if="selfObject.picture" style="min-height:200px;">

             <picture >
               <source :srcset="selfObject.picture" media="(min-width: 768px)">
               <source :srcset="selfObject.thumb420">
               <img :srcset="selfObject.thumb420" :alt="selfObject.jsonStructure.n" style="width:100%; height:auto">

             </picture>
           </v-col>
        </v-row>
    </v-container>


    <v-container
      class="mx-cntt-wd mb-1"
      :width="width"
      :key="i"
      v-for="(item, i) in
         selfObject.jsonStructure.list"
      >
        <v-row>
          <v-col >
          <component :is="'Post'+item.t" v-bind="item" :i="i">
          </component>
        </v-col>
        </v-row>
      </v-container>

      <v-container class="mx-cntt-wd text-center mb-12">
        <v-lazy height="80">
          <v-btn
            color="primary accent-4"
            @click="playShare=true"
          >
           <v-icon left>
              $vuetify.icons.share
           </v-icon>
           Поширити
          </v-btn>
        </v-lazy>
        <ShareWindow
          v-if="playShare"
          @close="playShare=false"
         >
        </ShareWindow>
      </v-container>
      <script v-html="jsonLtd" type="application/ld+json">
      </script>
</v-container>
</template>


<script>
import PHtml  from  '../../../Structure/PHtml.vue';
import mixinFunctional from './mixin.js';
const title = {
   functional: true,
   render(h, context) {

     let cls ={
        h1:'text-h4 text-md-h2',
        h2:'text-h5 text-md-h3' ,
        h3:'text-h6 text-md-h4'
      }
     return h(context.props.t, {attrs: {id:'h-'+context.props.i}, class:context.props.cl||cls[context.props.t]}, context.props.d);
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
             classText: 'text-body-3',
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
            class:'pa-4 mb-4',
            props: {shaped: true, elevation: 1, color:'grey lighten-4'}},  [h('ol', menu.map(function(item) {
           return h('li', {class:"text-body-1 font-weight-medium mb-3"},
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
  props: ['selfObject'],
  data() {
      return {
        menu: [],
        width: 920,
        playShare: false,
      }
  },
  computed: {
    jsonLtd() {

        return {
          "@context": "https://schema.org",
          "@type": "NewsArticle",
          "headline": this.selfObject.title,
          "image": [
            this.selfObject.picture,
            this.selfObject.thumb420
           ],
          "datePublished": this.selfObject.datePublished,
          "dateModified": this.selfObject.dateModified
      }
    }
  },

  methods: {
    generateMenu() {
        if (this.menu.length>0) {
          return this.menu;
        }
        var menu = [];
        this.selfObject.jsonStructure.list.map(function(item, index){
           if (item&&
           (item.t=='h2'
           ||item.t=='h3')) {
             var h = {
                hash: 'h-'+index,
                title: item.d
             }
            menu.push(h);

           }
        })
        this.menu = menu;
        return menu;

    }
  },

}
</script>
