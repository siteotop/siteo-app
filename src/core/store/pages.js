import {createModelCRUD}  from './helpers/model-events.js'
export const  createStorePage = function (parent ) {
  return createModelCRUD({
    api: {url: '/pages',  parent: parent||'websites'},
    state () {
        return {
          _id: '',
          title: '',
          description: '',
          cannonical: '',
          preview: '',
          contentStructure: []

      }
    }
  })

} ;
