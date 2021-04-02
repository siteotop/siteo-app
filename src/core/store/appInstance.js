/*
Store for appInstance.objectActive from server
*/

export default {

  //api:'/admins',
  api: {url: '/apps',  getOnly: true },
  state () {
      return {
         name:"",
         title:"",
         slogan:"",
         description:"",
         contacts: [],
         design:{},
         menus:[] ,
         links:[],
         langs: [],
         locations: [],
         _websites_page: ''
        }
  }
}
