
/**
  @param  @url - id for messenger

*/


export default {

    'phone' : {
      call: 'tel:+@url'
    },

    'skype' : {
      call: 'skype:@url?call'
    },

    'messenger' : {
      call: 'https://www.messenger.com/@url'
    },

    'telegram' : {

      call: 'tg://resolve?domain=@url'
    },

    'viber' : {
      
      call: 'viber://chat?number=@url'
    },

    'whatsapp' : {
      call: 'whatsapp://send?phone=+@url'
    },

    'email' : {
      call: 'mailto:@url'
    },

}
