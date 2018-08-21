


import AppComponentToolbar from '../../AppComponentToolbar';
import MixinLocalMessages from '../../mixins/LocalMessages.js';
import AppConfirm from '../../AppConfirm.vue' ;
import AppForm from '../../AppForm';


export default {

  mixins: [ MixinLocalMessages],
  components: {AppConfirm, AppForm, AppComponentToolbar},
  props: {

      colorEdit: {
          type: String,
          default: 'blue'
      },

      colorAdd: {
          type: String,
          default: 'green'
      },

      colorDelete: {
        type: String,
        default: 'red'
      },

      actions: {
          type: Boolean,
          default: true
      },

      buttonAdd: {
        type: Boolean,
        default: true
      },

      buttonEdit: {
         type: Boolean,
          default: true,
      },

      buttonGet: {
         type: Boolean,
         default: false,
      },

      buttonDelete: {
         type: Boolean,
          default: true,
      },

      routeListId: {
        type: [Number, String],
        default: ''
      },
      routeListAction: {
        type: String,
        default: ''
      },

  },


  data() {
      return {

          dialog: false,
          typeAction: false, // add or edit

      }

  },

  created() {
      if (this.routeListAction) {
          if ( this.routeListId) {
            this.eventActionEdit( this.routeListId);
          } else {
            this.setDialog(this.routeListAction);
          }

      }

  },

  computed: {
    textActionEdit() {
      return this.$_ContentI18N_get('content',   ['_ac','edit'], 'list_edit');
    },
    textActionDelete() {
      return this.$_ContentI18N_get('content',   ['_ac','delete'], 'list_delete');

    },
    textActionAdd() {
       return this.$_ContentI18N_get('content',   ['_ac','add'], 'list_add');
       //return  this.textActionHelper('add');
    },
    textActionGet() {
       return this.$_ContentI18N_get('content',   ['_ac','get'], 'open');
       //return  this.textActionHelper('add');
    },

    textNoData() {
      return this.$_ContentI18N_get('content', 'nolist', 'no_data');
    },

    /**
       checking needed open dialog with form edit or add
    */
    isDialogOpenForm() {
        return  (this.dialog&& this.typeAction &&this.typeAction!='confirm' );
    },

    /**
      check needed opening confirm dialog for deleting
    */
    isDleteConfirm() {
      return  this.deletedItem;
        //return (this.dialog&&this.typeAction == 'confirm'&&this.deletedItem);
    },

    /**
      if true we render content, forms in dialogs
    */
    renderTypeDialog() {
       return this.dialog;// !this.$vuetify.breakpoint.xs;
    },

    showContentAction () {
      return !this.renderTypeDialog && this.routeListAction && this.typeAction;
    }


  },

  methods: {



      /**
        turn off dialog windows for form
      */
      dialogOff() {
       /*  if (this.renderTypeDialog) {
          this.dialog = false;
        } else {
             this.$router.push({name: this.$options.name, params: {}});
        }*/
        this.$router.push({name: this.$options.name, params: {}});
          this.typeAction = false;
      },

      setDialog(type, actionId) {
        this.typeAction = type;
         this.$router.push({name: this.$options.name, params: {routeListAction: type, routeListId:  actionId}});
        /*if (this.renderTypeDialog) {
          this.dialog = true;
        } else {
           this.$router.push({name: this.$options.name, params: {routeListAction: type, routeListId:  actionId}});
        }
          */
      },

      getObjectActionGet() {
          return this.createObjectAction('eye', this.textActionGet, this.eventActionGet);
      },

      getObjectActionAdd() {
          if (!this.buttonAdd) {
             return false;
          }

         return [this.createObjectAction('plus', this.textActionAdd, this.eventActionAdd,  this.colorAdd)];
      },

      getObjectActionEdit(elementId) {
         var self = this;
         return this.createObjectAction('edit', this.textActionEdit, function () {
           //console.log()
           self.eventActionEdit(elementId);
         },  this.colorEdit);
      },

      getObjectActionDelete(elementId, title) {
         if (!title) {
           title = this.textActionDelete;
         }
         var self = this;
         return this.createObjectAction('delete',  title, function () {
           self.setDeleteItem(elementId);
         }  , this.colorDelete);
      },



      createObjectAction(icon, title, event, color) {
        return {
          icon: icon,
          title: title,
          color: color,
          event: event
        }
      },

      createLinkAction(icon, title, route, afterClick, color) {
          var self = this;
          console.log(route);
          return this.createObjectAction(icon, title, function () {
              if (typeof(route) =='string' && route.indexOf('http') ===0) {
                 window.open(route, '_blank');
              } else {
                console.log(route);
                self.$router.push(route);
              }
              if (afterClick) {
                afterClick();
              }
          }, color);

      },

      createDefaultActions(elementId) {
        var  actions = [];

        if (this.buttonGet) {
            actions.push(this.getObjectActionGet(elementId));
        }
        // if buttonEdit turn on push to actions
        if (this.buttonEdit) {
            actions.push(this.getObjectActionEdit(elementId));
        }

        // if buttonDelete turn on push to actions
        if (this.buttonDelete) {
            actions.push(this.getObjectActionDelete(elementId));
        }

        return actions;
      },

      detectedActionForRender(h, typeForm){

        switch(typeForm) {
            case 'add' :
                  return this.renderFormAdd(h);
                 //content =
                 break;
            case 'edit' :
                  return this.renderFormEdit(h);


                break;
            case 'get':
                if (this.renderViewObject) {
               return  this.renderViewObject(h);
              } else {
                return  'no view template';
              }
                break;
         }
         //return content;
      },

      /**
        dialog windows for rendering form add and form updating
      */
      renderDialog(h, typeForm ){

          var  self = this ;



          return h('v-dialog', {
              props: {
                value: self.dialog,
                'max-width': '500px'
              },

              on: {
                input: function (value) {
                    if (!value) {
                      self.dialogOff();
                    } else {
                      self.dialog = value;
                    }

                  // self.$emit('input', event.target.value)
                }
              }
          },
          [
              this.detectedActionForRender(h, typeForm)
          ]
          )


        },


        renderFormAdd(h) {
            var formsAdd = {};
            formsAdd.propsContentI18n = this.generatei18forForms('_fa');;
            formsAdd.formAction = this.$_LoadModule_getStoreLink('createObjectInList');
            formsAdd.propsStructure = this.generateFormAddStructure();

            return   this.renderFormAction(h, formsAdd, 'plus');

        },

        generateFormAddStructure() {
          return {};
        },



        renderFormEdit(h) {

          var formsEdit = {};
          formsEdit.propsContentI18n = this.generatei18forForms('_fe');
          formsEdit.formAction = this.$_LoadModule_getStoreLink('updateObjectInList');
          formsEdit.propsStructure = this.generateFormEditStructure();
          formsEdit.defaultValues = this.formsEditdata;
          return this.renderFormAction(h, formsEdit, 'edit' );

        },



        generatei18forForms(type_form) {
          var i18n = this.$_ContentI18N_get('content',  type_form);

          i18n['content'] = this.$_ContentI18N_get('content', '_f');
          i18n['errors'] = this.$_ContentI18N_get('errors');  //Errors();
          return i18n;
        },


        /**
          universal function for create form  for adding and updating
        */
        renderFormAction(h, props, icon) {
          var toolbarAction,  self = this;
          props.needToolbar = false;
          props.chunk = false;
          if (this.renderTypeDialog) {
              toolbarAction = 'closeAction';
          } else {
            toolbarAction = 'backAction';
          }
          return h('v-card',
          [
               h('AppComponentToolbar', {props: { iconTitle: icon, title: props.propsContentI18n.title, [toolbarAction]: function (){
                  self.dialogOff();
              }  }}),
              h('AppForm', {
                props: props,
                on: {
                  successForm: function($event) {
                    self.dialogOff();
                  },


                }
              })
          ]);

        },


        createConfirmDelete(callBack) {
          var confirm = {};
          confirm.title = this.$_ContentI18N_get('content', ['_c', 'title'] , 'list_confirm_title');
          confirm.description =  this.$_ContentI18N_get('content',  ['_c', 'description'], 'list_confirm_desc');;


          var self = this;
          var id = this.deletedItem;

          confirm.func = function () {
             self.eventActionDelete( id, callBack);
          };

          confirm.dialog = true;
          confirm.persistent = true;
          return   confirm;
        },


        /**
          @return Confirmation element for delete action
        */
        renderConfirmDelete(h, callBack) {

             var self = this;
             this.$emit('openDialog');
             return h('AppConfirm',  {
                props: self.createConfirmDelete(callBack) ,
                on: {
                  'hideDialog': function () {
                      self.$emit('hideDialog');
                      self.removeDeletedItem();
                      //console.log($event);

                  }
                }
             });

        },


        renderCoreComponent(h) {
         var self = this;
         if (!this.contentLoaded) {
            return '';
         }

          return h('div', [

                  this.showContentAction? this.detectedActionForRender(h, this.routeListAction): '',

                  h('v-card', {
                    directives: [
                      {name: 'show', value: !this.showContentAction}
                    ]
                  },  [

                    h('AppComponentToolbar', {props: { iconTitle: this.iconTitle, title:  this.contentI18N.title, desc: this.contentI18N.description, mainActions: self.getObjectActionAdd() }}),


                   this.$_LocalMessages_render(h),

                   this.renderCRUDBody(h),
                   (this.renderSlotFooter? this.renderSlotFooter(h):''),
                   (this.isDialogOpenForm? this.renderDialog(h, this.typeAction): ''),
                   (this.$options.$confirm&&this.isDleteConfirm ? this.renderConfirmDelete(h, function () { self.removeDeletedItem()}): '')

                  ] )
            ]);

       }



  }








}
