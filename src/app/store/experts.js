export default function (parent) {
  return {
    api: {url: '/experts',  parent: parent },
    state () {
        return  {
           _id: '',
           name: '',
           position: '',
           picture: '',
           about: '',
         }
    }
  }

};
