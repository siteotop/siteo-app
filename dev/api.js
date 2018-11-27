
var _APP_INSTANCE = {

  configs: {
     "host":"siteo.top",
     "path":"\/",
     "lang":"en",
     "state":"reserved",
     public_token: 'public_token_is_no_user_token_for_access_api_siteo',
     api_url: 'https://api.siteo.top/api/v1/',
     recaptcha: '6LdRBCAUAAAAAD1G95xZfHvPD_-3VLijXfa-48Xm',
  },

   data:{
     _id:152710249031417,
     pid:"7rL5Q4LRdk",
     name:"Site Name",
     title:"Title Website",
     slogan:"Slogan of Website",
     actionText:"Call to action",
     description:"Description for Website or Project. This text using in footer or in some lists. It is not longer. Shortly message for customer about your business.",
     domain:"",
     templates_id:"1532775890",
     pages_id: '1532775891',
     countryAlpha2:"UA",
     lang:"uk",
     design:false
   },

 links: [
   {
     title: 'We in Facebook',
     type: 'fb',
     href: 'https://www.facebook.com/vavilon1'
   },


   {
     title: '',
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
      title: '',
      call: true,
      chat: true,
      confirm: true,
      human: true,

    },

    {
      url_id: 'dmytro.diachuck',
      type: 'skype',
      title: '',
      call: true,
      chat: true,
      confirm: true,
      human: true,

    },
    {
      url_id: '380939979490',
      type: 'viber',
      title: '',
      call: true,
      chat: true,
      confirm: true,
      human: true,

    },
    {
      url_id: '380939979490',
      type: 'whatsapp',
      title: '',
      call: true,
      chat: true,
      confirm: true,
      human: true,

    },
    {
      url_id: 'nickname',
      type: 'telegram',
      title: '',
      call: false,
      chat: true,
      confirm: true,
      human: true,

    },

    {
      url_id: 'nickname',
      type: 'messenger',
      title: '',
      call: true,
      chat: true,
      confirm: true,
      human: true,

    },

    {
      url_id: 'vavilon2@gmail.com',
      type: 'email',
      title: 'Написать',
      call: false,
      chat: true,
      confirm: true,
      human: true,

    },

 ],


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
       "props":{absolute:true,  inset:true, dark:true, color: 'secondary'},
       "class":[],
       "children": [
         {
           $$: 'SectionWrap',
           _props: {
             $bf: '',
             //$bl:'text-xs-center',
             $bls: [
               {
                 $$:'AutoContacts',
                 $bf: 'xs12 md4',
                 _props: {
                   $clp:{
                     fab:true, outline: true, color: 'primary'
                   }
                 }
               },

               {
                 $$: 'BTitle',
                  $bf: 'xs12 md8',
                 _props: {
                   _d: 'Text Footer Text Footer Text Footer Text Footer Text Footer Text Footer Text Footer Text Footer Text Footer Text Footer Text Footer Text Footer Text Footer Text Footer Text Footer Text Footer '
                 }
               }
             ]

           }
         }
       ]
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
       children: ['services', 'name', 'lastname', 'email', 'phone',  'dateorder'
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
        _id: '1223124',
        title: 'Service Title number 1',
        subtitle: 'Subtitle For service position',
        preview: ' All about service,  All about service,All about service,All about service,All about service,All about service,All abce,',
        price: '1323.4',
        internal_url:'/',
        picture: 'https://picsum.photos/510/300?random'
      },

      {
        _id: '1233126',
        title: 'Service sdfasfd asdf Title number 1',
        subtitle: 'Subtitl position',
        preview: ' All about service,  All about service,All about service,All about service,All about service,All about service,All abce, asdf asdf sadf',
        price: '123',
        internal_url:'/',
        picture: 'https://picsum.photos/510/300?random'
      },

      {
        _id: '124315663',
        title: 'Service sdfasfd asdf Title number 1',
        subtitle: 'Subtitl position',
        preview: ' All about service,  All about service,All about service,All aas asdf asdf asdf sadasdf asfd asfdbout service,All about service,All about service,All abce, asdf asdf sadf',
        price: '13.4',
        internal_url:'/',
        picture: 'https://picsum.photos/510/300?random'
      },


    ]
 },

 experts: {
   items: [
     {
       _id: '1223123',
       name: 'First Men',
       position: 'Seo and Founder',
       picture: 'https://thumbs.dreamstime.com/z/profile-icon-male-avatar-portrait-casual-person-silhouette-face-flat-design-vector-46846328.jpg',
       about: 'HE is sljfh lkajshdflkasdfjh ask;hf;aslfj;lasjfdk;hask;fjdh kasjhfd kjhaskfj hkjashfk hasfkdhaklsdhf kjashdf kjlhasklfdhlkjashf kjhaskljfh lkash fkhsakjlfh klashfkljashfklhaskfhsalk',
     },

     {
       _id: '1223123',
       name: 'First Men',
       position: 'Seo and Founder',
       picture: 'https://thumbs.dreamstime.com/z/profile-icon-male-avatar-portrait-casual-person-silhouette-face-flat-design-vector-46846328.jpg',
       about: 'HE is sljfh lkajshdflkasdfjh ask;hf;aslfj;lasjfdk;hask;fjdh kasjhfd kjhaskfj hkjashfk hasfkdhaklsdhf kjashdf kjlhasklfdhlkjashf kjhaskljfh lkash fkhsakjlfh klashfkljashfklhaskfhsalk',
     },

     {
       _id: '1223123',
       name: 'First Men',
       position: 'Seo and Founder',
       picture: 'https://thumbs.dreamstime.com/z/profile-icon-male-avatar-portrait-casual-person-silhouette-face-flat-design-vector-46846328.jpg',
       about: 'HE is sljfh lkajshdflkasdfjh ask;hf;aslfj;lasjfdk;hask;fjdh kasjhfd kjhaskfj hkjashfk hasfkdhaklsdhf kjashdf kjlhasklfdhlkjashf kjhaskljfh lkash fkhsakjlfh klashfkljashfklhaskfhsalk',
     },

     {
       _id: '1223123',
       name: 'First Men',
       position: 'Seo and Founder',
       picture: 'https://thumbs.dreamstime.com/z/profile-icon-male-avatar-portrait-casual-person-silhouette-face-flat-design-vector-46846328.jpg',
       about: 'HE is sljfh lkajshdflkasdfjh ask;hf;aslfj;lasjfdk;hask;fjdh kasjhfd kjhaskfj hkjashfk hasfkdhaklsdhf kjashdf kjlhasklfdhlkjashf kjhaskljfh lkash fkhsakjlfh klashfkljashfklhaskfhsalk',
     },

     {
       _id: '1223123',
       name: 'First Men',
       position: 'Seo and Founder',
       picture: 'https://thumbs.dreamstime.com/z/profile-icon-male-avatar-portrait-casual-person-silhouette-face-flat-design-vector-46846328.jpg',
       about: 'HE is sljfh lkajshdflkasdfjh ask;hf;aslfj;lasjfdk;hask;fjdh kasjhfd kjhaskfj hkjashfk hasfkdhaklsdhf kjashdf kjlhasklfdhlkjashf kjhaskljfh lkash fkhsakjlfh klashfkljashfklhaskfhsalk',
     },

     {
       _id: '1223123',
       name: 'First Men',
       position: 'Seo and Founder',
       picture: 'https://thumbs.dreamstime.com/z/profile-icon-male-avatar-portrait-casual-person-silhouette-face-flat-design-vector-46846328.jpg',
       about: 'HE is sljfh lkajshdflkasdfjh ask;hf;aslfj;lasjfdk;hask;fjdh kasjhfd kjhaskfj hkjashfk hasfkdhaklsdhf kjashdf kjlhasklfdhlkjashf kjhaskljfh lkash fkhsakjlfh klashfkljashfklhaskfhsalk',
     }
   ]
 },

 locations: [
   {
     _id: '',
     title: 'Main Oficce',
     country_id: 'ua',
     city_id: 'kyiv',
     city: 'Kiev',
     street: 'Оболонська набережна',
     street_n: '12б',
     zipcode: '23409',
     description: 'lsdhg lsdkghkl dsjhfgk jhsdlghskdhg kdhglksd',
     timework: {},
     google_b: '',
     lat: '50.609996',
     lng: '26.261811'
   },

   {
     _id: '',
     title: 'Main Oficce',
     country_id: 'ua',
     city_id: 'kyiv',
     city: 'Kiev',
     street: 'Оболонська набережна',
     street_n: '12б',
     zipcode: '23409',
     description: 'lsdhg lsdkghkl dsjhfgk jhsdlghskdhg kdhglksd',
     timework: {},
     google_b: '',
     lat: '50.609996',
     lng: '26.261811'
    }
 ],

 posts: {
   items: [
      {
        _id: '',
        title: "First Post ",
        picture: 'https://picsum.photos/510/300?random',
        preview: 'lsdhg lsdkghkl dsjhfgk jhsdlghskdhg kdhglksdlsdhg lsdkghkl dsjhfgk jhsdlghskdhg kdhglksdlsdhg lsdkghkl dsjhfgk jhsdlghskdhg kdhglksdlsdhg lsdkghkl dsjhfgk jhsdlghskdhg kdhglksd',
        url:'/post-id-temporary'
      },
      {
        _id: '',
        title: "First Post ",
        picture: 'https://picsum.photos/510/300?random',
        preview: 'lsdhg lsddsjhfgk jhsdlghskdhg kdhglksdlsdhg lsdkghkl dsjhfgk jhsdlghskdhg kdhglksd',
        url:'/post-id-temporary-5'
      },
      {
        _id: '',
        title: "First Post ",
        picture: 'https://picsum.photos/510/300?random',
        preview: 'lsdkghkl dsjhfgk jhsdlghskdhg kdhglksdlsdhg lsdkghkl dsjhfgk jhsdlghskdhg kdhglksd',
        url:'/post-id-temporary-4'
      },
      {
        _id: '',
        title: "First Post ",
        picture: 'https://picsum.photos/510/300?random',
        preview: 'lsdhg lsdkghkl dsjhfgk jhsdlghskdhg kdhglksdlsdhg lsdkghkl dsjhfgk jhsdlghskdhg kdhglksdlsdhg lsdkghkl dsjhfgk jhsdlghskdhg kdhglksdlsdhg lsdkghkl dsjhfksd',
        url:'/post-id-temporary-2'
      },
      {
        _id: '',
        title: "First Post ",
        picture: 'https://picsum.photos/510/300?random',
        preview: 'lsdhg lsdkghkl dsjhfgk jhsdlghskdhg kdhglksdlsdhg lsdkghkl dsjhfgk jhsdlghskdhg kdhglksdlsdhg lsdkghkl jhsdlghskdhg kdhglksd',
        url:'/post-id-temporary-3'
      },
      {
        _id: '',
        title: "First Post ",
        picture: 'https://picsum.photos/510/300?random',
        preview: 'lsdhg lsdkghkl dsjhfgk jhsdlghskdhg kdhglksdlsl dsjhfgk jhsdlghskdhg kdhglksdlsdhg lsdkghkl dsjhfgk jhsdlghskdhg kdhglksd',
        url:'/post-id-temporary1'
      }
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
     "i":"si-locations",
     "id":"location",
     "path":"\/go/locations",
     "title":"Адресса"
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
     "id":"posts",
     "path":"\/posts",
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
