

export default {

  props: {
      iconBar: {
          type: String,
          default: ''
      },

      blockWidth: {
        type: Number,
        default: 450
      }
  },



  data() {
        return {
           statusMenu: false,
           closeOnClick: true,
        }
    },

  watch: {

    '$route': function () {
      //  console.log('We nned hide menu');
        if (this.statusMenu) {
          this.statusMenu = false;
        }

    }

  },

  computed: {

      widthMenu() {
        return this.$vuetify.breakpoint.width>=450? this.blockWidth: this.$vuetify.breakpoint.width-20;
      },




  },

  render(h) {

      return h('v-menu', {
          props: {
            bottom: true,
            left: true,
            //auto: true,
            'min-width': this.widthMenu,
            //'full-width': (!this.widthMenu? true: false),
            'close-on-click': this.closeOnClick,
            'close-on-content-click': false,
            'max-width': this.widthMenu,
             value: this.statusMenu
          },
          on: {
            input: (event)=>this.statusMenu=event
          }
      },
      [
        h('v-btn', {
            props: {
              icon: true,
            },
            slot: 'activator'
        },
        [
          (this.countItems?  h('v-badge', {props: {right: true}},
              [
                h('span', {slot:'badge'}, [this.countItems]),
                h('AppIcon', {props: {name: this.iconBar}})
              ]
            ):
            h('AppIcon', {props: {name: this.iconBar}})
          )
        ]
        ),
        ( this.statusMenu? this.renderMenuContent(h): '')


      ]
    );

  }


}
