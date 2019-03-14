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

    if (!configs.lp) {
      routes.push(
        {
          name: "values",
          path: '/' + (configs.seo_path_values?  configs.seo_path_values: 'values'),
          component: RouteItems,
          props: { typeList: 'values' }
        },
        {
          name: "experts",
          path:  '/' + (configs.seo_path_experts?  configs.seo_path_experts: 'experts') ,
          component: RouteItems,
          props: { typeList: 'experts' }
        },

        {
          name: "posts",
          path:  '/' + (configs.seo_path_posts?  configs.seo_path_posts: 'posts'),
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
          path: '/admin',
          name: 'admin',
          component: {
            mounted(){ console.log('mounted admin');
              var self = this;
              function listener(event) {
                console.log(event);
                if (event.origin != 'https://account.siteo-dev.com') {
                  // что-то прислали с неизвестного домена - проигнорируем..
                  return;
                }

                //alert( "получено: " + event.data );

                var recieved =  JSON.parse(event.data);
                if (recieved.type && recieved.name ) {
                  self.$store[recieved.type](recieved.name, recieved.data);
                }

              }

              if (window.addEventListener) {
              window.addEventListener("message", listener);
              } else {
              // IE8
              window.attachEvent("onmessage", listener);
              }

            },

            render(h){ return h('div'); } }
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
         component: { functional: true, render(h){ return h('RouteError', {props: {status:404}})} } ,
         meta:{},
      }
    );

    return routes;

}
