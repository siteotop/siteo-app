
export default {

    'phone' : {
      color: 'green',
      action: function (url, text, type){
          return 'tel:+' + url;
      }
    },
    'skype' : {
      color: 'light-blue',
      action: function (url, text){
          return 'skype:'+url+'?call';
      }
    },
    'messenger' : {
      color: 'blue darken-3',
      action: function (url, text){
          return 'https://www.messenger.com/' + url;
      }
    },
    'telegram' : {
      color: 'blue lighten-1',
      action: function (url, text){
           return 'tg://resolve?domain=' + url;
      }
    },
    'viber' : {
      color: 'deep-purple',
      action: function (url, text){
          return 'viber://chat?number='  + url;
      }
    },
    'whatsapp' : {
      color: 'light-green darken-1',
      action: function (url, text){
        return 'whatsapp://send?phone=+' + url;
      }

    },

    'email' : {
      color: 'red lighten-1',
      action: function (url, text){
         return 'mailto:' + url;
      }
    },

}
