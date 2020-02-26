


export default {

  formEmail:  {
    title: 'Subscribe on email',
    description:'Subscribe on email',
    content: {
      name: {
        l: '@:formOrder.content.name.l',
        d: '@:formOrder.content.name.d',
      },

      email: {
        l:"@:formOrder.content.email.l" ,
        d: "@:formOrder.content.email.d"
      },

      submit: {
        l: 'Subscribe',
        d: '',
      }
    }
  },

  formRecall:  {
    title: 'We recall you',
    description:'We recall you',
    content: {
      values: {
        l: '@:formOrder.content.values.l',
        d: '@:formOrder.content.values.d',
      },
      name: {
        l: '@:formOrder.content.name.l',
        d: '@:formOrder.content.name.d',
      },

      phone: {
        l:"@:formOrder.content.phone.l" ,
        d: "@:formOrder.content.phone.d"
      },

      submit: {
        l: 'Recall me',
        d: '',
      }
    }
  },

  formOrder: {
    title: 'Form new ',
    description:'Form new in the order page',
    content: {
      name: {
        l: 'Your name',
        d: 'Description About name',
      },
      lastname: {
        l: 'Your lastname',
        d: '',
      },
      email: {
        l:"Email" ,
        d: "Tap your email"
      },

      phone: {
        l:"Phone" ,
        d: "Tap your phone"
      },

      values: {
        l:"Values" ,
        d: "Tap your Values"
      },

      dateorder: {
        l:"Date" ,
        d: "Tap your Values"
      },
      submit: {
        l: 'Send',
        d: '',
      }
    }


  },

  actions: {
      order: 'Заказать',
      call: 'Позвонить',
      recall: 'Обратный звонок',
      chat: 'Месенджеры',
      links: 'Ссылки',
      locations: 'Адреса'
  },


    auto: {
      call: 'Call by',
      chat: 'Write message by',
      links: '{company_name} in'
    },

}
