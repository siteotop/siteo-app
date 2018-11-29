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
          url: '',
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
          subtitle: '',
          price: '',
          preview: '',
          readMore: '',
          actionText: '',
          internal_uri: '',
          picture: ''

      }
    }
  })

};

export const  createPosts = function (parent) {
  return createModelCRUD({
    api: {url: '/posts',  parent: parent||DEFAULT_GETTER },
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

};



export const  createExperts = function (parent) {
  return createModelCRUD({
    api: {url: '/experts',  parent: parent||DEFAULT_GETTER },
    state () {
        return  {
           _id: '1223123',
           name: '',
           position: '',
           picture: '',
           about: '',
         }
    }
  })

};

export const  createOrders = function (parent, turnonlist) {
  return createModelCRUD({
    api: {url: '/orders',  parent: parent||DEFAULT_GETTER },
    state () {
        return {
          _id: '',
          name: '', // name of customer
          lastname: '', // lastname of customer
          dateorder: '', // date when customer wants get servise or goods
          phone: '', // customer phone
          email: '', // customer email
          services: [], //  services which customer have booking
          daterecall: '', // date when customer wants recall
          typeorder: '' //  queryprice, recall, order,


      }
    }
  }, turnonlist)

};
