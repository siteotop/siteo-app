
const baseErrors={

  'APP_INSTANCE_ERR_NO_SSR_TOKEN': {
    status: 500,
    error_description: 'Please, set up the ssr token on your server'
  },

  'APP_INSTANCE_ERR_NO_SITEO_ID': {
    status: 500,
    error_description: 'Server not resolved siteo_id'
  },

  'APP_INSTANCE_NOT_VALID': {
    status: 400,
    error_description: 'Response from API is not valid'
  },

  'NOT_FOUND_COMPONENTS': {
    status: 404,
    error_description: 'Not found components for this route'
  },

  'NOT_ASYNC_DATA': {
    status: 404,
    error_description: 'Not async data inside components'
  },

  'AXIOS_ERR_INNER_ECONNABORTED': {
    status: 500,
    error_description: 'Server axios aborted'
  },

  'AXIOS_ERR_INNER_ENOTFOUND' : {
    status: 500,
    error_description: 'Conection server axios return  not found error'
  },

  'AXIOS_ERR_RESPONSE': {
    status: 500,
    error_description: 'API throught server return error  response in body: '
  }

}

module.exports=function (error_code) {


    var code, status, description;

    if (baseErrors[error_code]) {
      status=baseErrors[error_code].status;
      code= error_code;
      description = baseErrors[error_code].error_description
    } else {
      status=500;
      code=`ErrorCode:${error_code}`;
      description= 'Error code not found in base'
    }

    return {
      issuer: 'siteo-template-ssr',
      status: status,
      error_code: code,
      error_description: description
    }

}
