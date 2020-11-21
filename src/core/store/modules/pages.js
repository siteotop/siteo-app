export default function (parentGetterUrl) {
  return {
    api: {url: '/pages',  parentGetterUrl: parentGetterUrl},

    state () {
        return {
          meta_title: '',
          meta_description: '',
          meta_robots: '',
          url: '',
          jsonStructure: '',
          og_title: '',
          title: '',
          description:'',
          picture: '',
          thumb420: '',
          thumb120: '',
          og_image: '',
          meta_robots: '',
          f: '',
          datePublished:''
      }
    },

  }

} ;
