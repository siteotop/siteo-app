(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{735:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.global=n.messages=n.routes=n.veeValidate=void 0;var r,o=t(814),i=(r=o)&&r.__esModule?r:{default:r};n.veeValidate=i.default,n.routes={signin:"Sign In",signup:"Sign Up",forgot:"Restore password",dashboard:"Профайл",profile:"Профиль",location:"Местоположение",services:"Сервисы",bookmarks:"Закладки",orders:"Заказы",feedback:"Обратная связь",afilliate:"Партнерская программа",billing:"Билинг",notifies:"Уведомления",settings:"Настройки",email:"Email",mobilephone:"Мобильный телефон",password:"Пароль",networks:"Аккаунты",verify:"Верификация"},n.messages={},n.global={welcome:"Welcome to",form:"entry form",via:"via",siteo:"Siteo",country_code:"Country code",IP_1:"IP adress",copyright:"Copyright 2017 This web-site was created by Siteo",form_leave:"Ви желаете прервать заполнение формы?",form_leave_desc:"Все заполненные данные будут утеряны.",social_sign_in:"Вход   через  cоциальные сети. В несколько раз быстрее обычного входа",plain_sign_in:"Обычный вход, нужно потратить больше времени на заполнение форм",gender:{m:"Men",f:"Women",o:"Other"},error_system:"Error NO CODE: System error. Content is not Object",404:{title:"404 Not found",description:" Sorry, but the page you are looking for was either not found or does not exist. Try refreshing the page or click the button below to go back to the Homepage."},503:{title:"503 Service Unavailable",description:" Message"}}},814:function(e,n,t){e.exports=function(){"use strict";var e,n={name:"uk",messages:{after:function(e,n){return"В полі "+e+" повинна бути дата після "+n[0]+"."},alpha_dash:function(e){return"Поле "+e+" може містити буквено-цифрові символи, а також тире та підкреслення."},alpha_num:function(e){return"Поле "+e+" може містити тільки літери та цифри."},alpha_spaces:function(e){return"Поле "+e+" може містити тільки літери та пробіли."},alpha:function(e){return"Поле "+e+" може містити тільки літери."},before:function(e,n){return"В полі "+e+" повинна бути дата до "+n[0]+"."},between:function(e,n){return"Поле "+e+" повинно бути між "+n[0]+" та "+n[1]+"."},confirmed:function(e){return"Поле "+e+" не співпадає з підтвердженням."},credit_card:function(e){return"Поле "+e+" не вірне."},date_between:function(e,n){return"В полі "+e+" повинна бути дата між "+n[0]+" та "+n[1]+"."},date_format:function(e,n){return"В полі "+e+" повинна бути дата в форматі "+n[0]+"."},decimal:function(e,n){void 0===n&&(n=[]);var t=n[0];return void 0===t&&(t="*"),"Поле "+e+" повинно бути числовим та може містити "+("*"===t?"знакі":t+" знаків")+" після коми."},digits:function(e,n){return"Поле "+e+" повинно бути числовим та точно містити "+n[0]+" цифри."},dimensions:function(e,n){return"Поле "+e+" повинно бути "+n[0]+" пікселів на "+n[1]+" пікселів."},email:function(e){return"В полі "+e+" повинна бути адреса електронної пошти."},ext:function(e){return"Поле "+e+" повинно бути дійсним файлом."},image:function(e){return"В полі "+e+" має бути зображення."},in:function(e){return"Поле "+e+" повинно бути допустимим значенням."},ip:function(e){return"Поле "+e+" повинно бути IP адресою."},max:function(e,n){return"Поле "+e+" не може бути більше, ніж "+n[0]+" символів."},max_value:function(e,n){return"Поле "+e+" повинно бути "+n[0]+" або менше."},mimes:function(e){return"Поле "+e+" повиннно мати дійсний тип файлу."},min:function(e,n){return"Поле "+e+" має бути принаймні "+n[0]+" символів."},min_value:function(e,n){return"Поле "+e+" повинно бути "+n[0]+" або більше."},not_in:function(e){return"Поле "+e+" повинно мати допустиме значення."},numeric:function(e){return"Поле "+e+" може містить лише цифри."},regex:function(e){return"Поле "+e+" має невірний формат."},required:function(e){return"Поле "+e+" повинно мати значення."},size:function(e,n){var t,r,o,i=n[0];return"Поле "+e+" повинно бути менше "+(t=i,r=1024,o=0==(t=Number(t)*r)?0:Math.floor(Math.log(t)/Math.log(r)),1*(t/Math.pow(r,o)).toFixed(2)+" "+["Byte","KB","MB","GB","TB","PB","EB","ZB","YB"][o])+"."},url:function(e){return"В полі "+e+" повиннен бути URL."}},attributes:{}};return"undefined"!=typeof VeeValidate&&VeeValidate.Validator.localize(((e={})[n.name]=n,e)),n}()}}]);