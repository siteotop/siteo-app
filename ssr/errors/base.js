
const baseErrors={


  'NO_APP_INSTANCE': {
    status: 400,
    error_code: 'NO_APP_INSTANCE',
    error_description: ''
  },

  'NOT_FOUND_COMPONENTS': {
    status: 404,
    error_code: 'NOT_FOUND_COMPONENTS',
    error_description: ''
  },

  'NOT_ASYNC_DATA': {
    status: 404,
    error_code: 'NOT_ASYNC_DATA',
    error_description: ''
  },

  'AXIOS_ERR_INNER_ECONNABORTED': {
    status: 500,
    error_code: 'AXIOS_ERR_INNER_ECONNABORTED',
    error_description: 'Server axios aborted'
  },

  'AXIOS_ERR_INNER_ENOTFOUND' : {
    status: 500,
    error_code: 'AXIOS_ERR_INNER_ENOTFOUND',
    error_description: 'Conection server axios return  not found error'
  },

  'AXIOS_ERR_RESPONSE': {
    status: 500,
    error_code: 'AXIOS_ERR_RESPONSE',
    error_description: 'Conection server axios return error response'
  }

}

module.exports=function (error_code) {

    if (baseErrors[error_code]) {
      return baseErrors[error_code];
    } else {
      return {
        status: 500,
        error_code: 'noFoundErrorCode',
        error_description: 'Server error'
      }
    }

}
