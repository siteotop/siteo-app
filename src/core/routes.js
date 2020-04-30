
export default function (configs) {

    var routes = [
        {
          name: "indexPage",
          path:  configs.seo_path_index||'',
          component: ()=>import( /* webpackChunkName: "page" */ './components/Routes/Pages'),
          props: true,
          meta: {name: 'page'}
        }
    ];

    if (!configs.lp) {

        // values
        if ( configs.rvp) {
            routes.push(
              {
                name: "values",
                path:  configs.rvp+':category('+configs.rvc+'[A-Za-z0-9_\-]+)?',
                component:()=>import( /* webpackChunkName: "list" */ './components/Routes/Values/index.vue'),
                props: true,
              });

              routes.push(
                {
                  name: "value",
                  path: configs.rvo+':valueIdUrl([A-Za-z0-9_\-]+)',
                  component:()=>import( /* webpackChunkName: "list" */ './components/Routes/Value/index.vue'),
                  props: true,
                });
          }

        //locations

        if ( configs.rlp) {

            routes.push({
              name: "locations",
              // configs.rlp can be /where or /somethingelse
              path:configs.rlp+':category('+configs.rlc+'[A-Za-z0-9_\-]+?)?:location('+configs.rll+'[A-Za-z0-9_\-]+?)?',
              component: ()=>import( /* webpackChunkName: "locations" */ './components/Routes/Locations/index.vue'),
              props: true,
            },

            {
              name: "location",
              // configs.rlo can b   /p/ or /post-
              path: configs.rlo+':locationIdUrl([A-Za-z0-9_\-]+)',
              component: ()=>import( /* webpackChunkName: "Location" */ './components/Routes/Location/index.vue'),
              props: true,
            }
           )
        }

        routes.push(

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
