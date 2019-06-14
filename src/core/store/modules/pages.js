export default function (parentGetterUrl) {
  return {
    api: {url: '/pages',  parentGetterUrl: parentGetterUrl},

    state () {
        return {
          meta_title: '',
          meta_description: '',
          meta_robots: '',
          url: '',
          error: false,
          jsonStructure: ''
      }
    },

    getters: {
      menu(state) {
        if (Array.isArray(state.objectActive.jsonStructure)) {
          var menu = [];
          state.objectActive.jsonStructure.map(function(section, index){
              if (section._a) {
                if (section._a.id&&section._a['data-t']) {
                  menu.push({
                      title: section._n,
                      target: '#'+section._a.id
                   });
                  }
              }
          });
          return menu;
        } else {
          return [];
        }
      }

    }
  }

} ;
