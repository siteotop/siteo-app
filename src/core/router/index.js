/**ROUTER
   create Routing for every APP
*/
import VueRouter from 'router';


export default function (Vue, store, path,  routes) {
    Vue.use(VueRouter);
    var router;
    router = new VueRouter({
        base: path|| '/',
        mode: 'history',
        fallback: false,  // для браузеров где нет History Api  (IE9) будет просто открывать новую страницу
        routes: routes

     });

     router.beforeEach(function (to, from, next) {
         Vue.prototype.$Progress.start();
         store.commit('startPageLoader');
         next();
     });

     router.afterEach(function (to, from) {
         store.commit('stopPageLoader');
         Vue.prototype.$Progress.finish();

              /**
                  GOOGLE ANALYTYCS

                  ga(['router_link']);
              */
      });

      return router;
}
