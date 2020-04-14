
export default function (configs) {

    var routes = [
        {
          name: "indexPage",
          path:  configs.seo_path_index||'',
          component: ()=>import( /* webpackChunkName: "page" */ './components/Routes/Pages'),
          props: true,
          meta: {name: 'page'}
        },
    ];

    if (!configs.lp) {
      routes.push(
        {
          name: "values",
          path: configs.seo_path_values|| '/values',
          component:()=>import( /* webpackChunkName: "list" */ './components/Routes/Items/index.vue'),
          props: true,
        },
        {
          name: "experts",
          path:  configs.seo_path_experts || '/experts',
          component:()=>import( /* webpackChunkName: "list" */ './components/Routes/Items/index.vue'),
          props: true,
        },

        {
          name: "posts",
          path:  configs.seo_path_posts || '/posts',
          component: ()=>import( /* webpackChunkName: "list" */ './components/Routes/Items/index.vue'),
          props: true,
        },

        {
          name: "locations",
          path:  configs.seo_path_locations|| '/locations',
          component: ()=>import( /* webpackChunkName: "locations" */ './components/Routes/Locations/index.vue'),
          props: true,
        },

        {
          name: "location",
          path: '/p/:locationIdUrl-n:locationId',
          component: ()=>import( /* webpackChunkName: "Location" */ './components/Routes/Location/index.vue'),
          props: true,
        },

       /*  {
          name: "order",
          path:  '/go/:typeAction(order|call|recall|chat|links)?',
          component:()=>import(  './components/Routes/Order.vue'),
          props: true

        },
        */
        {
          name: "objectPage",
          path:  '/:objectId',
          component: ()=>import( /* webpackChunkName: "page" */ './components/Routes/Pages'),
          props: true,
          meta: {name: 'page'}
        },


      );
    }

    routes.push(
      {
         path: "*",
         name: 'PageError',
         component:  ()=>import( /* webpackChunkName: "page-error" */ './components/Routes/Error.vue'),
         props: {status:404, fromRoute: true},
         meta:{},
      }
    );


    return routes;

}
