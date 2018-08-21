export {default as global}  from './global';

export const routes = {

  'AAuthSignin':'Sign In',
  'AAuthSignup':'Sign Up',
  'BCreateProject': 'Создать проект',
  'BClients':'Клиенты',
  'BDashboard': 'Панель приборов',
  'BContent': 'Контент',
  'BContentPages': 'Страници',
  'BFeedback': 'Feedback',
  'BProjects': 'Проекты',
  'BBilling': 'Биллинг',
  'addpage': 'Добавить страницу',
  'lists': 'Список страниц',
  'BStatistic': 'Статистика',
  'googleanalitics': 'Google Analitics',
  'BStore': 'Хранилище',
  'BSeo': 'SEO',
  'webmaster': 'Панель вебмастера',
  'sitemap': 'Sitemap',
//  'BDesign': 'Дизайн',
  'BWebsite': 'Сайт',
  'BWidgets': 'Виджеты',
  'BDesignTemplates': 'Шаблоны',
  'AppIcon': 'favicon',
  'icons': 'Иконки',
  'action': 'Основное действие',
  'menu': 'Меню',
  'BData': 'Данные',
  'BDataMain': 'Основная ифнормация',
  'BDataPlaces': 'Адреса',
  'BDataPhones': 'Телефоны',
  'BDataLinks': 'Ссылки',
  'BDataPrices': 'Цены',
  'BDataExperts': 'Експерты',
  'BSettings': 'Настройки ',
  'BSettingsDomains': 'Домены',
  'BSettingsLangs': 'Языковые версии',
  'BSettingsAdmins': 'Администраторы',
  'BTestPage': 'Предосмотр',



}


export const BCreateProject = {
    title: routes.BCreateProject,
    description: 'Ваш сайт начинается с адреса ',

    content: {


    }

}

export var BContentPages= {
    title: 'Страници',
    description: "Все страници на сайте",
    content: {
        _fe: {},
        _fa: {},
        _f: {
          title: {l: 'Основной заголовок', d: ''},
          url: {l: 'Ссылка для страници ', d: ''},
          preview: {l: 'Подзаголовок', d: ''}
        }

    }
}


export const BDesignTemplates = {
  title: 'Шаблоны',
  //description: '',
  content: {
    _fe: {},
    _fa: {},
    _f: {
      name: {l: 'Название дизайна', d: ''},
      designStructure: {l: 'Название дизайна', d: ''}
    }
  }

};

export var BProjects= {
    title: 'Проекты',
    description: "Сайты которыми вы можете управлять в системе",
    content: {
      _ac: {
        admin: 'Управление сайтом',
        online: 'Перейти на сайт',
        domain: "Домен не настроен",
        config: "Настройки ",
        accept: 'Принять управления',
        delete: 'Отклонить управление'
      }
    }
}


/*
export const  BDesign = {
    title: 'Настройка шаблона',
    description: '',
    content: {

      theme: {},
      toolbar: {

        active: {l: 'active', d: 'active'},

        fixed: {l: 'fixed', d: 'Фиксированый тулбар'},
        clippedLeft: {l: 'clippedLeft', d: 'clippedLeft'},
        flat: {l: 'flat', d: 'flat hint'},
        dark: {l: 'dark', d: 'dark'},
        extended: {l: 'extended', d: 'extended'},

     }



    }

};*/

export const BDataMain = {
    title: "Данные сайта",
    description: "Заполните основные поля для своего сайта",
    content: {
      name:  {l: 'Название сайта/бренда', d: 'Название сайта в тоолбар'},
      title: {l: 'Расширенное название сайта/бренда', d: ''},
      slogan: {l: 'Слоган', d: 'Призыв к действию или слоган для продукта'},
      actionText: {l: 'Название для основного действия', d: 'Призыв к действию или слоган для продукта'},
      description: {l: 'Краткое описание', d: 'Описание'},


    },
    success: {
      submit: 'Общая информация о сайте успешно изменена'
    }


}

export const BDataLinks = {
  title: 'Ссылки на сервисы',
  description: 'Этот проект на других сервисах',
  content: {_fe: {},
    _fa: {},
    _f: {
      title: {l: 'Заголовок', d: ''},
      url: {l: 'Ссылка на ресурс', d: ''},
      icon: {l: 'Иконка', d: ''},
    }
  }

};
export const BDataPhones = {
  title: 'Телефоны',
  description: 'Этот проект на других сервисах',
  content: {
    _fe: {},
    _fa: {},
    _f: {
      numbers: {l: 'Номер телефона', d: ''},
      title: {l: 'Заголовок', d: ''},

    }
  }

};
export const BDataPlaces = {
  title: 'Локальные адреса',
  description: 'Для физических адресов',
  content: {_fe: {},
    _fa: {},
    _f: {
      title: {l: 'Заголовок', d: ''},
      city:{l: 'Город', d: ''},
      region: {l: 'Регион', d: ''},
      street: {l: 'Улица', d: ''},
      zipcode: {l: 'Почтовий индекс', d: ''},
      timework: {l: 'Время работы', d: ''},
      lat: {l: 'Широта', d: ''},
      lng: {l: 'Долгота', d: ''},
    }
  }
};
export const BDataPrices = {
  title: 'Цены на услуги или товары',
  description: '',
  content: {
    _fe: {},
    _fa: {},
    _f: {
      title: {l: 'Название позиции', d: ''},
      price: {l: 'Цена', d: ''},
      preview: {l: 'краткое описание', d: ''},
      internal_url: {l: 'Ссылка на страницу', d: ''},
      picture: {l: 'Картинка', d: ''},
    }
  }

};

export const BDataExperts = {
  title: 'Команда специалистов',
  description: 'Специалисты о которых нужно расказать на страницах сайта',
  content: {
      _fe: {
        title: 'Изменить инфорацию',
        description: ''},
      _fa: {
        title: 'Добавить специалиста',
        },
      _f: {

        name: {l: 'Имя, Фамилия', d: ''},
        position: {l: 'Должность', d: ''},
        about: {l: 'О специалисте', d: ''},
        picture: {l: 'Link picture', d: ''},

      }
  }

}

export const BSettingsDomains = {



}


export const BSettingsAdmins = {
    title: routes.BSettingsAdmins,
    description: 'Люди которые занимаются и управляют, непосредственно сайтом',
    content: {
      _ac: {
        'add': 'Пригласить',
        'edit': 'Изменить роль',
        'delete': 'Удалить администратора'
      },
      _fe: {
        title: 'Изменить администратора',
        description: 'Изменить',
        success: {
          submit: 'Информация о администраторе изменена'
        }
      },
      _c: {
        title: 'Удаление администратора',
        description: 'Вы действительно желаете удалить данного администратора',
        success: {
          submit: 'Администратор удален успешно'
        }
      },

      _fa: {
        title: 'Пригласить администратора',
        description: '',
        success: {
          submit: 'Администратор успешно добавлен'
        }
      },

      _f: {
        email: {l:'E-mail администратора', d:'Вам нужно узнать  e-mail зарегистрированого человека, который будет участвовать в развитии сайта '},
        _usersname: {l: 'Имя', d: ''},
        roleText: {l:'Роль'},
        patched: {l:'Статус', options: {
          '0': 'Ожидает',
          '1': '',
        }},

        role: {l: 'Роль', d: '', options: {
            '1': 'Владелец',
            '2': 'Администратор',
            '3': 'Клиент-оператор',
            '4': 'SEO',
            '5': 'Дизайнер',
            '6': 'Контент-менеджер',
            '7': 'Маркетолог',
            '8': 'Модератор',
            //'': 'Администратор',
        }}
      }

    },

    errors: {

      roleInclusionIn: 'В списке ролей нет данной  роли',
      emailadminFind: 'Пользователь с таким e-mail был добавлен ранее в список ваших администраторов',
      emailadminNoFind: 'Мы не можем найти зарегистрированого пользователя с таким e-mail'

    }


}
