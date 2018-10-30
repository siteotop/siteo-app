import PageSchema from './PageSchema';
import PageError from './Pages/Error.vue';
import PageOrder from './Pages/Order.vue';
import PageServices from './PageSchema/Sections/Lists/Services.js';
import PageExperts from './PageSchema/Sections/Lists/Experts.js';
import PagePosts from './PageSchema/Sections/Lists/Posts.js';
export default  [



        {
          name: "indexPage",
          path:  '/',
          component: PageSchema,
          props: true,
        },

        {
          name: "services",
          path:  '/services',
          component: PageServices,

        },
        {
          name: "experts",
          path:  '/experts',
          component: PageExperts,

        },

        {
          name: "posts",
          path:  '/posts',
          component: PagePosts,
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
          component: PageSchema,
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
