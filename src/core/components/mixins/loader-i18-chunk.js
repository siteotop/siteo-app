

import content from './ContentI18N.js';


export default {
  mixins: [content],

  props: {
      chunk: {
          type: [String, Boolean],
          default: true
      },

      propsContentI18n: {
         type: [Object, Boolean],
         default: false
      },

      needUpdateMeta: {
          type:Boolean,
          default: true,
      },

      needToolbar: {
        type: Boolean,
        default: true
      }


  },

  data () {
    return {

        isCallSetter: false

      }
  },

  computed: {
    iconTitle() {
        if (this.$store.state.Routes[this.$options.name]) {
          return   this.$store.state.Routes[this.$options.name].i;
        } else {
          return false;
        }

    }

  },



  metaInfo () {

    if (!this.needUpdateMeta) {
      return {};
    }

    return {
      title:  this.contentI18N.title,
      titleTemplate: '%s  - ' + this.$store.state.appInstance.data.name,
      meta: [
        {name: 'description', vmid: 'description', content:  this.contentI18N.description}
      ]

    }
  },


  created() {

    if (!this.isCallSetter&&this.chunk) {
        if (this.chunk === true) {
          if (this.$options.name) {
             this.getAsyncChunkByName(this.$options.name);
          }

        } else {
          this.getAsyncChunkByName(this.chunk);

        }
    }



  },

  beforeMount() {
    if (this.propsContentI18n) {
       this.$_ContentI18N_set( this.propsContentI18n);
    }
  },

  watch: {
      'propsContentI18n': function (newContent) {
            if (newContent) {
                this.$_ContentI18N_set( newContent);
            }



      }

  },


  methods: {

    getAsyncChunkByName(componentName) {
      this.isCallSetter = true;
      console.log(componentName);
      this.$store.dispatch('getContentForComponent', componentName).then(result=>{
           if (result) {
             this.$_ContentI18N_set(result);
           }
      }).catch(function(error){
          console.log(error);//  next();
      });

    },





  }





}
