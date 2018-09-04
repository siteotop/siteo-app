import PageSchema from './components/PageSchema';
import PageError from './components/Pages/Error.vue';
import PageOrder from './components/Pages/Order.vue';
export default  [

        {
          name: "indexPage",
          path:  '/',
          component: PageSchema,

        },

        {
          name: "order",
          path:  '/order',
          component: PageOrder,

        },

        {
          name: "PageSchema",
          path:  '/:postId',
          component: PageSchema,

        },

        {
           path: "*",
           name: 'PageError',
           component: PageError,
           props: {status:404},
           meta:{},
        }
     ];
