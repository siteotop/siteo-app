module.exports={
   backend: {
      token: 'env_ssr_token',
      domen: 'siteo.top', // domen for "siteo" or "multisiteo"
      ssr: true,
      multisiteo: true, // true or false
      siteo_id: '152774684316952',
      folder_client: 'public',
      host_app_js: process.env.NODE_ENV =='production'? "https://static.siteo.top":'',
   },

   frontend: {
      public_token: 'env_frontend_public_token',
      api_url: 'https://api.siteo.top/v1',
      path:"",
      lang: 'en',
      host: process.env.NODE_ENV =='production'? "https://siteo.top":'http://localhost:8080',

   }
}
