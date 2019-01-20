import PagesApi from './components/Pages/Api.js';
import OneService from './components/Pages/OneService.js';
import CorePage from './components/Pages/_extends/page.js';
import RouteItems from './components/Items/index.vue';

export default function (templateRoutes) {

      //https://vuejs.org/v2/api/#renderError
      CorePage.renderError = function (h, err) {
          return h(templateRoutes.RouteError, {props: {status: err.statusError }});
      };

      OneService.components = {OneService: templateRoutes.RouteOneService };


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
              name: "objectService",
              path:  '/p/:objectId',
              component: OneService,
              props: true

            },

            {
              name: "order",
              path:  '/go/:typeAction(order|call|recall|chat|links|locations)?',
              component: templateRoutes.RouteOrder,
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
               component: templateRoutes.RouteError,
               props: {status:404},
               meta:{},
            }
         ];

}
