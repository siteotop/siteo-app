
import CrudCore from './mixins/core.js';
import GroupChangeable from './mixins/group.js';
import {HelperChooiceVariantMenu} from '../helper/MenuActions';
export default {

    mixins: [CrudCore, GroupChangeable],

    fieldsMap: {
        title: 'nameField',
        sutitle: 'nameField',

    },

    props: {

        //mainAction click om element and call first action
        mainAction: {
          type: Boolean,
          default: false
        }

    },


    methods: {


        /**
          render one list position (render one item ) v-list-tile
        */
        renderOnePosition(h, item) {
              var self = this;
              return h('v-list-tile', {
               class: item.class,
               on: {
                 mousedown: function () {
                   self.activateMouseDown( item[self.nameElementId])
                 },

                 mouseup: function () {
                   self.deactivateMouseDown()
                 },

                 touchstart: function () {
                    self.activateMouseDown(item[self.nameElementId])
                 },

                 touchend: function () {
                    self.deactivateMouseDown()
                 },
                 supertouchend: function () {
                    self.deactivateMouseDown()
                 },

                 click: function () {
                    if (self.mainAction) {
                        item.actions[0].event();
                    }

                 }
                 }
             },
             [
                h('v-list-tile-action',  [
                    h('AppIcon', {props: {name:item.icon}})
                ]),

                h('v-list-tile-content', [
                    h('v-list-tile-title', [item.title]),
                    h('v-list-tile-sub-title', [item.subtitle]),

                ]),

                h('v-list-tile-action', {on: {click:function ($event){ $event.stopPropagation()}}},   [
                      HelperChooiceVariantMenu(h,  item.actions)

                ]),

             ]
           );

        },


        /**
           render  item  confirmation before delete
        */
        renderItemRemoveConfirmation(h, item){

              var self = this;
              return h('v-list-tile', {
                  class: {
                    'red': true,
                    'lighten-1': true,
                    'text--lighten-5': true
                  },
                  props: {
                    color: 'red'
                  }
               },
               [
                  h('v-list-tile-action',  [
                      h('AppIcon', {props: {name:'delete'}})
                  ]),

                  h('v-list-tile-content', [
                      h('v-list-tile-title', [self.$store.getters.DICTIONARY_KEY('list_del_check_one')]),
                      h('v-list-tile-sub-title', [h('v-btn', {
                        on: {
                          click: function($event){
                              self.eventActionDelete(item[self.nameElementId]);
                          }
                        }
                      }, [self.$store.getters.DICTIONARY_KEY('list_delete')]),
                      h('v-btn',{
                        on: {
                          click: function($event){
                             self.removeDeletedItem();
                          }
                        }
                      },
                      [self.$store.getters.DICTIONARY_KEY('cancel')])]),

                  ]),



               ]
             );

        },

        renderCRUDBody(h){
            var self = this;

            if (this.isLoaderActive||!this.contentLoaded) {// <AppPulseLoader loading={this.isLoaderActive} ></AppPulseLoader>
               return h('AppPulseLoader', {props: {loading:true} });
            }

            if (!this.filterItems.length) {

              return h('v-card-text', [this.textNoData])
            }

            return [h('v-list', {
                props: {'three-line': true,  wrap: true}
            },

              this.filterItems.map(function(item, key){

                 return  [
                    (item.delete? self.renderItemRemoveConfirmation(h, item): self.renderOnePosition(h, item)),
                    h('v-divider')
                 ]




            })


          ),
         //  this.renderFooterActions(h)
        ];
        },



        helperItemFilter(newItem, oldItem) {
            return newItem;
        }





    },

    computed: {



      filterItems() {


          var self = this;
          return  this.items.map(function (item) {
            //   var newItem =this.helperFieldsMap(item) ;
               var newItem = {}, itemId; // this.items[i];
               itemId =   item[self.nameElementId];
               newItem[self.nameElementId] = itemId;

               for (var i in self.headers) {
                 newItem[self.headers[i].text] = item[self.headers[i].value];
               }


               if (self.deletedItem == itemId) {
                  newItem.delete = true;
               }

               newItem.class = {};
               if (item.patched == 0) {
                 newItem.class = {
                     'green':true,
                     'lighten-5': true
                 };
               }



               newItem.actions = self.createDefaultActions(itemId);

               return self.helperItemFilter(newItem, item);


          });
      },
    },

    render(h) {
       if (!this.changeable) {
           return this.renderCoreComponent(h);
       } else {

          return this.renderGroupChangeComponent(h);
       }

    }

}
