
/**
  Left Menu for websites like in app
*/
//import {ExtendAppStructure, createSettings} from './extends';

export default {
  functional :true,
  render (h, context) {
    return h('v-content', [
       //h('transition', {props: {name:''}}, [
       h('router-view', {
            directives: [
                {name: 'show', value: !context.parent.$store.state.pageLoader}
            ]
        }),


       context.parent.$store.state.pageLoader? h('v-container', {attrs: {fluid: '', 'fill-height': ''}}, [
         h('v-responsive', {props: {maxWidth: '300px'  }, class: 'mx-auto' }, [
                 //h('AppPulseLoader', {props: {loading: context.parent.$store.state.pageLoader, size: '40px'}})
                 h('span', {class:'text-center subtitle-1 grey--text lighten-4'} ,['loading route...']),
                 h('v-progress-linear', {props: {indeterminate:true, height:6, rounded:true, striped: true }})
         ])

       ] ): '',




    ]);

  }
}
