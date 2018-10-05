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
        routes: routes,
        scrollBehavior (to, from, savedPosition) {
          // return desired position https://router.vuejs.org/guide/advanced/scroll-behavior.html
          if (savedPosition) {
            //Returning the savedPosition will result in a native-like behavior when navigating with back/forward buttons:
            return savedPosition
          } else {
            //If a falsy value or an empty object is returned, no scrolling will happen.
            return { x: 0, y: 0 }
          }
        }

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
