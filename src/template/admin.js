import {createSettComponent} from './components/Structure/design';
import * as  AppStructure from './components/Structure';

var childrenList = {};
// check everything  structure's component  for availability children
for (var parentName in AppStructure) {
     if (AppStructure[parentName].children) {
        // if component has children, get them and set options
        var children = require(`./components/Structure/${parentName}/Children/index.js`);
        childrenList[parentName] = children;

     }
}
//console.log(designStructure);
//console.log( allDesignStructure);
//template.coreVue.allDesignStructure = allDesignStructure;


export const DesignComponents = {

    install: function (Vue, options) {
           console.log(Vue.options);
           console.log(Vue.options.components);
          var getComponent = function (componentName) {
              if (AppStructure[componentName]) {
                 return AppStructure[componentName];
              } else {
                  for (var i in childrenList) {
                      if (childrenList[i][componentName]) {
                          return childrenList[i][componentName];
                      }
                  }
              }

          }

          var connectSpecial = function(componentName, props, componentProps) {
            for (var nameProp in componentProps) {

                props[nameProp] = componentProps[nameProp];



            }
          }

          var DesignComponents = {
              createSettComponent: createSettComponent,
              getChildrenList: function (parentName) {
                  return childrenList[parentName];
              },
              getComponent: getComponent,

              generateProps(componentName) {
                 var props = {},  component = getComponent(componentName);


                  if (component.props) {
                    connectSpecial(componentName, props, component.props);
                  }

                  if (component.wrapped) {
                     // component Wrapped must be in "CamelCase" naming  
                     var wrappedComponent =  Vue.component(component.wrapped);
                     var instanceComponent = new wrappedComponent();
                     connectSpecial(componentName, props, instanceComponent.$options.props);

                  }

                return props;

              }

          }


          options.coreVue.DesignComponents = DesignComponents;


    }


}
