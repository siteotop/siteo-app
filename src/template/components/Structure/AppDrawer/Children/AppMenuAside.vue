

<script>
export default {

  props: {

   mainMenu: {
      type: [Array, Boolean],
      default: function () {
        return []
      }

    },

  // if menu start we check submenu and open it
  startSubMenu: {
      type: Boolean,
      default: true,
  },

  finishDivider: {
      type: Boolean,
      default: true
  }

  },

  data() {
    return {
        idSubMenu: '',
      }
  },

  created() {

        this.checkStartSubMenu();


  },

  watch: {


      '$route' : function () {
            this.checkStartSubMenu();
      },


      /**
          when mainMenu change we start again
      */
      mainMenu() {
          this.clearSubMenu();
          this.checkStartSubMenu();
      }


  },




  computed: {

    subMenu: function () {
      if (!this.idSubMenu) {
        return [];
      }
      var menuId = 'menu_' + this.idSubMenu;
      menuId= menuId.toUpperCase();
      console.log(  menuId);
      if (this.$store.getters[menuId]) {
          return   this.$store.getters[menuId];
      } else {

        // generate menu using only admin app 
        //  return  this.$store.getters.generateMenu(this.idSubMenu);
      }

    },

    showSub() {
        return this.subMenu.length;
    },


    subMenuMenuTitle(){
       if (this.idSubMenu) {
       //const key =   this.$route.matched[0].name;
       return  this.$store.getters.DICTIONARY_KEY(this.idSubMenu, 'routes');

     } else {
       return  '';
     }
    },

  },

  methods: {


      /**

      */
      checkStartSubMenu() {
        //  console.log(this.$route);
        //  console.log(this.$route.matched.length);
        if (this.startSubMenu) {
          if (this.$route.matched.length>1) {
             var subId = this.$route.matched[0].name;
             if (this.isChildrenInMainMenu(subId)) {
               this.idSubMenu = subId ;
             }

          } else {
               this.idSubMenu = '';
          }
        }
      },

      isChildrenInMainMenu(id) {
        for (let i in this.mainMenu) {
          if(this.mainMenu[i].path.name == id&&this.mainMenu[i].children) {
              return true;
          }
        }
        return false;
      },

      openSubMenu(element) {
        //  console.log($event);
          if (element.children) {
          //  $event.stopPropagation();
            this.idSubMenu =  element.path.name;
             /// this.setSubMenu(element.id)

          }  else {

             //this.clearSubMenu();
             this.$router.push({path: element.path })
          }

      },


      clearSubMenu() {
        //this.idSubMenu = '';
        this.idSubMenu = false;

       //  this.showSub = false;
     },

     renderMenu(h, menuList, show, subHeader) {

        var self = this;
        return h('v-card', {
            props: {flat:true},
            directives: [
              {
                name: 'show',
                value: show,
              }
            ]
            }, [
            (subHeader? h('v-subheader', [subHeader]): ''),
            (subHeader?  h('v-list-tile', {
                on: {
                  click: function (event) {
                      event.stopPropagation();
                      self.clearSubMenu();
                  }
                }
            }, [
                h('v-list-tile-action', [h('AppIcon', {props:{name:'prev'}})]),
                h('v-list-tile-content', [h('v-list-tile-title', ['назад'])])
            ] ): ''),
            h('v-list', [
                /**
                  header for menu
                */

                ... menuList.map(function (li ) {
                    var to, clickEvent;
                    if (li.path == 'divider') {
                      return h('v-divider');
                    }
                    if (!li.children) {
                        to = li.path;
                        clickEvent = function () {};
                    } else {
                      clickEvent = function ($event) {
                          $event.stopPropagation();
                          self.openSubMenu(li);
                      }
                    }

                    return   h('v-list-tile', {
                        props: {
                            to:to
                        },
                        on: {
                          click: clickEvent
                        }
                    }, [
                        h('v-list-tile-action', [h('AppIcon', {props: {name:li.i, defColor:true}})]),
                        h('v-list-tile-content', [h('v-list-tile-title', [li.title])]),
                        (li.children? h('v-list-tile-action', [h('AppIcon', {props: {name:"next"}})]):''),
                    ]);

                })


            ])
        ]);

     }
  },


  render (h) {

      return  h('div', [
           this.renderMenu(h, this.mainMenu, !this.showSub, '' ),
           this.renderMenu(h, this.subMenu, this.showSub, this.subMenuMenuTitle),
           this.finishDivider? h('v-divider'):''
         ]
      )
  }


}
</script>
