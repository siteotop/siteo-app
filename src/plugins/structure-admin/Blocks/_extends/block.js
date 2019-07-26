
import * as helperComponents from '../../validator/components';
import  _isEqual from 'lodash/isEqual';
import _cloneDeep from 'lodash/cloneDeep';
import  _findIndex from 'lodash/findIndex';
import HelperMenuActions from './_helper/menu-actions.vue';
import HelperMenuAdd from './_helper/menu-add.vue';

import {
  mdiPlus,
  mdiViewStream,
  mdiDrag,
  mdiUnfoldMoreHorizontal,
  mdiUnfoldLessHorizontal,
  mdiDatabase,
  mdiContentCopy,
  mdiContentPaste,
  mdiContentCut,
  mdiFileTree
} from '@mdi/js';

export default {

  components: {
    HelperMenuActions,
    HelperMenuAdd
  },
  _icons: {
    add:  mdiPlus,
    block:mdiViewStream,
    drag: mdiDrag,
    more: mdiUnfoldMoreHorizontal,
    less: mdiUnfoldLessHorizontal,
    database: mdiDatabase,

    copy: mdiContentCopy,
    paste: mdiContentPaste,
    cut: mdiContentCut,
    tree: mdiFileTree

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
           return ['helperChildren', 'helperProps', 'helperAttrs',  'helperClass', 'helperData'].indexOf(value)!==-1
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
        menuList: [],
        showItems: true
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
        if (true) {
          console.log(newValue);
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
       return _findIndex (this.childrenList, {/*_name*/ n:name});
    },

    
    createMenuList(childrenList) {
       this.menuList = this.childrenList.map(function(element) {
         return {
           activeContent: false,
           activeEdit: false,
           activeTabEdit: 0,
           database: false
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

    getNameActiveComponent(index) {
        return this.childrenList[index].n /*_name*/;
    },
    /*
      clone component for manipulation
    */
    prepareToCopy(index) {
        return _cloneDeep(this.childrenList[index]);
    },

    cloneComponent(index) {
        var cloning = this.prepareToCopy(index);
        console.log(cloning);
        this.childrenList.push(cloning);
        this.createMenuList();
    },

    /**
     copy jsonStructure to clipboard
    */
    copytoClipboard(index) {
      var jsonStructureComponent = JSON.stringify(this.prepareToCopy(index));
      if (navigator.clipboard) {

        navigator.clipboard.writeText(jsonStructureComponent)
            .then(() => {
              console.log('Text copied to clipboard');
            })
            .catch(err => {
              // This can happen if the user denies clipboard permissions:
              console.error('Could not copy text: ', err);
            });
        }
    },

    /**
      paste jsonStructure from clipboard
    */
    pasteFromClipboard(index) {
      this.showItems = false;
      if (navigator.clipboard&&navigator.clipboard.readText) {
        navigator.clipboard.readText()
        .then(text => {
            var jsonStructureComponent = JSON.parse(text);
            this.updateJsonBlock(index, jsonStructureComponent);
            this.showItems = true;
            //this.childrenList[index] = jsonStructureComponent;

        })
        .catch(err => {
            console.error('Failed to read clipboard contents: ', err);
            this.showItems = true;
        });
      }
    },

    updateJsonBlock(index, jsonStructure) {
      console.log( index);
      console.log( jsonStructure);
      if (this.childrenList[index].n/*_name*/  == jsonStructure.n /*_name*/ ) {
          for (var i in jsonStructure) {
            this.childrenList[index][i] = jsonStructure[i]
          }
      }
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
       } else if (this.typeHelper=='helperClass' || this.typeHelper=='helperAttrs' ) {
         return this.$t(`admins.${this.typeHelper}.${name}.${type}`);
       } else {
          return this.$t(`admins.${this.componentName}.${this.typeHelper}.${name}.${type}`);
       }

     }



  },

  computed: {

    issetNames() {

      var names = {};
      for (var i in this.childrenList) {
          names[this.childrenList[i].n] /*_name*/ = {
            default:this.childrenList[i].default,
            value:this.childrenList[i].value };
      }
      return names;
    }
  }



}
