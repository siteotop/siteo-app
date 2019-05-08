<script>
//
export default {
  props: {
    chldrn: {
      default: function () {
        return [];
      }
    },

    cnf: {
      default: function () {
        return {};
      }
    }
  },

  data() {
    return {
      dialog:false
    }
  },


  render(h) {
     var cnf = this.cnf;


     var scopedSlots = {};
     var children = [];

     this.chldrn.map(function(element) {
       if (element._n == 'RBt') {
         scopedSlots['activator'] = function (ref) {
           return h('StChildrenHelper', {props: {element:element}, on:ref.on });
         }
       } else {
         children =[  h('StChildrenHelper', {props: {element:element}})];
       }
     })

     return   h('v-dialog', {
        props: {
            dark: cnf.d,
            light: cnf.l,
            fullWidth: cnf.f,
            fullscreen: cnf.e,
            hideOverlay: cnf.h,
            lazy: cnf.z,
            maxWidth:cnf.m,
            origin: cnf.o,
            persistent: cnf.p,
            scrollable: cnf.s,
            transition: cnf.r,
            width: cnf.w
          },
        model: {
            value: self.dialog,
            callback: function($$v) {
               self.dialog = $$v
            },
            expression: "dialog"
        },
        scopedSlots: scopedSlots

      }, children)
  }
}


</script>
