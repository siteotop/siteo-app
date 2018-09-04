import VeeEn from 'vee-validate/dist/locale/en';

export  default {
  en: {
    validation: VeeEn,
    cancel: 'Отмена',
    no_data: 'Данных для отображения нет',


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
      success: 'Success response form',
      leave: 'Ви желаете прервать заполнение формы?',
      leave_desc: 'Все заполненные данные будут утеряны.'
    },

    formOrder: {
      title: 'Form new ',
      description:'Form new in the order page',
      content: {
        password: {
          l:"Пароль" ,
          d: "Enter your password, который вы используете для входа на Siteo"
        }
      },
      footer: {text:'Footer Order' }

    },

    gpsFixed: {
      country_code: 'Country code',
      ip: 'IP adress'
    },

    page404: {

        title:'404 Not found',
        description:' Sorry, but the page you are looking for was either not found or does not exist. Try refreshing the page or click the button below to go back to the Homepage.'
      },

     page503: {
          title:'503 Service Unavailable',
          description:' Message'
        }
 }
}
