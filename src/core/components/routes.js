import PagesApi from './Pages/Api.js';


export default function (templateRoutes) {

      PagesApi.renderError = function (h, err) {
          console.log(err);
          return h(templateRoutes.RouteError, {props: {status: err.statusError }});
      };

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
              name: "order",
              path:  '/go/:typeAction(order|call|recall|chat|links|locations)?',
              component: templateRoutes.RouteOrder,
              props: true

            },

            {
              name: "PageSchema",
              path:  '/:idString-p:postId',
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
