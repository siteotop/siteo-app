//https://lodash.com/docs/4.17.5#hasIn
var _hasIn =  require('lodash/hasIn');
import {createModelCRUD}  from '../../../core/store/helpers/model-events.js'


/**
   register new module  in store, if we need
   this.$_LoadModule_register();
*/
const ModuleRegister = function (VueInstance) {
  var nameModule;
  //  if $options.$dispatch not defined we use name of component - $options.name
  if (!VueInstance.$options.$dispatch) {
     //added prefix _Loaded_ to dynamic module
     VueInstance.$options.$dispatch = '_Loaded_' + VueInstance.$options.name;
     nameModule = VueInstance.$options.$dispatch;
  } else {
     nameModule = VueInstance.$options.$dispatch.split('/');
  }

  // if module no exist we register new module using $options.$_LoadModule_plain
  if (nameModule && VueInstance.$options.$_LoadModule_plain!=='' && !_hasIn(VueInstance.$store.state, nameModule )) {
    console.log(nameModule);
     VueInstance.$store.registerModule(nameModule, VueInstance.$options.$_LoadModule_plain);
  }
}


export default {

  /*

    if $dispatch empty we can use $name   (name)
  */
  $dispatch: '',
  $_LoadModule_plain: '',


  beforeRouteLeave(to, from, next) {
     this.$_LoadModule_unregister();
     next();
  },



  beforeCreate() {
      ModuleRegister(this);
  },

  methods: {




     /**
       when we leave component, we unregistered module from store
     */
     $_LoadModule_unregister(){
       var nameModule = this.$options.$dispatch.split('/');
       if (this.$options.$_LoadModule_plain && _hasIn(this.$store.state, nameModule )) {
           this.$store.unregisterModule( nameModule );
       }
     },

     /**

    @return {String} dispatch - string for $store.dispatch('dispatch');
     */
     $_LoadModule_getStoreLink(eventString) {
       return  this.$options.$dispatch+'/' + eventString;
     }
  }




}
