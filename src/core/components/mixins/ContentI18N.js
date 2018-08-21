
import  _get from 'lodash/get';
export default {

  data () {
    return {
        contentLoaded: false,

        contentI18N: {
            title: '',
            description: '',
            content: {},
            errors: {},
            success: {}
        }


      }
  },


  methods: {

    $_ContentI18N_get(element, params, dictionary_id){

        if (!params) {
          return this.contentI18N[element];
        }
        var text;
        text =  _get(this.contentI18N[element], params);
        if (text) {
          return text;
        } else {
          if (dictionary_id!==false) {
          return   this.$store.getters.DICTIONARY_KEY(dictionary_id)
          }
        }
    },


    $_ContentI18N_set(meta){

        console.log(meta);
        for (let tag in meta) {
          //  if (this.contentI18N[tag]) {
                this.contentI18N[tag] = meta[tag];
          //  }
        }

       if (this.setContentToPageStructure) {
          this.setContentToPageStructure(meta.content);
        }

        this.contentLoaded = true;

    }

  }



}
