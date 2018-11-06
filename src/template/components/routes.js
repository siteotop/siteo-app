import PagesApi from './Pages/Api.js';
import PageError from './Pages/Error.vue';
import PageOrder from './Pages/Order.vue';
import PageItems from './Pages/Items.vue';

export default  [



        {
          name: "indexPage",
          path:  '/',
          component: PagesApi,
          props: true,
        },

        {
          name: "services",
          path:  '/services',
          component: PageItems,
          props: { typeList: 'services' }
        },
        {
          name: "experts",
          path:  '/experts',
          component: PageItems,
          props: { typeList: 'experts' }
        },

        {
          name: "posts",
          path:  '/posts',
          component: PageItems,
          props: { typeList: 'posts' }
        },

        {
          name: "order",
          path:  '/go/:typeAction(order|call|recall|chat|links|locations)?',
          component: PageOrder,
          props: true

        },

        {
          name: "admin",
          path:  '/admin',
          component:  ()=>import('../components-settings/index.vue' /* webpackChunkName: "chunk/admin" */  ),

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
           component: PageError,
           props: {status:404},
           meta:{},
        }
     ];
