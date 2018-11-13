

export default {

  props: {

      groupChangeable: {
          type: Boolean,
          default: true
      }

  },

  data() {

      return {
          changeable: false,
          checked: []
      }

  },

  holderForMouseDown: false,
  idTimeout: false,

  watch: {
    checked: function (newValue) {
        if (newValue.length == 0) {
          this.deleteChangeable();
        } else {
             this.createChangeable();
        }
    }

  },

  computed:{
      isGroupDeleteConfirm() {
       return   Array.isArray(this.deletedItem)&&this.deletedItem.length
      }

  },

  methods: {

      createChangeable(){
        if (this.groupChangeable) {
         this.changeable = true;
        }
      },

      deleteChangeable() {
         this.changeable = false;
      },

      setChecked(id) {

         var  index =   this.checked.indexOf(id);
            if (index==-1) {
              this.checked.push(id);
            }

      },

      removeChecked(id) {
        var  index =   this.checked.indexOf(id);
           if (index!=-1) {
              this.checked.splice(index, 1);
           }

      },

      toggleChecked(id) {
        var  index =   this.checked.indexOf(id);
           if (index!=-1) {
              // if  present
              this.removeChecked(id);
           } else {
              // no exist
             this.setChecked(id);
           }

      },

      deactivateMouseDown () {
        if (!this.groupChangeable) {
          return false;
        }
        this.$options.holderForMouseDown = false;
        console.log(this.$options.idTimeout);
        clearTimeout(this.$options.idTimeout);
        this.$options.idTimeout = false;
      },

      clearChangeable() {
        this.checked = [];
      //  this.changeable = false;
        this.$options.idTimeout = false;

      },

      activateMouseDown (newId) {
        if (!this.groupChangeable) {
          return false;
        }
        var self = this;
        this.$options.holderForMouseDown = newId;
        this.$options.idTimeout = setTimeout(function () {
                    if (self.$options.holderForMouseDown == newId) {
                        self.setChecked(newId);
                   }
                  }, 1300);
         //console.log(hTime);
      },

      getGroupActionHelper(actions) {

          return actions;

      },

      getGroupActions(ids) {
          var actions = [];

          if (this.buttonDelete) {
             actions.push(this.getObjectActionDelete(ids, this.$t('commonList.del_check')) );
          }
          return this.getGroupActionHelper(actions);


      },


      /**
        Header for group manipulations
      */
      renderGroupHeader(h) {
          var self = this;
          var title = this.checked.length + ' '+
          this.$t('commonList.checked');
          return h('AppComponentToolbar', {
            props: {
              title: title,
              bindToolbar: {
                flat:true, dark: true, color: this.colorEdit
              },
              backAction: function (event) {self.clearChangeable()},
              mainActions: this.getGroupActions(self.checked)
            }
          }
        );




      },


      /**
        checked/unchecked one position
      */
      renderChangePosition(h, item) {
            var self = this, classes = {};

            if (this.checked.indexOf(item[self.nameElementId])!=-1)  {
              classes[this.colorEdit] = true;
              classes['lighten-5'] = true;
            }


            return h('v-list-tile', {
                class:classes
            },
           [
              h('v-list-tile-action',  [
                // <v-checkbox v-model="notifications"></v-checkbox>  h('AppIcon', {props: {name:'check'}})
                  h('v-checkbox', {
                    props: {value: item[self.nameElementId], 'input-value': self.checked },
                  on: {

                      /**
                       event is array with checked
                      */
                      change: function(event){

                          self.checked = event;  // set new arrays to checked
                          //console.log(event);
                      }
                    }
                  })

              ]),

              h('v-list-tile-content',
              {
                on: {
                  click : function (event) {
                     event.stopPropagation();
                     self.toggleChecked( item[self.nameElementId]);

                  }
                }
              },
              [
                  h('v-list-tile-title', [item.title]),
                  h('v-list-tile-sub-title', [item.subtitle]),

              ]),

              h('v-list-tile-action',    [
                    ''
              ]),

           ]
         );

      },

      renderGroupBody(h){
          var self = this;

          return [h('v-list', {
              props: {'three-line': true,  wrap: true}
          },

            this.filterItems.map(function(item, key){

               return  [
                  self.renderChangePosition(h, item),
                  h('v-divider')
               ]

          })


        )

        ];
      },

      renderGroupChangeComponent(h) {

          return h('v-card', [
              this.renderGroupHeader(h),
              this.renderGroupBody(h),
              (this.isGroupDeleteConfirm ? this.renderConfirmDelete(h, this.clearChangeable ): '')

          ])

      }



  }




}
