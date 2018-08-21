//import en from 'vee-validate/dist/locale/en';
//import uk from 'vee-validate/dist/locale/uk';
//export const veeValidate = uk;
export {default as global}  from './global';


export const routes = {

  'AAuthSignin':'Sign In',
  'AAuthSignup':'Sign Up',
  'AAuthForgot':'Restore password',
  'AProfileDashboard': 'Профайл',
  'ASettingsProfile' : 'Профиль',
  'ASettingsLocation' : 'Местоположение',
  'AProfileServices': 'Сервисы',
  'AProfileBookmarks': 'Закладки',
  'AProfileOrders': 'Заказы',
  'AProfileFeedback': 'Обратная связь',
  'AAfilliate': 'Партнерская программа',

  'business': 'Бизнес-аккаунт',

  'AProfileBilling': 'Билинг',
  'AProfileNotifications': 'Уведомления' ,
  'ASettings': 'Настройки' ,
  'ASettingsEmail': 'Email' ,
  'ASettingsMobilePhone': 'Мобильный телефон' ,
  'ASettingsPassword': 'Пароль' ,
  'ASettingsNetworks': 'Аккаунты' ,
  'ASettingsVerify': 'Верификация' ,


}



export const AAuthForgot = {
   title : 'Restore your password',
   content: {
     userEmail: {l:'Your e-mail', d:'Your email address which you used for registration'},
     submit: {l:'Send link'},
   },
   success: {
     submit:  'На ваш почтовый ящик было отправлено електронное сообщение  з сылкой для создания нового пароля'
   }


}
export const AAuthSignin = {
    title: "Sign In",
    description: "Here you can sign in",
    content: {
      userEmail:  {l:"E-mail" , d: "Type your e-mail, который вы используете для входа на Siteo"  },
      password:  {l:"Пароль" , d: "Enter your password, который вы используете для входа на Siteo"  },
      statesystem: {l:"Leave me in sytem" },
      submit: {l: "Enter" },
      //footer:
    },
    footer: {text: 'Если вы забыли пароль, его можна востановыть по ссылке', action:{to:'/auth/forgot/', text:AAuthForgot.title}},
    success: {
      submit: "Успешно вошли в систему"
    }
}

export const AAuthSignup = {
    title:'Sign Up',

    content: {
      countryAlpha2: {l:'Страна', d:"Укажите страну, в которой проживаете"},
      userEmail: AAuthSignin.content.userEmail,
      name: {l:'Your name' , d: 'Enter your name'  },
      lastname: {l:'Your Lastname', d:'Enter your Lastname' },
      password: {l:'Придумайте пароль', template: 'Придумайте сложный пароль. Сложный пароль должен cодержать: <ul><li> не менше <strong><%= validate.min %> символов</strong>;</li> <li> как минимум <strong>одну цифру - <%= strong.digit %></strong>;</li> <li> как минимум <strong>одну  маленькую букву -<%= strong.alpha %> </strong>;</li> <li>как минимум  <strong>  одну большую букву - <%= strong.upper %> </strong>;</li> <li> как минимум <strong>один из  специальных символов - <%= strong.spec %></strong>;</li></ul><br>' },
      accord: {l: '', d: '' },
      submit: {l:'Sign Up'  }
    },
    success: {
      submit: 'Вы успешно зарегистрировались на сайте'
    }
}

export const ASettingsSendActivation = {
     title : 'Запрос активации e-mail',
     content: {
       userEmail: {l:'Ваш e-mail', d:'Укажите ваш реальный email, который вы будете использовать для входа' },
       submit: {l:'Send'  }
     },

     errors: {
       WasActivatedEarly: "Ваш Емейл успешно был активирован ранее",
     },
     success: {
       submit: 'На ваш e-mail отправлена сылка для активации'
     }
  }
export const AAuthActivation = {
  title: 'Активация аккаунта',

  errors: {

    hashActivationCodeIsBad:{ text: "Ссылка для активации устарела или неправильная", action: {to:'/me/settings/activation/', text: 'Запросить новую ссылку'}},
    successActivationLogin: { text: 'Ваш Емейл успешно активирован.', action: {to: '/auth/signin/', text:'войти в систему'}}
  },

}
//activation.userEmail = activation.userEmail;

export var AAuthChangepassword = {

    title : 'Set new password',
    content: {
      currentpassword: {l:'Текущий пароль' , d: 'Введите ваш текущий пароль для входа' },
      password: {l:'New password', d: AAuthSignup.content.password.d },
      passwordrepeat: {l:'Repeat new  password', d: 'This field must be same as field above' },
      submit: {l:'Изменить'  },
    },
    errors: {
      hashActivationCodeIsBad:{ text: "Ссылка для смены пароля устарела или неправильная", action: {to:'/auth/forgot/', text: 'Запросить новую ссылку'}}
    },
    success: {
      submit: {text:  'Ваш пароль был успешно изменен. Теперь можете войти в систему', action: {to: '/auth/signin/', text:'Войти в систему' } }
    }
}



export const ASettingsProfile = {
    title: "Данные профиля",
    description: "Заполните основные поля для своего профиля",
    content: {
      name: AAuthSignup.content.name,
      lastname: AAuthSignup.content.lastname,
      gender: {l: 'Пол', d:'Укажите пол', options: {
        'm':'Men',
        'f':'Women' ,
        '':'--' ,
      } },
      birthday: {l:'Birthday', template:'Enter your birthday  in format <strong> <%= format %></strong>. Где, DD - день, MM - месяц, YYYY - год.  For example, <%= example %>'},
      submit: {l: 'Сохранить'},

    },
    success: {
      submit: 'Информация о профиле успешно изменена'
    }


}

export var ASettingsNetworks= {
    title: 'Связанные аккаунты',
    description: "Свяжите свой аккаунт на Siteo чтобы, легко входить, через сторонние сервисы",
    content: {
      _ac: {
        online: 'Открыть аккаунт',
        connect: 'Подключить'
      }
    }
}

export var AProfileNotifications= {
    title: 'Уведомления',
  //  description: "Свяжите свой аккаунт на Siteo чтобы, легко входить, через сторонние сервисы",
    content: {
      _ac: {
        'open': 'Перейти'
      },
      nolist: 'Новых уведомлений нет',
      notify: {
        'WebsitesAdminscreate': {l: ': новая роль' , d: 'Приглашение администрировать сайт' },
        'WebsitesAdminsdelete': {l: ': роль удалена' , d: 'Вас удалили из списка администраторов сайта ' },
        'UsersWebsitespatch': {l: ': принял заявку' , d: 'Пользователь принял администрирование  сайта' },
        'UsersWebsitesdelete': {l: ': отклонил заявку' , d: 'Пользователь отклонил запрос на администрирование сайта' }
      }
    }
}


export var ASettingsEmail = {
    title: 'Установка Email для входа',
    description: "Here you can sign in",
    content: {
      currentValue: {l: 'Текущий емейл'},
      userEmail: {l: 'Новый Email', d:  'Введите ваш новый емейл' },
      password: AAuthSignin.content.password,
      submit: {l: 'Сменить пароль'}
    },

    errors: {
      NoPass: {text: 'У вас не настроен пароль. Для правильной работы этой формы нужно настроить пароль', action: {to:'/me/settings/sendpassword', text:"Настроить пароль"}}
    },
    success: {
      submit: 'Пароль успешно изменен'
    }

}

export var ASettingsMobilePhone= {
    title: 'Установка мобыльного телефона',
    description: "Here you can sign in",
    content: {
      currentValue: {l: 'Текущий мобильный телефон'},

      mobilePhone:  {l: 'Новый мобильный', d:  'Введите свой мобильный телефон, на который есть возможность получить СМС. Телефон должен быть в формате: <strong>код страны</strong> + <strong>код оператора</strong> + <strong>номер телефона</strong>' },
    //  newMobilePhone: {l: 'Ваш мобильный', d:   },
      password: AAuthSignin.content.password,
      submit: {l: 'Сменить телефон'}
  },
  errors: ASettingsEmail.errors,
  success: {
    submit: 'Мобильный успешно изменен'
  }
}

//ASettingsMobilePhone.newMobilePhone = ASettingsMobilePhone.mobilePhone

export const ASettingsLocation = {
  title : 'Укажите местоположение',
  content: {
    countryAlpha2: {l:'Страна' , d:'Выберите страну в которой вы находитесь' },
    submit : {l:'Сохранить'}
  },

  success: {
    submit: 'Информация успешно изменена'
  }
}

export var ASettingsPassword =  AAuthChangepassword;


export var ASettingsSendPassword = {
  'title' : 'Установить пароль',
   description: 'На ваш електронный ящик, который указан в поле ниже,  будет отправлено письмо з ссылкой для установки пароля. ',
   content: {
     userEmail: AAuthSignin.content.userEmail,
     submit: AAuthForgot.content.submit,
   },

   success: AAuthForgot.success

}

export const AAuthLogout = {
    title:'Выход з системы',
    description: 'Процес выхода з системы сайтео',
    content: {
      bye: 'До свидания! ',
      thanks: 'Спасибо, что используете сайтео.',
      tm: 'На главною'
    }


}

export const AFormCreateWebsite = {
    title: 'Создайте вебсайт',
    description: 'Ваш сайт начинается с адреса ',
    content: {
      countryAlpha2: {l: 'Страна', d: 'Выберите страну, где проживает основная аудитория будущего  сайта/сервиса'},
      lang: {l: 'Основной язык сайта', d: 'Выберите основной язык сайта'},
      id: {l: 'Siteo-ID', d: 'Придумайте брендовый id для своего сайта'},
      name: {l: 'Название', d: 'Название для вашего сайта'},
      submit: {l:'Создать сайт'}
    },

    success: {
      submit: 'Ваш сайт успешно создан'
    }

};
