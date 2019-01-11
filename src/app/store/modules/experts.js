export default function (parentGetterUrl) {
  return {
    api: {url: '/experts',  parentGetterUrl: parentGetterUrl },
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
