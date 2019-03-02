import Pages from './components/Pages';
import RouteItems from './components/Items/index.vue';
import RouteOrder from './components/Order.vue';

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

    routes.push(
      {
        name: "values",
        path:  '/',
        component: RouteItems,
        props: { typeList: 'values' }
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
        name: "order",
        path:  '/go/:typeAction(order|call|recall|chat|links|locations)?',
        component: RouteOrder,
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

    routes.push(
      {
         path: "*",
         name: 'PageError',
         component: { functional: true, render(h){ return h('RouteError', {props: {status:404}})} } ,
         meta:{},
      }
    );

    return routes;

}
