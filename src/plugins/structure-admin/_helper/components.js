
import * as allowChildrenList from '../validator/allowChildren';

var isProperty=function(componentName, propertyName) {

    return allowChildrenList[componentName]&&allowChildrenList[componentName][propertyName]
}

var isChildren = function (componentName){
  return isProperty(componentName, '_ch');
}

// properties and default
const getPropterties = function () {
  return {
      _ch: [],
      _n: '',
      _p: {},
      _c: [],
      colors: allowChildrenList['theme'].colors
  };
};

const  createSettComponent = function (componentName) {
   var settings = {};
   const _PROPERTIES = getPropterties();
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
   const _PROPERTIES = getPropterties();
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


export const components = {
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
          return allowChildrenList[parentName]._ch;
      } else {
        return [];
      }
  },
};

export const props = {
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
       if (isProperty(componentName, '_p')) {
          return Object.keys(allowChildrenList[componentName]._p);
        } else {
          return [];
        }

    }
};

const REGEXES_FOR_CLASS = {
  elevation: /elevation-([0-2]?[0-9])/
}

const createClassesProps = function (className, componentName){
  return {
    $comp: 'PropClass'+className.replace(/^\w/, c => c.toUpperCase()),
    _n: className,
    default: '',
    value: ''
  }
}

const findClassInRegex = function (className, componentName) {
  for (var regex_name in REGEXES_FOR_CLASS) {
     var result = REGEXES_FOR_CLASS[regex_name].test(className);
     if (result) {
        return createClassesProps(regex_name);
     } else {
       return false;
     }
  }
}


export const classes = {

    /**
      @example inputList = ["elevation-12", 'pa-3']
    */
    unZip:function (arrayClass, componentName) {
       console.log(arrayClass);
       var componentList = [];
       for (var i in arrayClass ) {
          var class_props = findClassInRegex(arrayClass[i], componentName);
          if (class_props !== false) {
              class_props.value = arrayClass[i];
              componentList.push(class_props);
          }
       }
      return componentList;
    },

    zip: function(propsArray) {
      var classes = [];
      for (var index in propsArray) {
        if (propsArray[index].value) {
           classes.push(propsArray[index].value);
        }
      }
      return classes;
    },

    createSettings: createClassesProps,

    getAllowList: function(componentName) {

      if (isProperty(componentName, '_c')) {
         var result =  allowChildrenList[componentName]._c;
         console.log(result);
         return result;
       } else {
         return [];
       }
    }
};
