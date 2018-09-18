import {createModelCRUD}  from './helpers/model-events.js'
export const  createStorePage = function (parent ) {
  return createModelCRUD({
    api: {url: '/pages',  parent: parent||'websites'},
    state () {
        return {
          _id: '',
          title: '',
          description: '',
          meta_title: '',
          meta_description: '',
          meta_canonical: '',
          meta_og_title: '',
          meta_robots: '',
        
          contentStructure: []

      }
    }
  })

} ;
