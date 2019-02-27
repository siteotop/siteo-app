



export default function (parentGetterUrl) {

  return  {
    api: {url: '/prices', parentGetterUrl: parentGetterUrl},
    state () {
        return {
          _id: '',
          title: '',
          subtitle: '',
          price: '',
          discount: '',
          preview: '',
          readMore: '',
          actionText: '',
          internal_uri: '',
          picture: ''
      }
    }
  }
};
