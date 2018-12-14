


export default function (parent) {
  return {
    api: {url: '/orders',  parent: parent },
    state () {
        return {
          _id: '',
          name: '', // name of customer
          lastname: '', // lastname of customer
          dateorder: '', // date when customer wants get servise or goods
          phone: '', // customer phone
          email: '', // customer email
          services: [], //  services which customer have booking
          daterecall: '', // date when customer wants recall
          typeorder: '' //  queryprice, recall, order,


      }
    }
  }

};
