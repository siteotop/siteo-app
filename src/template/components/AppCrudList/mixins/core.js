
import CrudRenderCore from './render.js';
import LoadModule from '../../mixins/loader-store-module.js';
import Loader from '../../mixins/component-loading.js';
import ChunkLoader from '../../mixins/loader-i18-chunk.js';

export default {
    mixins: [CrudRenderCore, LoadModule,  Loader, ChunkLoader],


    $dispatch: '',
    $confirm: false,

    props: {

       propsItems: {
          type: [Array, Boolean],
          default: false
       }


    },


    data() {
        return {
            deletedItem: 0,

            headers: [],  // describe columns
            items: [],


            formsEditdata:{},


        }

    },



    created() {

        if (Array.isArray(this.propsItems)) {
           this.items = this.propsItems;

        } else {
            this.getCRUDList();
        }
    },

    watch:  {

        propsItems: function (items) {

          if  (Array.isArray(items)) {
              this.items = items;
          }

        }

    },

    methods: {

      setDeleteItem(elementId) {
          this.deletedItem = elementId;

      },

      /**
        clean param {deletedItem} which keep  ids for deleting
      */
      removeDeletedItem() {
        this.deletedItem = 0;
        //this.dialogOff();
      },


      getCRUDList() {

          this.startLoading();
          var self = this;
          this.$store.dispatch(this.$_LoadModule_getStoreLink('getList')).then(items=>{
              self.items = items; // self.prepareItems(admins);
              self.stopLoading();
          }).catch(error=>{
             self.$_LocalMessages_add( self.$t('commonList.no_load'), 'error');
             self.stopLoading();
          });

      },

      eventActionGet() {
          this.setDialog('get');
      },

      eventActionAdd() {

          this.setDialog('add');
      },

      eventActionPath(elementId) {
          console.log(elementId);
          var self = this;
          self.$store.dispatch(self.$_LoadModule_getStoreLink('patchObjectInList'), elementId).then(function () {

          }).catch(error=>{
            console.log(error);
              self.$_LocalMessages_add( 'We cannot load object number ' + elementId, 'error');
          })

      },

      eventActionEdit(elementId) {

           console.log('element-id for editing = ' + elementId);
           var self = this;
           self.startLoading();
           self.formsEditdata = {};
           this.$store.dispatch(this.$_LoadModule_getStoreLink('searchObjectInItems') , elementId).then(oneObject=>{
                 self.formsEditdata = oneObject;
                 self.setDialog('edit', elementId);
                 this.stopLoading();
             }).catch(error=>{
                  this.stopLoading();
                  self.$_LocalMessages_add( 'We cannot load object number ' + elementId, 'error');
             });
      },


      // Удаляет елемент или несколько елементов
      eventActionDelete(elementId, callBack) {
          var self  = this;

          return this.$store.dispatch(self.$_LoadModule_getStoreLink('deleteFromItems'), elementId).then(newElements=>{
               // self.items = [];
              self.stopLoading();
              //this.deletedItem = 0;
              callBack();
          }).catch(error=>{

             self.stopLoading();


          });

      }


    },



    computed: {

      countItems() {
         return this.items.length;
      },

      nameElementId() {
          return  this.$store.getters[this.$_LoadModule_getStoreLink('nameId')];
      }


    }
}
