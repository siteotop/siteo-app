import PagesApi from './components/Pages/Api.js';
import CorePage from './components/Pages/_extends/page.js';
import RouteItems from './components/Items/index.vue';
import RouteOrder from './components/Order.vue';

export default function () {

      //https://vuejs.org/v2/api/#renderError
      CorePage.renderError = function (h, err) {
          return h('RouteError', {props: {status: err.statusError }});
      };

      return [
            {
              name: "indexPage",
              path:  '/',
              component: PagesApi,
              props: true,
              meta: {name: 'page'}
            },

            {
              name: "services",
              path:  '/services',
              component: RouteItems,
              props: { typeList: 'services' }
            },
            {
              name: "experts",
              path:  '/experts',
              component: RouteItems,
              props: { typeList: 'experts' }
            },

            {
              name: "posts",
              path:  '/posts',
              component: RouteItems,
              props: { typeList: 'posts' }
            },



            {
              name: "order",
              path:  '/go/:typeAction(order|call|recall|chat|links|locations)?',
              component: RouteOrder,
              props: true

            },

            {
              name: "objectPage",
              path:  '/:objectId',
              component: PagesApi,
              props: true,
              meta: {name: 'page'}
            },

            {
               path: "*",
               name: 'PageError',
               component: { functional: true, render(h){ return h('RouteError', {props: {status:404}})} } ,
               meta:{},
            }
         ];

}
