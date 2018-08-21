<script>
// https://github.com/text-mask/text-mask

//https://github.com/text-mask/text-mask/blob/master/componentDocumentation.md#readme
//import VueTextMask, {conformToMask}  from  'vue-text-mask';

import AbstractInput from './mixins/input.js';
import  AppInputText  from './AppInputText.vue';

import '../../icons/js/eye'; //
import '../../icons/js/eye-off'; //

var _forIn = require('lodash/forIn');

export default {

  mixins: [AbstractInput],

  components: {
    AppInputText
  },

  data() {
      return {
          show: false,
          progress: true,

      }
  },

  created() {
      this.el.append_icon_cb = ()=> this.show = !this.show;

  },

  watch: {
    show(newValue) {

      if (newValue) {
         this.el.appendIcon =  'eye';
         this.el.dynamic_type = 'text';

      } else {
         this.el.appendIcon =  'eye-off';
         this.el.dynamic_type = 'password';
      }

    },

    isProgress(newValue, oldValue) {
      //  console.log();
      //  console.log(newValue);
        if (newValue) {
          this.el.loading = true;
          this.el.progress = { value: this.progressValue, color: this.progressColor }
        } else {
          this.el.loading = false;
          this.el.progress = false;
        }
    }




  },

  computed: {

    isProgress() {
      //  console.log(this.el.strong);
       return (this.el.strong && this.el.value);
    },



    progressStatus() {

        //  i =  4  and  length =8   == 80
        const value = this.el.value;
        //var length = value.length;
        var i = 0;
        //var min = this.el.validate.min +2;
        _forIn(this.el.strong, function (pattern, key) {

            if (key == "spec") {
              pattern  = pattern.replace(/\\/g, "");
            //  console.log(  nevalue.split('')) ;
            }
           let regex_type =  new RegExp(  pattern, 'u');
           let result =  regex_type.test(value);
           if (result) {
             console.log(key);
             i++;
           }

        });

        return  i;

    },

    progressValue() {
         let i = this.progressStatus ;
         let length = this.el.value.length;
         let min = this.el.validate.min;
         let sum = length;
         if (length> min ) {
            sum = min + (length-min) *0.1;
         }


         //.console.log(sum);
         let  result = Math.round( i* sum * 100/(4.5 * min));
         console.log(result)
         return result;
    },

    progressColor() {
        var color = '';
        var min = this.el.validate.min;
        var l = this.el.value.length;
        switch (this.progressStatus) {
            case 0:
            case 1: color = 'red'; break;
            case 2: color = 'orange'; break;
            case 3: color = 'lime'; break;
            case 4:
                color = 'green';
                if (l<min) {
                  color = 'lime';
                }
             break;

        }

        if ( l < min/2) {
           color = 'red';
        }

        return color;

    }

  },


  render(h) {
     var el = this.el;
     console.log(el);
     return h('AppInputText', {
        props: {
          el: el,
          value: el.value
        }
     })

     //return <input-text el={el} value={el.value}> </input-text>;

  }

}

</script>
