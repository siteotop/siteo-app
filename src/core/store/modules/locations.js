

export default function (parentGetterUrl) {

  return  {
    api: {url: '/locations', parentGetterUrl: parentGetterUrl},
    state () {
        return {
          idUrl:'',
          title:'',
          region : '',
          city : '',
          street : '',
          zipcode : '',
          timework : '',
          lat : '',
          lng : '',
          preview: '',
          gbsess: '',
          picture: '',
          phone: '',
          videolink: '',
          pricelink: '',
          website: '',
          thumb420: '',
          thumb120: '',

      }
    }
  }
};
