
module.exports = {
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

     /*"AppFooter":{
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
                 $$:'WiContacts',
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
     */
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
       children: ['values', 'name', 'lastname', 'email', 'phone',  'dateorder'
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

   }
