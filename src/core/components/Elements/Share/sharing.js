
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
  mdiAt
} from '@mdi/js';
export default {

    "fb": {
      "sharer": "https://www.facebook.com/sharer/sharer.php?u=@url&title=@title&description=@description&quote=@quote",
      i:  mdiFacebook
    },

    "twitter": {
      "sharer": "https://twitter.com/intent/tweet?text=@title&url=@url&hashtags=@hashtags@twitteruser",
      i:  mdiTwitter
    },

    "linkedin": {
      "sharer": "https://www.linkedin.com/shareArticle?mini=true&url=@url&title=@title&summary=@description",
      i: mdiLinkedin
    },

  /*  "odnoklassniki": {
      "sharer": "https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&st.shareUrl=@url&st.comments=@description",

    },
*/
    "pinterest": {
      "sharer": "https://pinterest.com/pin/create/button/?url=@url&media=@media&description=@title",
      i: mdiPinterest
    },

    "reddit": {
      "sharer": "https://www.reddit.com/submit?url=@url&title=@title",
      i: mdiReddit
    },

    "skype": {
      "sharer": "https://web.skype.com/share?url=@description%0D%0A@url",
      i: mdiSkype
    },

    "telegram": {
      "sharer": "https://t.me/share/url?url=@url&text=@description",
      i: mdiTelegram,
    },

    "viber": {
      "sharer": "viber://forward?text=@url @description",
      i: mdiWhatsapp
    },

    "vk": {
      "sharer": "https://vk.com/share.php?url=@url&title=@title&description=@description&image=@media&noparse=true",
      i: mdiVk
    },

    /*"weibo": {
      "sharer": "http://service.weibo.com/share/share.php?url=@url&title=@title",

    },*/

    "whatsapp": {
      "sharer": "whatsapp://send?text=@description%0D%0A@url",
      i:mdiWhatsapp

    },

    "sms": {
      "sharer": "sms:?body=@url%20@description",
      i: mdiMessageText
    },

    "email": {
      "sharer": "mailto:?subject=@title&body=@url%0D%0A%0D%0A@description",
      i: mdiAt
    },


}
