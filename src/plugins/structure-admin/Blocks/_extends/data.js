
import SettingsProps from   '../Props.vue';
import SettingsData from   '../Props.vue';
import SettingsAttrs from   '../Props.vue';
import SettingsClass from   '../Props/Class.vue';
import SettingsColors from   '../Colors.vue';
import HelperViewStructure from './_helper/view-structure.vue';
import HelperMenuEdit from './_helper/menu-edit.vue';

export default {


   components: {
     SettingsProps,
     SettingsData,
     SettingsClass,
     SettingsAttrs,
     SettingsColors,
     HelperMenuEdit,
     HelperViewStructure

   },
   props: {

     treeIndex: {
        type: Number,
        default: 0
     },

     treeOpenOnStart: {
       type: Boolean,
       default: false
     }
   },

   data() {

     return {
         treeStatus: false
     }
   },

   methods: {

     getHelperName(shortName) {
        var  MAP_NAMES = {
           'n': 'name',  /*_name*/
           'p': 'Props', /*_props*/
           'c': 'Class', /*_class*/
           'd': 'Data', /*_data*/
           'a': 'Attrs', /*_attrib*/
           'h': 'Children', /*_children*/
           'colors':'Colors'
         }
         if (MAP_NAMES[shortName]) {
           return MAP_NAMES[shortName];
         } else {
           return shortName;
         }

     },


      /**
       open first level element for item
      */
      toggleOneElement(indexComponent) {
         this.menuList[indexComponent].activeContent=!this.menuList[indexComponent].activeContent;
         if (this.menuList[indexComponent].activeContent) {
           this.treeStatus = false;
         }
      },

   },

   computed: {


         firstLevel() {

           return this.treeIndex==0
         }
   }




}
