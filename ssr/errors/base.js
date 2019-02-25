
const baseErrors={

  'APP_INSTANCE_ERR_NO_SSR_TOKEN': {
    status: 500,
    error_description: ''
  },

  'APP_INSTANCE_ERR_NO_SITEO_ID': {
    status: 500,
    error_description: 'Server not resolved siteo_id'
  },

  'NO_APP_INSTANCE': {
    status: 400,
    error_description: ''
  },

  'NOT_FOUND_COMPONENTS': {
    status: 404,
    error_description: ''
  },

  'NOT_ASYNC_DATA': {
    status: 404,
    error_description: ''
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
    error_description: 'Conection server axios return error response'
  }

}

module.exports=function (error_code) {

    if (baseErrors[error_code]) {
        baseErrors[error_code].error_code = error_code;
        return  baseErrors[error_code];
    } else {
      return {
        status: 500,
        error_code: `ErrorCode:${error_code}`,
        error_description: 'Error code not found in base'
      }
    }

}
