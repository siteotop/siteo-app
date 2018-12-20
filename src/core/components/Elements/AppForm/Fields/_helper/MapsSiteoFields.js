
const validatorName = {required: true, min: 2, max: 100, alpha_spaces: true}

const fieldsMap = {
  name:  {
    c:'AppFieldPlainText',
    v: validatorName,
    p: {prependIcon:'person'}
  } ,
  lastname : {
    c:'AppFieldPlainText',
    v: validatorName,
    p: {prependIcon:'person'}
  },
  email:{
    c:'AppFieldPlainText',
    v:{required: true, email:true},
    p: {prependIcon: 'email'}
  } ,
  phone :{
    c:'AppFieldPlainText',
    v:{required: true, numeric:true, min:10,  max:14},
    p:{'prefix': '+', prependIcon: 'phone'}
  },

  services: {
    c: 'AppFieldServices',
    v: {required: true},
    p: {prependIcon:'add_shopping_cart'}
  },   //'AppFieldServices',

  dateorder: {
    c: 'AppFieldDate',
    v: {required: true}
  }

}

export const  getStructureForField = function (fieldName) {

  if (fieldsMap[fieldName]) {
    return {
      name: fieldsMap[fieldName].c,
      validators: fieldsMap[fieldName].v,
      _n: fieldName,
      props: fieldsMap[fieldName].p||{}
    }
  } else {
    return false;
  }
}

export const mergeStructureFields = function (fieldStructure) {
   if (fieldStructure.role&&fieldStructure.component) {
     var strucute = getStructureForField(fieldStructure.role);
     return {...strucute, ...fieldStructure.component};
   } else {
      return fieldStructure;
   }



}
