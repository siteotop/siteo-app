
import * as allowChildrenList from '../validator/allowChildren';

var isProperty=function(componentName, propertyName) {

    return allowChildrenList[componentName]&&allowChildrenList[componentName][propertyName]
}

var isChildren = function (componentName){
  return isProperty(componentName, '_ch');
}

// properties and default
const _PROPERTIES = {
    _ch: [],
    _n: '',
    _p: {},
    _c: [],
    colors: allowChildrenList['theme'].colors
};

export const  createSettComponent = function (componentName) {
   var settings = {};
   for (var property in _PROPERTIES) {
      if (isProperty(componentName, property)) {
        settings[property] = _PROPERTIES[property];
      }
   }
   settings._n = componentName;
   return settings;
}


export const updateSettComponent = function (issetStrucutre, componentName) {

   //var componentObject = getComponent(componentName);
   if (!allowChildrenList[componentName]) {
     issetStrucutre._n = componentName;
     return issetStrucutre;
   }

   var settings = {};
   for (var property in _PROPERTIES) {
      if (isProperty(componentName, property)) {
         if (!issetStrucutre[property]) {
            settings[property] = _PROPERTIES[property];
         } else {
            settings[property] = issetStrucutre[property];
         }
      }
   }
   settings._n = issetStrucutre._n||componentName;
   return settings;
}

const createSettProps =  function(propsName, componentName){
      if ( allowChildrenList[componentName]) {
         var propsSettings = allowChildrenList[componentName]._p[propsName];
         return {
          ...propsSettings,
          _n: propsName,
          value: propsSettings.default,
        };
      } else {
        return false;
      }
  }




export const helperComponents = {

      component: {
        unZip: function (inputList) {
          return inputList;
        },
        zip: function (inputList) {
          return inputList;
        },
        createSettings: createSettComponent,

        /**
          @return @array of components
          [
            { _n:'',_p:'', _ch: []}
          ]
        */
        getAllowList: function (parentName) {
            if (!parentName) {
              parentName = 'root';
            }
            if (isChildren(parentName)) {
                var allowStructure = {};
                return   allowChildrenList[parentName]._ch;
            } else {
              return [];
            }
        },
      },

      props: {
        /**
          @Object inputList is Object like  {nameprop: 1, nameprop:2}
          @String componentName
          @return @array
        */
         unZip: function (inputList, componentName) {
           var newList = [];
           for (var propName in inputList) {
             var settProps = createSettProps(propName, componentName);
             settProps.value = inputList[propName];
             newList.push(settProps);
           }
           return newList;
         },
         zip: function (propsArray) {
             var objectProps = {};
             for (var i in propsArray) {
                 objectProps[propsArray[i]._n] = propsArray[i].value;
             }
             return objectProps;
         },
         createSettings: createSettProps,

         /**
           @return array
         */
         getAllowList: function(componentName) {
             var props;
             if ( allowChildrenList[componentName]&&allowChildrenList[componentName]._p) {
                return Object.keys(allowChildrenList[componentName]._p);
              } else {
                return [];
              }

          }
      },

      class: {
          unZip:function() {
            return [];
          },

          zip: function() {

          },

          createSettings: function () {
              
          },

          getAllowList: function() {
            return [];
          }

      }
  }
