
const validatorName = {required: true, min: 2, max: 100, alpha_spaces: true}

import {mdiAt, mdiAccount, mdiCellphone, mdiViewList}  from '@mdi/js'

const fieldsMap = {
  name ()  {
    return {
      c:'AppFieldPlainText',
      v: validatorName,
      p: {prependIcon:mdiAccount}
    }
  },

  lastname () {
    return {
      c:'AppFieldPlainText',
      v: validatorName,
      p: {prependIcon: mdiAccount}
    }
  },
  email(){
    return {
      c:'AppFieldPlainText',
      v:{required: true, email:true},
      p: {prependIcon: mdiAt}
    }
  } ,
  phone (){
    return {
      c:'AppFieldPhone',
      v:{required: true, numeric:true, min:10,  max:14},
      p:{'prefix': '+', prependIcon:  mdiCellphone}
    }
  },

  values() {
    return {
      c: 'AppFieldItems',
      v: {required: true},
      p: {prependIcon: mdiViewList}
    }
  },   //'AppFieldValues',

  dateorder () {
    return {
      c: 'AppFieldDate',
      v: {required: true}
    }
  }

}

export const  getStructureForField = function (fieldName) {

  if (fieldsMap[fieldName]) {
    var field = fieldsMap[fieldName]();
    return {
      component: field.c,
      validators: field.v,
      name: fieldName,
      props: field.p||{}
    }
  } else {

    return false;
  }
}

/**
  @param fieldStructure - structure for  field
*/
export const mergeStructureFields = function (fieldStructure) {
   if (fieldStructure.role&&fieldStructure.component) {
     var strucute = getStructureForField(fieldStructure.role);
     return {...strucute, ...fieldStructure.component};
   } else {
      if (!fieldStructure.props) {fieldStructure.props={};}
      return fieldStructure;
   }



}
