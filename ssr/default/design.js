
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
     "StDrawer":{
       "name":"StDrawer",
       "props":{},
       "class":[],
       "children":[
         {
           "name":"StDrawerToolbar",
           "props":{},
           "class":[]
         },
         {
           "name":"StVerMenu",
           "props":{},
           "class":[]
         }
       ]
     },
     "StToolbar":{
       "name":"StToolbar",
       "props":{"dark":true},
       "class":["primary"],
       "children":[
         {
           "name":"StDrawerToogle",
           "props":{},
           "class":[]
         },
         {
           "name":"StLogo",
           "props":{"color":"primary lighten-5"},
           "class":['hidden-sm-and-down']
         },
         {
           "name":"StTitle",
           "props":{},
           "class":["mr-5","display-1"]
         },
         {
           "name":"StSpacer",
           "props":{},
           "class":[]
         },
         {
           "name":"StHorMenu",
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
     "StContent":{
       "name":"StContent",
       "props":{},
       "class":[]
     },

     /*"StActionsList": {
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
  /*   "StAction":{
       "name":"StAction",
       "props":{},
       "class":[]
     }*/

   }
