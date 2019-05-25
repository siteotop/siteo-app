export default function (parentGetterUrl) {
  return {
    api: {url: '/pages',  parentGetterUrl: parentGetterUrl},
    state () {
        return {
          title: '',
          description: '',
          meta_title: '',
          meta_description: '',
          meta_canonical: '',
          meta_og_title: '',
          meta_robots: '',
          url: '',
          error: false,
          jsonStructure: ''
      }
    }
  }

} ;
