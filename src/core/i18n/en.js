//import VeeEn from 'vee-validate/dist/locale/en';

export default {

    copy: 'Копировать',
    cancel: 'Отмена',
    close: 'Закрыть',
    share: 'Share',
    m: 'Content',
    rm: 'Read More',
    no_data: 'Данных для отображения нет',
    copyright:'Website created using "{template}" app and hosted on platform {url}',

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
    routes_values_t: 'Values',
    routes_experts_t: 'People',
    routes_posts_t: 'Blog',

    commonForm: {
      reset: 'Reset Form',
      success: 'Success response form',
      leave: 'Ви желаете прервать заполнение формы?',
      leave_desc: 'Все заполненные данные будут утеряны.',
      send: 'Отправить',
      error: {
         no_valid: 'Ошибки валидации'
      },
      captcha: {l: 'Captcha', d: 'Check the robot'}
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

    error404: 'Sorry, but the page you are looking for was either not found or does not exist. Try refreshing the page or click the button below to go back to the Homepage.',


}
