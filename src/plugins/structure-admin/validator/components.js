
import * as allowChildrenList from './MapComponents';
import * as  readyProps from './readyProps';


export const ROOT_STRUCTURE = {


  getComponent: function (componentName) {
      if (allowChildrenList[componentName]) {
        return allowChildrenList[componentName];
      } else {
        return false;
      }
  },

  getAllowListFromComponent: function(componentName, propertyName) {
      if (allowChildrenList[componentName]&&allowChildrenList[componentName][propertyName]) {
          return allowChildrenList[componentName][propertyName];
      } else {
        return false;
      }
  },

  isProperty:function(componentName, propertyName) {
      return allowChildrenList[componentName]&&allowChildrenList[componentName][propertyName]
  },

  getPropterties:  function () {
    return {
        _d: {}, // _data
        _n: '', // _name
        _p: {}, // _props
        _c: [], // _class
        _a: {}, // _attribs
        _ch: [], // _children

    };
  }


}


const createSettOneProp =  function(propsName, componentName, type){
      var allowComponent = ROOT_STRUCTURE.getComponent(componentName);
      if ( allowComponent) {
         var propsSettings = allowComponent[type][propsName];
         if (typeof(propsSettings) == 'string') {
           propsSettings =readyProps[propsSettings];
         }
         return {
          ...propsSettings,
          _n: propsName,
          value: propsSettings.default,
        };
      } else {
        return false;
      }
  }



export const helperChildren = {
  unZip: function (inputList) {
    return inputList;
  },
  zip: function (inputList) {
    return inputList;
  },
  createSettings: function (componentName) {
     var settings = {};
     const _proporties = ROOT_STRUCTURE.getPropterties();
     for (var property in _proporties) {
        if (ROOT_STRUCTURE.isProperty(componentName, property)) {
          settings[property] = _proporties[property];
        }
     }
     settings._n = componentName;
     return settings;
  },

  /**
    @return @array of components
    [
      { _n:'',_p:'', _ch: []}
    ]
  */
  getAllowList: function (parentName, type) {
      if (!parentName) {
         parentName = 'root';
      }
      if (!type) {
        type = '_ch';
      }
      var children = ROOT_STRUCTURE.getAllowListFromComponent(parentName, type)
      if (children!==false) {
          return children
      } else {
        return [];
      }
  },
};

/**

For Props Settings

*/
export const helperProps = {
  /**
    @Object inputList is Object like  {nameprop: 1, nameprop:2}
    @String componentName
    @return @array
  */
   unZip: function (inputList, componentName, type) {
      if (!type) {
          type='_p';
      }
     var newList = [];
     for (var propName in inputList) {
       var settProps = createSettOneProp(propName, componentName, type);
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

   createSettings: function (propName, componentName) {
      return createSettOneProp(propName, componentName,  '_p');
   },

   /**
     @return array
   */
   getAllowList: function(componentName, type) {
        if (!type) {
          type = '_p';
        }
       var props = ROOT_STRUCTURE.getAllowListFromComponent(componentName, type);
       if (props!==false) {
          return Object.keys(props);
        } else {
          return [];
        }

    }
};



import {findClassInRegex} from  '../Blocks/Class/ExtendField/validators.js';


const createClassesProps = function (className, componentName){
  return {
    $comp: 'PropClass'+className.replace(/^\w/, c => c.toUpperCase()),
    _n: className,
    default: '',
    value: ''
  }
}


export const helperClass = {

    /**
      @example inputList = ["elevation-12", 'pa-3']
    */
    unZip:function (arrayClass, componentName) {
       console.log(arrayClass);
       var componentList = [];
       for (var i in arrayClass ) {
          var name_class =  findClassInRegex(arrayClass[i], componentName);
          //console.log(name_class);
          if (name_class !== false) {
              var class_props = createClassesProps(name_class, componentName);
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

    getAllowList:  function(componentName) {
      return helperChildren.getAllowList(componentName, '_c');
    }
};


export const helperData = {

   unZip: function (inputList, componentName) {
      return helperProps.unZip(inputList, componentName, '_d');
   },

   zip: helperProps.zip,

   createSettings: function (propName, componentName) {
      return createSettOneProp(propName, componentName,  '_d');
   },
   /**
     @return array
   */
   getAllowList: function(componentName) {
      return helperProps.getAllowList(componentName, '_d')
   }
};




export const helperAttrs = {

  unZip: function (inputList, componentName) {
     return helperProps.unZip(inputList, 'EAttrs', '_a');
  },

  zip: helperProps.zip,

  createSettings: function (propName, componentName) {
     return createSettOneProp(propName, 'EAttrs',  '_a');
  },
  /**
    @return array
  */
  getAllowList: function(componentName) {
     return helperProps.getAllowList('EAttrs', '_a')
  }
}
