



export default function (parent) {

  return  {
    api: {url: '/services', parent: parent},
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
