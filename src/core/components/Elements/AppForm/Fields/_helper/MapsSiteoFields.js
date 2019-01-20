
const validatorName = {required: true, min: 2, max: 100, alpha_spaces: true}

const fieldsMap = {
  name ()  {
    return {
      c:'AppFieldPlainText',
      v: validatorName,
      p: {prependIcon:'person'}
    }
  },

  lastname () {
    return {
      c:'AppFieldPlainText',
      v: validatorName,
      p: {prependIcon:'person'}
    }
  },
  email(){
    return {
      c:'AppFieldPlainText',
      v:{required: true, email:true},
      p: {prependIcon: 'email'}
    }
  } ,
  phone (){
    return {
      c:'AppFieldPhone',
      v:{required: true, numeric:true, min:10,  max:14},
      p:{'prefix': '+', prependIcon: 'phone'}
    }
  },

  services() {
    return {
      c: 'AppFieldItems',
      v: {required: true},
      p: {prependIcon:'add_shopping_cart'}
    }
  },   //'AppFieldServices',

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

export const mergeStructureFields = function (fieldStructure) {
   if (fieldStructure.role&&fieldStructure.component) {
     var strucute = getStructureForField(fieldStructure.role);
     return {...strucute, ...fieldStructure.component};
   } else {
      if (!fieldStructure.props) {fieldStructure.props={};}
      return fieldStructure;
   }



}
