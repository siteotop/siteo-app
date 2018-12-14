

export default function (parent) {
  return {
    api: {url: '/posts',  parent: parent},
    state () {
        return {
          _id: '',
          title: '',
          price: '',
          preview: '',
          internal_uri: '',
          picture: ''

      }
    }
  }

};
