
import PageSchema from './components/Page/Schema.js';
import PageError from './components/Page/Error.vue';
export default  [

        {
          name: "indexPage",
          path:  '/',
          component: PageSchema,

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
