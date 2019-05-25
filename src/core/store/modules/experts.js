export default function (parentGetterUrl) {
  return {
    api: { url: '/experts',  parentGetterUrl: parentGetterUrl },
    state () {
        return  {
           name: '',
           position: '',
           picture: '',
           about: '',
         }
    }
  }

};
