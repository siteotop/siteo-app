

//https://lodash.com/docs/4.17.5#hasIn
var _hasIn =  require('lodash/hasIn');
import {createModelCRUD}  from '../../store/helpers/model-events.js'

export default {

  /*

    if $dispatch empty we can use $name   (name)
  */
  $dispatch: '',
  $_LoadModule_plain: '',

  /**
    when we leave component, we unregistered module from store
  */
  beforeRouteLeave(to, from, next) {
     var nameModule = this.$options.$dispatch.split('/');
     if (this.$options.$_LoadModule_plain && _hasIn(this.$store.state, nameModule )) {
         this.$store.unregisterModule( nameModule );
     }
     next();
  },


  /**
     register new module  in store, if we need
  */
  beforeCreate() {
    var nameModule;


    //  if $options.$dispatch not defined we use name of component - $options.name
    if (!this.$options.$dispatch) {
       //added prefix _Loaded_ to dynamic module
       this.$options.$dispatch = '_Loaded_' + this.$options.name;
       nameModule = this.$options.$dispatch;
    } else {
       nameModule = this.$options.$dispatch.split('/');
    }

    // if module no exist we register new module using $options.$_LoadModule_plain
    if (this.$options.$_LoadModule_plain && !_hasIn(this.$store.state, nameModule )) {
       this.$store.registerModule(nameModule, createModelCRUD( this.$options.$_LoadModule_plain));
    }


  },


  methods: {


     $_LoadModule_getStoreLink(eventString) {
       return  this.$options.$dispatch+'/' + eventString;
     }
  }




}
