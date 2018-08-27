(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["local/lang-uk-js"],{

/***/ "./node_modules/vee-validate/dist/locale/uk.js":
/*!*****************************************************!*\
  !*** ./node_modules/vee-validate/dist/locale/uk.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(n,e){ true?module.exports=e():undefined}(this,function(){"use strict";var n,e={name:"uk",messages:{after:function(n,e){return"В полі "+n+" повинна бути дата після "+e[0]+"."},alpha_dash:function(n){return"Поле "+n+" може містити буквено-цифрові символи, а також тире та підкреслення."},alpha_num:function(n){return"Поле "+n+" може містити тільки літери та цифри."},alpha_spaces:function(n){return"Поле "+n+" може містити тільки літери та пробіли."},alpha:function(n){return"Поле "+n+" може містити тільки літери."},before:function(n,e){return"В полі "+n+" повинна бути дата до "+e[0]+"."},between:function(n,e){return"Поле "+n+" повинно бути між "+e[0]+" та "+e[1]+"."},confirmed:function(n){return"Поле "+n+" не співпадає з підтвердженням."},credit_card:function(n){return"Поле "+n+" не вірне."},date_between:function(n,e){return"В полі "+n+" повинна бути дата між "+e[0]+" та "+e[1]+"."},date_format:function(n,e){return"В полі "+n+" повинна бути дата в форматі "+e[0]+"."},decimal:function(n,e){void 0===e&&(e=[]);var t=e[0];return void 0===t&&(t="*"),"Поле "+n+" повинно бути числовим та може містити "+("*"===t?"знакі":t+" знаків")+" після коми."},digits:function(n,e){return"Поле "+n+" повинно бути числовим та точно містити "+e[0]+" цифри."},dimensions:function(n,e){return"Поле "+n+" повинно бути "+e[0]+" пікселів на "+e[1]+" пікселів."},email:function(n){return"В полі "+n+" повинна бути адреса електронної пошти."},ext:function(n){return"Поле "+n+" повинно бути дійсним файлом."},image:function(n){return"В полі "+n+" має бути зображення."},in:function(n){return"Поле "+n+" повинно бути допустимим значенням."},ip:function(n){return"Поле "+n+" повинно бути IP адресою."},max:function(n,e){return"Поле "+n+" не може бути більше, ніж "+e[0]+" символів."},max_value:function(n,e){return"Поле "+n+" повинно бути "+e[0]+" або менше."},mimes:function(n){return"Поле "+n+" повиннно мати дійсний тип файлу."},min:function(n,e){return"Поле "+n+" має бути принаймні "+e[0]+" символів."},min_value:function(n,e){return"Поле "+n+" повинно бути "+e[0]+" або більше."},not_in:function(n){return"Поле "+n+" повинно мати допустиме значення."},numeric:function(n){return"Поле "+n+" може містить лише цифри."},regex:function(n){return"Поле "+n+" має невірний формат."},required:function(n){return"Поле "+n+" повинно мати значення."},size:function(n,e){var t,r,u,i=e[0];return"Поле "+n+" повинно бути менше "+(t=i,r=1024,u=0==(t=Number(t)*r)?0:Math.floor(Math.log(t)/Math.log(r)),1*(t/Math.pow(r,u)).toFixed(2)+" "+["Byte","KB","MB","GB","TB","PB","EB","ZB","YB"][u])+"."},url:function(n){return"В полі "+n+" повиннен бути URL."}},attributes:{}};return"undefined"!=typeof VeeValidate&&VeeValidate.Validator.localize(((n={})[e.name]=e,n)),e});

/***/ }),

/***/ "./src/core/i18n/uk.js":
/*!*****************************!*\
  !*** ./src/core/i18n/uk.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.global = exports.messages = exports.routes = exports.veeValidate = undefined;

var _uk = __webpack_require__(/*! vee-validate/dist/locale/uk */ "./node_modules/vee-validate/dist/locale/uk.js");

var _uk2 = _interopRequireDefault(_uk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var veeValidate = exports.veeValidate = _uk2.default; //import en from 'vee-validate/dist/locale/en';
var routes = exports.routes = {

  'signin': 'Sign In',
  'signup': 'Sign Up',
  'forgot': 'Restore password',
  'dashboard': 'Профайл',
  'profile': 'Профиль',
  'location': 'Местоположение',
  'services': 'Сервисы',
  'bookmarks': 'Закладки',
  'orders': 'Заказы',
  'feedback': 'Обратная связь',
  'afilliate': 'Партнерская программа',
  'billing': 'Билинг',
  'notifies': 'Уведомления',
  'settings': 'Настройки',
  'email': 'Email',
  'mobilephone': 'Мобильный телефон',
  'password': 'Пароль',
  'networks': 'Аккаунты',
  'verify': 'Верификация'

};

var messages = exports.messages = {};

var global = exports.global = {
  'welcome': 'Welcome to',
  'form': 'entry form',
  'via': 'via',
  'siteo': 'Siteo',
  'country_code': 'Country code',
  'IP_1': 'IP adress',
  'copyright': 'Copyright 2017 This web-site was created by Siteo',
  'form_leave': 'Ви желаете прервать заполнение формы?',
  'form_leave_desc': 'Все заполненные данные будут утеряны.',
  'social_sign_in': 'Вход   через  cоциальные сети. В несколько раз быстрее обычного входа',
  'plain_sign_in': 'Обычный вход, нужно потратить больше времени на заполнение форм',
  'gender': {
    'm': 'Men',
    'f': 'Women',
    'o': 'Other'
  },
  'error_system': 'Error NO CODE: System error. Content is not Object',
  404: {

    title: '404 Not found',
    description: ' Sorry, but the page you are looking for was either not found or does not exist. Try refreshing the page or click the button below to go back to the Homepage.'
  },

  503: {
    title: '503 Service Unavailable',
    description: ' Message'
  }

};

/***/ })

}]);
//# sourceMappingURL=lang-uk-js.js.map