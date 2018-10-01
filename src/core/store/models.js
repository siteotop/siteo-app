import {createModelCRUD}  from './helpers/model-events.js'

const DEFAULT_GETTER = 'websites/urlID';

export const  createStorePage = function (parent) {
  return createModelCRUD({
    api: {url: '/pages',  parent: parent||DEFAULT_GETTER },
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

export const  createServices = function (parent) {
  return createModelCRUD({
    api: {url: '/services',  parent: parent||DEFAULT_GETTER },
    state () {
        return {
          _id: '',
          title: '',
          price: '',
          preview: '',
          internal_uri: '',
          picture: ''

      }
    }
  })

} ;
