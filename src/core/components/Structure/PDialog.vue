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
     var self = this;

     var scopedSlots = {};
     var children = [];

     this.chldrn.map(function(element) {
       if (element._n == 'PBt') {
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
            eager: cnf.z,
            maxWidth:cnf.m,
            origin: cnf.o,
            persistent: cnf.p,
            scrollable: cnf.s,
            transition: cnf.r,
            width: cnf.w,
            noClickAnimation: cnf.a,
            openOnHover: cnf.b,
            openDelay: cnf.j

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
