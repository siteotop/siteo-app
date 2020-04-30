

export default function (parentGetterUrl) {

  return  {
    api: {url: '/values', parentGetterUrl: parentGetterUrl},
    state () {
        return {
          title: '',
          idUrl: '',
          count: '',
          subtitle: '',
          price: '',
          discount: '',
          preview: '',
          readMore: '',
          actionText: '',
          internal_uri: '',
          picture: '',
          thumb420: '',
          thumb120: '',
      }
    }
  }
};
