
import {FORMAT_DATE, FORMAT_MASK} from '../../../config';

export const  CreateForm = function (form,context){

      if (context.props) {
         for (var i in context.props) {
            form.props[i] = context.props[i];
         }
      }
      if (context.listeners) {
        form.on = context.listeners;
      }
      return form;

}


export const  PlainField =function (fields, settings) {

      var fieldstart = {
        i18n: true,
        required: true,
        validate: false,
        value:'',
        state: null

      }

      //fieldstart = {...fieldstart, ...fields, ...settings};
      fieldstart = Object.assign(fieldstart, fields, settings);

    //  if (fieldstart.renderFunction) {
    //     fieldstart.type='function';
    //  }

      fieldstart.defaultValue = fieldstart.value;

      if (fieldstart.required) {
          if (fieldstart.validate) {
            fieldstart.validate.required = true;
          } else {
              fieldstart.validate = { required: true};
          }
      }


      //  console.log(fieldstart);
      return fieldstart;


}

export const CreateSelect = function (settings){
  //  console.log(settings);
    return PlainField({
      options: [],
      resource: 'global',
    //  type: "select",
      component: 'AppSelect',
      type_select:"options",
      //validate:
    }, settings);

}


export const CreateCountry = function (settings) {

    var country =  CreateSelectResource(settings);
      country.resource_name= 'countryAlpha2';
      country.component= 'AppSelectCountries';
      if (!country.autoStartGPS) {
        country.autoStartGPS = false;
      }
      return country;

}

export const CreateText = function (settings) {
  return PlainField({
    //type:'text',
    component: 'AppInputText',
    trim: true,
    //validate: {min: 3, max: 30, alpha: true},
  }, settings);

}

export const CreateTextArea = function (settings) {
  return PlainField({
    //type:'text',
    multiline:true,
    counter: true,
    component: 'AppInputText',
    trim: true,
    //validate: {min: 3, max: 30, alpha: true},
  }, settings);

}

export const CreateSelectResource = function (settings){

  return PlainField({

  //  type: "select",
    component: 'AppSelect',
    autocomplete : true,
    type_select:"resource",
    //validate:
  },  settings);
}


/**

*/
export const CreateDate =function ( settings ) {

   const  mask = settings.format.replace(/[A-Z]{1}/g, FORMAT_MASK );
   let validate = {date_format: settings.format};
   if (settings.between) {
      validate.date_between = settings.between;
   }


  return PlainField({
     default_format: FORMAT_DATE,
     //format: settings.format,
     //example:  settings.example,
     placeholder: settings.format,
     picker: false,
    // mask: mask,
     appendIcon : "event",
     data: "date",
    // type: "date",
     component: 'AppInputDate',
     validate: validate
   }, settings);




};



export const CreateSubmit =  function () {
    return { i18n:true,  component: 'submit', name:'submit'};
};

export const CreateCaptcha = function () {
      return PlainField({
          reload: 0,
          component: 'AppInputRecaptcha',
      });

}

export const CreateCheckbox =function ( settings) {


    //const checked_value = 1;

    var checkbox = {

    //  checked: checked_value,
    //  type:"checkbox",
      component: 'AppCheckbox',
    //  unchecked: "",

    }

  //  if (settings&& settings.checked) {
  //    checkbox.value =checked_value;
  //  }

    return PlainField(checkbox, settings);

}


export const CreateMobilePhone = function (settings) {
    return PlainField({
        //  type:'phone',
          component: "AppInputPhone",

          prefix: '+',
          validate: {
            numeric: true,
            max: 15,
            min: 11
          }

    }, settings);

}


export const  CreateName = function () {

  return PlainField({
    //type:'text',
    component:'AppInputText',
    trim: true,
    validate: {min: 2, max: 25, alpha: true},
  });

}


export const CreatePassword = function (settings) {

  return PlainField({
    component:"AppInputPassword",
    dynamic_type: "password",
    appendIcon : "eye-off"

  }, settings);


}

export const CreateNewPassword = function () {

  return CreatePassword({
    strong: {digit: "[0-9]", alpha: "[a-zа-я]", upper: "[A-ZА-Я]", spec: "[!@#^$%&*_]"},
    validate: { min: 8, max: 40},

  });



}
export const CreateEmail = function (settings) {
    return PlainField({
          //type: "text",
          component: 'AppInputText',
          validate: { email: true}
    }, settings);

}
