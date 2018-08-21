

export const signin = {
    title: "Sign In",
    description: "Here you can sign in",
    content: {
      userEmail:  {l:"Your e-mail" , d: "Type your e-mail, который вы используете для входа на Siteo"  },
      password:  {l:"Ваш текущий пароль" , d: "Enter your password, который вы используете для входа на Siteo"  },
      statesystem: {l:"Leave me in sytem" },
      submit: {l: "Enter", d:"Успешно вошли в систему" }
    }
}

export const signup = {
    title:'Sign Up',

    content: {
      userEmail: signin.content.userEmail,
      name: {l:'Your name' , d: 'Enter your name'  },
      lastname: {l:'Your Lastname', d:'Enter your Lastname' },
      password: {l:'Придумайте пароль', template: 'Придумайте сложный пароль. Сложный пароль должен cодержать: <ul><li> не менше <strong><%= validate.min %> символов</strong>;</li> <li> как минимум <strong>одну цифру - <%= strong.digit %></strong>;</li> <li> как минимум <strong>одну  маленькую букву -<%= strong.alpha %> </strong>;</li> <li>как минимум  <strong>  одну большую букву - <%= strong.upper %> </strong>;</li> <li> как минимум <strong>один из  специальных символов - <%= strong.spec %></strong>;</li></ul><br>' },
      accord: {l: '', d: '' },
      submit: {l:'Sign Up', d: 'Вы успешно зарегистрировались на сайте' }
    }
}

export var activation = {
     title : 'Запрос активации e-mail',
     content: {
       userEmail: {l:'Ваш e-mail', d:'Укажите ваш реальный email, который вы будете использовать для входа' },
       submit: {l:'Send', d: 'На ваш e-mail отправлено сылка для активации' }
     }
  }
//activation.userEmail = activation.userEmail;

export var changepassword = {

    title : 'Set new password',
    content: {
      currentpassword: {l:'Текущий пароль' , d: 'Введите ваш текущий пароль для входа' },
      password: {l:'New password', d: signup.content.password.d },
      passwordrepeat: {l:'Repeat new  password', d: 'This field must be same as field above' },
      submit: {l:'Изменить', d: 'Ваш пароль был успешно изменен. Теперь можете войти в систему |/auth/signin/|Войти в систему' },
    }
}

export const forgot = {
   title : 'Do forget your password?',
   content: {
     userEmail: {l:'Your e-mail', d:'Your email address which you used for registration'},
     submit: {l:'Send link', d:'На ваш почтовый ящик было отправлено електронное сообщение  з сылкой для создания нового пароля'},
   }


}

export const profile = {
    title: "Данные профиля",
    description: "Заполните основные поля для своего профиля",
    content: {
      name: signup.content.name,
      lastname: signup.content.lastname,
      gender: {l: 'Пол', d:'Укажите пол'},
      birthday: {l:'Birthday', template:'Enter your birthday  in format <strong> <%= format %></strong>. Где, DD - день, MM - месяц, YYYY - год.  For example, <%= example %>'},
      submit: {l: 'Сохранить', d:'Информация успешно изменена'}
    }
}

export var email = {
    title: 'Установка Email для входа',
    description: "Here you can sign in",
    content: {
      currentValue: {l: 'Текущий емейл'},
      userEmail: {l: 'Новый Email', d:  'Введите ваш новый емейл' },
      password: signin.content.password,
      submit: {l: 'Сменить пароль', d:'Информация успешно изменена'}
    }
}

export var mobilephone= {
    title: 'Установка мобыльного телефона',
    description: "Here you can sign in",
    content: {
      currentValue: {l: 'Текущий мобильный телефон'},

      mobilePhone:  {l: 'Новый мобильный', d:  'Введите свой мобильный телефон, на который есть возможность получить СМС. Телефон должен быть в формате: <strong>код страны</strong> + <strong>код оператора</strong> + <strong>номер телефона</strong>' },
    //  newMobilePhone: {l: 'Ваш мобильный', d:   },
      password: signin.content.password,
      submit: {l: 'Сменить телефон', d:'Информация успешно изменена'}
  }
}

mobilephone.newMobilePhone = mobilephone.mobilePhone

export const location = {
  title : 'Укажите местоположение',
  content: {
    countryAlpha2: {l:'Страна' , d:'Выберите страну в которой вы находитесь' },
    submit : {l:'Сохранить' , d: 'Информация успешно изменена'}
  }
}

export var password =  changepassword;


export var sendpassword = {
  'title' : 'Установить пароль',
   description: 'На ваш електронный ящик, который указан в поле ниже,  будет отправлено письмо з ссылкой для установки пароля. ',
   userEmail: signin.content.userEmail,
   submit: forgot.content.submit


}

export const logout = {
    title:'Выход з системы',
    description: 'Процес выхода з системы сайтео',
    bye: 'До свидания! ',
    thanks: 'Спасибо, что используете сайтео.'

}

export const createWebsite = {
  title: 'Сконфигурируйте будущий вебсайт',
  description: 'Ваш сайт начинается с адреса ',
    content: {
      lang: {l: 'Основной язык сайта', d: 'Выберите основной язык сайта'},
      id: {l: 'Siteo-ID', d: 'Придумайте брендовый id для своего сайта'},
      name: {l: 'Название', d: 'Название для вашего сайта'},
      submit: {l:'Создать сайт', d: 'Ваш сайт успешно создан'}
    }

};

export const create = {
    title:'Title Website',
    description: 'Ваш сайт начинается с адреса ',

    content: {
        formCreate: {


        }

    }




}
