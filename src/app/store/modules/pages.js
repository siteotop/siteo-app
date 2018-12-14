export default function (parent) {
  return {
    api: {url: '/pages',  parent: parent},
    state () {
        return {
          _id: '',
          title: '',
          description: '',
          meta_title: '',
          meta_description: '',
          meta_canonical: '',
          meta_og_title: '',
          meta_robots: '',
          url: '',
          contentStructure: []
      }
    }
  }

} ;
