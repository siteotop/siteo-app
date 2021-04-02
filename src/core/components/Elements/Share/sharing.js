
import {
  mdiFacebook,
  mdiTwitter,
  mdiLinkedin,
  mdiPinterest,
  mdiReddit,
  mdiSkype,
  mdiTelegram,
  mdiVk,
  mdiWhatsapp,
  mdiMessageText,
  mdiAt,
  mdiContentCopy
} from '@mdi/js';
export default {
    "copy": {
      "sharer": "copy",
      i:  mdiContentCopy
    },
    "fb": {
    //  "sharer": "https://www.facebook.com/sharer/sharer.php?u=@url&title=@title&description=@title&quote=@title",
    "sharer": "https://www.facebook.com/sharer/sharer.php?u=@url&quote=@description",
      i:  mdiFacebook
    },
    "viber": {
      "sharer": "viber://forward?text=@description @url",
      i: mdiWhatsapp
    },
    "telegram": {
      "sharer": "https://t.me/share/url?url=@url&text=@description",
      i: mdiTelegram,
    },

    "twitter": {
      "sharer": "https://twitter.com/intent/tweet?text=@description&url=@url",
      i:  mdiTwitter
    },

    "email": {
      "sharer": "mailto:?subject=@title&body=@description @url",
      i: mdiAt
    },

    "sms": {
      "sharer": "sms:?body=@description @url",
      i: mdiMessageText
    },


  /*  "odnoklassniki": {
      "sharer": "https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&st.shareUrl=@url&st.comments=@description",

    },
*/
    "pinterest": {
      "sharer": "https://pinterest.com/pin/create/button/?url=@url&description=@description",
      i: mdiPinterest
    },

    "whatsapp": {
      "sharer": "whatsapp://send?text=@description @url",
      i:mdiWhatsapp

    },
    "reddit": {
      "sharer": "https://www.reddit.com/submit?url=@url&title=@description",
      i: mdiReddit
    },

    "skype": {
      "sharer": "https://web.skype.com/share?url=@description @url",
      i: mdiSkype
    },

    "vk": {
      "sharer": "https://vk.com/share.php?url=@url&description=@description",
      i: mdiVk
    },

    "linkedin": {
      "sharer": "https://www.linkedin.com/shareArticle?mini=true&url=@url&summary=@description",
      i: mdiLinkedin
    },






}
