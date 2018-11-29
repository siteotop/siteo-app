import PagesApi from './Pages/Api.js';
import OneService from './Pages/OneService.js';
import CorePage from './Pages/_extends/page.js';


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
            },

            {
              name: "services",
              path:  '/services',
              component: templateRoutes.RouteItems,
              props: { typeList: 'services' }
            },
            {
              name: "experts",
              path:  '/experts',
              component: templateRoutes.RouteItems,
              props: { typeList: 'experts' }
            },

            {
              name: "posts",
              path:  '/posts',
              component: templateRoutes.RouteItems,
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
              name: "objectPost",
              path:  '/:objectId',
              component: PagesApi,
              props: true,
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
