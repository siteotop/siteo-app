

export default function (parentGetterUrl) {
  return {
    api: {url: '/posts',  parentGetterUrl: parentGetterUrl},
    state () {
        return {
          title: '',
          price: '',
          preview: '',
          internal_uri: '',
          picture: ''

      }
    }
  }

};
