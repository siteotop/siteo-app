//import VeeEn from 'vee-validate/dist/locale/en';

export default {
  en: {
  //  validation: VeeEn,
    copy: 'Копировать',
    cancel: 'Отмена',
    close: 'Закрыть',
    share: 'Share',
    m: 'Content',
    rm: 'Read More',
    no_data: 'Данных для отображения нет',
    copyright:'Website created on app "{template}" and hosted on platform',

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

    // написать через
    // подзвонить через
    // Перейти на / ми в / {company name}

    commonList: {
      edit: 'Редактировать',
      delete: 'Удалить',
      add: 'Добавить',
      del_check_one: 'Действительно удалить?',
      del_check: 'Удалить выбранные',
      checked: 'Выбрано',
      confirm_title: 'Удаление',
      confirm_desc: 'Ви действительно желаете удалить данные?'
    },

    commonForm: {
      reset: 'Reset Form',
      success: 'Success response form',
      leave: 'Ви желаете прервать заполнение формы?',
      leave_desc: 'Все заполненные данные будут утеряны.'
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

        services: {
          l:"Services" ,
          d: "Tap your Services"
        },

        dateorder: {
          l:"Date" ,
          d: "Tap your Services"
        },
        submit: {
          l: 'Send',
          d: '',
        }
      }
      

    },

    formRecall:  {
      title: 'We recall you',
      description:'We recall you',
      content: {
        services: {
          l: '@:formOrder.content.services.l',
          d: '@:formOrder.content.services.d',
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

    gpsFixed: {
      country_code: 'Country code',
      ip: 'IP adress'
    },

    page404: {

        title:'404',
        description:' Sorry, but the page you are looking for was either not found or does not exist. Try refreshing the page or click the button below to go back to the Homepage.'
      },

     page503: {
          title:'503 Service Unavailable',
          description:' Message'
        }
 }
}
