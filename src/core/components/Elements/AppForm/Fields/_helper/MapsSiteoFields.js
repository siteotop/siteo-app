
const validatorName = {required: true, min: 2, max: 100, alpha_spaces: true}

const fieldsMap = {
  name:  {
    c:'AppFieldPlainText',
    v: validatorName
  } ,
  lastname : {
    c:'AppFieldPlainText',
    v: validatorName
  },
  email:{
    c:'AppFieldPlainText',
    v:{required: true, email:true}
  } ,
  phone :{
    c:'AppFieldPlainText',
    v:{required: true, numeric:true, min:10,  max:14},
    p:{'prefix': '+'}
  },

  services: {
    c: 'AppFieldServices',
    v: {required: true}
  },   //'AppFieldServices',

  dateorder: {
    c: 'AppFieldDate',
    v: {required: true}
  }

}

export const  getStructureForField = function (fieldName) {
  return {
    name: fieldsMap[fieldName].c,
    validators: fieldsMap[fieldName].v,
    _n: fieldName,
    props: fieldsMap[fieldName].p||{}
  }
}
