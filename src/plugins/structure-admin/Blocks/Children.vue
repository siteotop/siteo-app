<template>
<div class="mt-3">
    <v-expansion-panel focusable >
      <draggable v-model='childrenList' style="width:100%;" :options="{group:'children'}" @start="startDragg=true" @end="startDragg=false">
        <DesignTabsBlock :children="true"  :designStructure="childrenList">
        </DesignTabsBlock>
      </draggable>
    </v-expansion-panel>
    <v-menu z-index="1000" v-show="!startDragg" class="text-xs-center pb-3">
      <v-btn slot="activator"  fab >+ </v-btn>
          <v-list>
            <v-list-tile
              v-for="(children, indexComponent) in childrenComponents"
              :key="indexComponent"
              @click="addComponentToList(indexComponent)"
            >
              <v-list-tile-title>{{children.name||indexComponent}}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
        <div v-show="startDragg">
          <v-subheader class="red--text"><AppIcon name="si-delete"></AppIcon> Delete Zone</v-subheader>
        <draggable  style="border:2px dotted red; width:100%; height:64px;" :value="[]" @add="startEvent($event)" :options="{group:'children', filter: '.ignore-elements'}">

        </draggable>
      </div>


</div>
</template>

<script>
import draggable from 'vuedraggable'
import  _merge from 'lodash/merge';
import DesignTabsBlock from './Children/DesignTabsBlock.js';
export default {

  listBlock: ['props', 'class'],

  components: {
    draggable,
    DesignTabsBlock
  },

  props: {


    //it is name for  parent component, which need for  merge settings child component
    parentComponentName: {
      type: String,
      default: ''
    },

    value: {
        type: Array,
        default : function() {
          return [];
        }
    }
  },

  data() {
      return {
        //dialogChildren: false,
        startDragg: false,
        childrenList: []
      }
  },

  created() {
     //this.childrenList = this.value;
     console.log('created list ');
     this.connectOptions();
  },

  watch: {
    childrenList: {
        handler: function (newList) {
          this.$emit('input', newList);
        },
        deep: true
    }
  },
  methods: {

     // connect default options to every child element
     connectOptions() {
      var self = this;
      this.childrenList= this.value.map(function(component){
            var newComponent = Object.assign({}, self.basicComponents[component.name]);
            return  _merge(newComponent, component);
        })

     },

     startEvent($event){
        console.log($event);
     },

     addComponentToList(componentName) {
       this.childrenList.push(this.getSettingsFromComponent(componentName));
     },

     getSettingsFromComponent(componentName) {
       return this.$options.StructureAdminHelper.createSettComponent(componentName);
     }

  },

  computed: {

    childrenComponents() {
      return this.$options.StructureAdminHelper.getChildrenList(this.parentComponentName);
    },

    // create basic components for merge with server options
    basicComponents() {

      var basicComponents ={};
      for (var childName in this.childrenComponents) {
          basicComponents[childName] =  this.getSettingsFromComponent(childName);
      }
      return basicComponents;
    }
  }

}

</script>
