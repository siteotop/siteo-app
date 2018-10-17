var _APP_DOMAIN ={

   "active":{
     "host":"siteo.top",
     "path":"\/",
     "lang":"en",
     "state":"reserved"
     }
   };


var _APP_INSTANCE = {
 data:{
   _id:152710249031417,
   pid:"7rL5Q4LRdk",
   name:"Site Name",
   title:"Title Website",
   slogan:"Slogan of Website",
   actionText:"Action Text",
   description:"Short description ",
   domain:"",
   templates_id:"1532775890",
   pages_id: '1532775891',
   countryAlpha2:"UA",
   lang:"uk",
   design:false
 },

 links: [
   {
     title: 'Facebook',
     type: 'fb',
     href: 'https://www.facebook.com/vavilon1'
   },


   {
     title: 'Instagram',
     type: 'instagram',
     href: 'https://instagram.com/'
   },

   {
     title: 'Youtube',
     type: 'youtube',
     href: 'https://www.youtube.com/'
   },

   {
     title: 'Vkontakte',
     type: 'vk',
     href: 'https://vk.com'
   },

   {
     title: 'Website',
     type: 'website',
     href: 'https://siteo.com'
   },

   {
     title: 'Pinterest ',
     type: 'pinterest',
     href: 'https://pnterest.com'
   },

   {
     title: 'Twitter',
     type: 'twitter',
     href: 'https://twitter.com'
   },
   {
     title: 'Tumblr',
     type: 'tumblr',
     href: 'https://tumblr.com'
   },

   {
     title: 'Linkedin',
     type: 'linkedin',
     href: 'https://linkedin.com/'
   },
   {
     title: 'Reddit',
     type: 'reddit',
     href: 'https://reddit.com'
   },



   {
     title: ' Other Link',
     type: 'links',
     url_id: 'https://some-url.com'
   },


 ],
 contacts: [

    {
      url_id: '380939979490',
      type: 'phone',
      call: true,
      chat: true,
      confirm: true,
      human: true,

    },

    {
      url_id: 'dmytro.diachuck',
      type: 'skype',
      call: true,
      chat: true,
      confirm: true,
      human: true,

    },
    {
      url_id: '380939979490',
      type: 'viber',
      call: true,
      chat: true,
      confirm: true,
      human: true,

    },
    {
      url_id: '380939979490',
      type: 'whatsapp',
      call: true,
      chat: true,
      confirm: true,
      human: true,

    },
    {
      url_id: 'nickname',
      type: 'telegram',
      call: false,
      chat: true,
      confirm: true,
      human: true,

    },

    {
      url_id: 'nickname',
      type: 'messenger',
      call: true,
      chat: true,
      confirm: true,
      human: true,

    },

    {
      url_id: 'vavilon2@gmail.com',
      type: 'email',
      call: false,
      chat: true,
      confirm: true,
      human: true,

    },

 ],



 configs: {
    recaptcha: '6LdRBCAUAAAAAD1G95xZfHvPD_-3VLijXfa-48Xm',

 },

 "design":{
   "theme":{
     "name":"theme",
     "colors":{
       "primary":"#64b5f6",
       "secondary":"#424242",
       "accent":"#AEEA00",
       "error":"#FF5252",
       "warning":"#FFC107",
       "info":"#2196F3",
       "success":"#4CAF50"}
     },
     "AppDrawer":{
       "name":"AppDrawer",
       "props":{},
       "class":[],
       "children":[
         {
           "name":"AppDrawerHeader",
           "props":{},
           "class":[]
         },
         {
           "name":"AppDrawerMenu",
           "props":{},
           "class":[]
         }
       ]
     },
     "AppToolbar":{
       "name":"AppToolbar",
       "props":{"dark":true},
       "class":["primary"],
       "children":[
         {
           "name":"AppToolbarSideIcon",
           "props":{},
           "class":[]
         },
         {
           "name":"AppToolbarLogoIcon",
           "props":{"color":"primary lighten-5"},
           "class":['hidden-sm-and-down']
         },
         {
           "name":"AppToolbarTitle",
           "props":{},
           "class":["mr-5","display-1"]
         },
         {
           "name":"VSpacer",
           "props":{},
           "class":[]
         },
         {
           "name":"AppToolbarItems",
           "props":{},
           "class":['hidden-sm-and-down']
         },
         {
           "name":"AppToolbarAction",
           "props":{},
           "class":[]
         }
       ]
     },
     "AppFooter":{
       "name":"AppFooter",
       "props":{absolute: true},
       "class":[]
     },
     "AppContent":{
       "name":"AppContent",
       "props":{},
       "class":[]
     },

     /*"AppActionsList": {
        props: { block: []},
        children: [
          {
            name: 'AppAOrder'
          },
          {
            name: 'AppACall'
          },
          {
            name: 'AppAReCall'
          },
          {
            name: 'AppAText'
          }
        ]

     },*/

     "AppFormOrder": {
       props: {typeInput:''},
       children: [ 'name', 'lastname', 'email', 'phone', 'services', 'dateorder'
        /**
          was before create fieldsMap
         {
           name: 'AppFieldName',
           props: {
              name: 'name',
           }
         },
         */

       ]
     }
  /*   "AppAction":{
       "name":"AppAction",
       "props":{},
       "class":[]
     }*/

   },

 "services" : {

    items: [
      {
        _id: '1213123',
        title: 'Service Title number 1',
        subtitle: 'Subtitle For service position',
        preview: ' All about service,  All about service,All about service,All about service,All about service,All about service,All about service,All about service,All about service,All about service,All about service,All about service,All about service,All about service,All about service,All about service,',
        price: '123.4',
        internal_url:'/',
        picture: 'https://picsum.photos/510/300?random'
      },

      {
        _id: '1223123',
        title: 'Service Title number 1',
        subtitle: 'Subtitle For service position',
        preview: ' All about service,  All about service,All about service,All about service,All about service,All about service,All abce,',
        price: '1323.4',
        internal_url:'/',
        picture: 'https://picsum.photos/510/300?random'
      },

      {
        _id: '1233123',
        title: 'Service sdfasfd asdf Title number 1',
        subtitle: 'Subtitl position',
        preview: ' All about service,  All about service,All about service,All about service,All about service,All about service,All abce, asdf asdf sadf',
        price: '123',
        internal_url:'/',
        picture: 'https://picsum.photos/510/300?random'
      },

      {
        _id: '1243123',
        title: 'Service sdfasfd asdf Title number 1',
        subtitle: 'Subtitl position',
        preview: ' All about service,  All about service,All about service,All aas asdf asdf asdf sadasdf asfd asfdbout service,All about service,All about service,All abce, asdf asdf sadf',
        price: '13.4',
        internal_url:'/',
        picture: 'https://picsum.photos/510/300?random'
      },


    ]
 },

 "menu":[
   {
     "i":"si-home",
     "id":"main",
     "path":"\/",
     "title":"\u0413\u043e\u043b\u043e\u0432\u043d\u0430"
   },


   {
     "i":"si-services",
     "id":"services",
     "path":"\/services",
     "title":"Услуги"
   },
   {
     "i":"si-places",
     "id":"location",
     "path":"\/places",
     "title":"Places"
   },
   {
     "i":"si-experts",
     "id":"experts",
     "path":"\/experts",
     "title":"Experts"
   },
   {
     "i":"si-events",
     "id":"events",
     "path":"\/events",
     "title":"Events"
   },
   {
     "i":"si-blog",
     "id":"blog",
     "path":"\/kdshfksd-sdfssd-sdfj-p23423432",
     "title":"Blog"
   },
   {
     "i":"si-qa",
     "id":"qa",
     "path":"\/kdshfksd-sdfsd-sdfj-p23423431",
     "title":"Q/A"
   },

   {
     "i":"si-settings",
     "id":"admin",
     "path":"\/admin",
     "title":"Admin"
   }
  ]
 };
