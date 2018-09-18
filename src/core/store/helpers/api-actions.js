
import RESTApi from 'core/http/rest-api.js';
//import {AuthStorage} from 'core/utils/local-storage';

const needRefresh= function (expire) {
   var time_now, expire;
   time_now = Math.floor( Date.now()/ 1000); //робимо зазор в 5 секунд
   //expire = Cookie.get(EXPIRE_ID);
   if (!expire) {
      return true;
   }
    console.log(time_now);
    console.log(expire);
   return (time_now > expire);

};

const actions = {

  callAPI({dispatch, getters, rootGetters}, APIconfig) {

     var  refresh_token  = rootGetters['authStore/getRefreshToken'];  //AuthStorage.getRefreshToken();
     console.log(refresh_token);
      console.log(APIconfig);
     // if we have not found refresh_token we need call LogOut and send user to  login
     if (!refresh_token) {
            dispatch('generateSystemMessage', {text: 'We dont find Authorization token. Try relogin', type: 'error'}, { root: true });
            dispatch('account/logOut');
            throw  {error: 'no refresh token'};

     }

     // browser check token life
     // AuthStorage.needRefresh()
     if (needRefresh(rootGetters['authStore/getExpired'])) {
           // if token is died we call refresh

           /**

              REFRESH

           */
           return  dispatch('account/refreshToken', refresh_token ).then(response=>{
                APIconfig.access_token =  response.access_token;
                return  dispatch('callCoreApi', APIconfig );
            });
      } else {
         // if token good we call API
         // send query to api using access_token
          APIconfig.access_token = rootGetters['authStore/getAccessToken'];  //AuthStorage.getAccessToken();
          return  dispatch('callCoreApi', APIconfig ).catch(error=>{
               // if server Api return status code 406  then we need get refresh token and  try again
              if (error.response&&error.response.status == 406) {

                /**

                 REFRESH ANOTHER

                */
                 return  dispatch('account/refreshToken', refresh_token ).then(response=>{
                     APIconfig.access_token =  response.access_token;
                     return  dispatch('callCoreApi', APIconfig ).catch(error=>{
                           //IF second attempt we catch error we make logout
                            dispatch('account/logOut');
                     });

                 })
              } else {
                 console.log(error);
                 throw error;

              }
          });
      }



  },





  callCoreApi({dispatch}, APIconfig ) {



    return  RESTApi({
       method: APIconfig.method,
       url: APIconfig.url,
       data: APIconfig.data,
       headers: {'common': { 'Authorization':"Bearer "+ APIconfig.access_token }},
       params: APIconfig.params,
       withCredentials: true
      //  responseType:'stream'
    }).catch (error=>{

          console.log(error);
          dispatch('generateSystemMessageRespone', error, { root: true });
     });

  },

  callPublicApi({dispatch}, URL) {
    return  RESTApi({
       method: 'GET',
       url: URL,
       //headers: {'X-Requested-With': 'XMLHttpRequest'},
       params: {json:true},

    }).catch (error=>{

          console.log(error);
          dispatch('generateSystemMessageRespone', error, { root: true });
     });
  }


}

export { actions}
