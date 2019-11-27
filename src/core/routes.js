import Pages from './components/Routes/Pages';

export default function (configs) {

    var routes = [
        {
          name: "indexPage",
          path:  '',
          component: Pages,
          props: true,
          meta: {name: 'page'}
        },
    ];

    if (!configs.lp) {
      routes.push(
        {
          name: "values",
          path: '/' + (configs.seo_path_values?  configs.seo_path_values: 'values'),
          component:()=>import( /* webpackChunkName: "list" */ './components/Routes/Items/index.vue'),
          props: { typeList: 'values' }
        },
        {
          name: "experts",
          path:  '/' + (configs.seo_path_experts?  configs.seo_path_experts: 'experts') ,
          component:()=>import( /* webpackChunkName: "list" */ './components/Routes/Items/index.vue'),
          props: { typeList: 'experts' }
        },

        {
          name: "posts",
          path:  '/' + (configs.seo_path_posts?  configs.seo_path_posts: 'posts'),
          component: ()=>import( /* webpackChunkName: "list" */ './components/Routes/Items/index.vue'),
          props: { typeList: 'posts' }
        },

        {
          name: "order",
          path:  '/go/:typeAction(order|call|recall|chat|links|locations)?',
          component:()=>import(/* webpackChunkName: "order" */  './components/Routes/Order.vue'),
          props: true

        },

        {
          name: "objectPage",
          path:  '/:objectId',
          component: Pages,
          props: true,
          meta: {name: 'page'}
        },


      );
    }

    routes.push(
      {
         path: "*",
         name: 'PageError',
         component: { functional: true, render(h){ return h('RouteError', {props: {status:404, fromRoute: true}})} } ,
         meta:{},
      }
    );


    return routes;

}
