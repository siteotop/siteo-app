


/**
  @return create action  element for position item in  list
*/
 export const HelperMenuListRenderAction = function (h, action, reverse) {

    if (!action.bindBtn) {
        action.bindBtn = {};
    }
    var color;
    action.bindBtn['icon'] = true;
    if (reverse) {
      action.bindBtn['color'] = action.color;
      action.bindBtn['dark'] = true;
      color = false
    } else {
        color = true;
      //class_text[action.color + '--text'] = true;
    }

    return h('v-tooltip',
        {
          props: {
            top:true
          }
        },
        [
          h('v-btn', {
            props: action.bindBtn,
            slot: 'activator',
            class: {
              [action.color + '--text']: color 
            },

            nativeOn: {
              click: action.event
            },

          },
          [
            h('AppIcon',{
                props: {
                  name: action.icon
                }
            })
          ]
      ),
      h('span', [action.title])
     ]

    );
};

export  const HelperMenuListRenderMenu = function (h,  actions){
   //  console.log(idListPosition);
   var self = this;
   return actions.map(function (action) {
       return HelperMenuListRenderAction(h,  action);
   })


};

/**
   one   action for $_MenuDown_renderMenu
*/
const HelperMenuDownRenderAction = function (h,  action) {
  return h('v-list-tile', {
     props: {
        color: action.color
     },
     on: {
       click: function ($event) {
          if (action.event) {
             action.event();
          }
       }
     }
   }, [
    h('v-list-tile-action',  [
        h('AppIcon', {props: {name:action.icon}})
    ]),

    h('v-list-tile-title', [action.title])
   ])
};

export const HelperMenuDownRenderMenu = function (h,  actions){
    var self = this;
  ///  return 'sdfsd';
    return h('v-menu', {props: {left:true}},[
        h('v-btn', {props: {icon:true}, slot:'activator'}, [
          h('AppIcon', {props: {name:'more-vert'}})
        ]),

        h('v-list',
          actions.map(function(action){
              return HelperMenuDownRenderAction(h,   action)
          })
        )
    ]);

};



export const HelperChooiceVariantMenu = function (h,  actions, reverse){
    if (actions.length==1) {
        return HelperMenuListRenderAction(h,  actions[0], reverse);
    } else {
      return HelperMenuDownRenderMenu(h, actions);
    }
};
