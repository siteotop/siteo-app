
import helperCreateStDesign from './_helper/createStDesign.js';


export default {
  functional: true,

  render(h, context) {

      var website = context.parent.$store.state.appInstance.objectActive|| {};
      return helperCreateStDesign(
        h, context,
        'StLogo',
        'v-avatar',
        {color: 'primary lighten-2', size: 38},
        {
          click: ()=>{
            context.parent.$router.push({name: 'indexPage'})
          }
        },
        [
           website.src?
             h('img', {attrs: {src: website.src, alt:website.name}}):
             h('span', [website.name[0]])
        ]

      );
    }
}
