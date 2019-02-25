module.exports={
   backend: {

      
      NODE_ENV:  process.env.NODE_ENV || "production",
      // format with https:// example (https://static.siteo.top)
      host_app_js: process.env.HOST_STATIC || "",

      //format with https:// example (https://static.siteo.top)
      host_plugins: process.env.HOST_PLUGIN ||'',

      // api with api siteo version
      HOST_API:process.env.HOST_API+'/v1',
   },

   frontend: {

      /**
        path for vue router
        https://router.vuejs.org/api/#base
      */
      path: "/",
      lang: 'en',
      //host: process.env.NODE_ENV =='production'? "https://siteo.top":'',

   }
}
