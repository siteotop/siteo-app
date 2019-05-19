
import * as helperComponents from '../../validator/components';
import  _isEqual from 'lodash/isEqual';
import _cloneDeep from 'lodash/cloneDeep';
import  _findIndex from 'lodash/findIndex';
import HelperMenuEdit from './_helper/menu-edit.vue';
import HelperMenuAdd from './_helper/menu-add.vue';

import {
  mdiPlus,
  mdiViewStream,
  mdiDrag,
  mdiUnfoldMoreHorizontal,
  mdiUnfoldLessHorizontal,

} from '@mdi/js';

export default {

  components: {
    HelperMenuEdit,
    HelperMenuAdd
  },
  _icons: {
    add:  mdiPlus,
    block:mdiViewStream,
    drag: mdiDrag,
    more: mdiUnfoldMoreHorizontal,
    less: mdiUnfoldLessHorizontal,
  },
  props: {
    //it is name for  parent component, which need for  merge settings child component
    componentName: {
      type: String,
      default: ''
    },

    value: {
        type: [Array, Object],
        default : function() {
          return [];
        }
    },

    typeHelper: {
        type: String,
        default: 'helperChildren',
        validator: function (value) {
           return ['helperChildren', 'helperProps', 'helperClass', 'helperData'].indexOf(value)!==-1
        }
    },

    allowChildren: {
      type: [Array, Boolean],
      default: false
    },

    noDublicateChild: {
      type: Boolean,
      default: false
    },

    cloning: {
      type: Boolean,
      default:false
    },

    watchValue: {
      type: Boolean,
      default: false
    },
  },

  data() {
      return {
        //dialogChildren: false,

        menu: false,
        //array for DesignTabsBlock
        childrenList: [],
        menuList: []
      }
  },

  created() {
     this.connectChildrenList();

  },

  watch: {
    childrenList: {
        handler: function (newList) {
          this.$emit('input', helperComponents[this.typeHelper].zip(newList));
        },
        deep: true
    },

    value: function(newValue, oldValue) {
        if (this.watchValue) {
          if(!_isEqual(newValue, oldValue )) {
            this.connectChildrenList();
          }

        }
    }


  },

  methods: {
    // connect default options to every child element
    connectChildrenList() {
      var inputList = this.value;
      if (this.cloning) {
       inputList=_cloneDeep(inputList);
      }

      this.childrenList=helperComponents[this.typeHelper].unZip(inputList, this.componentName);
      this.createMenuList();
    },

    findIndexOfElement(name) {
       return _findIndex (this.childrenList, {_n:name});
    },
    createMenuList(childrenList) {
       this.menuList = this.childrenList.map(function(element) {
         return {
           activeContent: false,
           activeEdit: false,
           activeTabEdit: 0
         };
       });


    },

    addComponentToList(NameOfList) {
      var settings = helperComponents[this.typeHelper].createSettings(NameOfList, this.componentName);
      if (!settings) return;
      if (this.noDublicateChild) {
          var index = this.findIndexOfElement(NameOfList);
          if (index !== -1) {
            this.$store.dispatch('generateSystemMessage', NameOfList + ' added early');
            return;
          }
      }
      this.childrenList.push(settings);
      this.createMenuList();

    },

    cloneComponent(index) {
        var cloning = _cloneDeep(this.childrenList[index]);
        this.childrenList.push(cloning);
        this.createMenuList();
    },

    removeComponentFromList(index) {
      /*var index = this.findIndexOfElement(name);
      if (index !==-1) {
          this.childrenList.splice(index, 1);
          this.removeComponentFromList(name);
      }*/
      var list  = _cloneDeep(this.childrenList);
      list.splice(index, 1);
      this.childrenList = list;
      //this.removeComponentFromList(name);
      this.createMenuList();
    },


     childrenComponents() {
       if (Array.isArray(this.allowChildren)) {
         return this.allowChildren;
       } else {
           return helperComponents[this.typeHelper].getAllowList(this.componentName);
       }

     },

     menuAddClose() {
       this.menu = false;
     },

     getText(name, type) {
       type = type?type: 't';
       if (this.typeHelper=='helperChildren') {
         return this.$t(`admins.${name}.${type}`);
       } else if (this.typeHelper=='helperClass') {
         return this.$t(`admins.ClassTitles.${name}.${type}`);
       } else {
          return this.$t(`admins.${this.componentName}.${this.typeHelper}.${name}.${type}`);
       }

     }



  },

  computed: {

    issetNames() {

      var names = {};
      for (var i in this.childrenList) {
          names[this.childrenList[i]._n] = {
            default:this.childrenList[i].default,
            value:this.childrenList[i].value };
      }
      return names;
    }
  }



}
