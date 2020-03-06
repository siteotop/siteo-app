


import AppInstance from '../../core/store/appInstance';
import ProjectCard from './ProjectCard.vue';


const storeProjectCard = function () {
    return   {
      api: {url: AppInstance.api.url, },
      state: AppInstance.state
    }
}


//const name = 'siteo-plugin-project-card';

export default {
//  name: name,

  install: function(Vue) {
     Vue.component(name, ProjectCard);
  },

  liveInstall: function (vueInstance) {

        vueInstance.$store.registerApiModule({
              name:'_projectCard',
              module: storeProjectCard()
           });

  },

  registerComponent: function () {
     return  {
       component: name
     }
  }
}
