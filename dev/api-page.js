var _PRERENDER = {
    _id: '1532775891',
    pid: 'sjh234kjhsdf',
    title: 'Title for  lists and  meta title', //  title for  lists and  meta title
    description: 'Description for List and Meta Tile', //
    meta_title: 'If Seo Title Present it replace Basic Title', // if this title  empty using basic title for list
    meta_description: 'This description good for google snippet. And you must write some useful information which describe your article', // if this title  empty using basic description for list
    meta_canonical: 'http://jstest.com/',
    meta_og_title: 'This is title for Facebook and other social networks', // if this title  empty using basic title for list
  //  meta_og_image: '', // if this title  empty using basic title for list
    meta_robots: 'index, follow',

    contentStructure: [

      {

        $$: 'SectionWrap',
        _props: {
          _p:'https://picsum.photos/1500/600?random',
          _t: 'This is title block',  //
          _d: 'It is description text. Text above uses h1 tag',  //
          $tc: 'align-center primary',
          $_t: 'white--text display-4',
          $_d: 'ma-2 display-1 white--text',
          $gr: 'to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)',
          $he: 600,
          $co: 'v-img',
          $ht: 1,

          $bf: 'xs12 sm6 md3 text-xs-center',
          $bls: [

            {
              $$:'AppAction',
              _props: {
                _at: 'Action Text',

              }
            },

            {
              $$:'AppAction',
              _props: {
                _at: 'Non Default Text',  //
                color: 'red',
                dark: true,
                to: '/services',  //
              }
            }
          ]

        }

      },


      {
        $$: 'SectionListWrap',
        _props: {
          _t: '',
          _d: 'This is only  description for BFeatures block ',
          $tc: 'align-center white ',


          $bl: 'row wrap align-center',
          $bf: 'text-xs-center xs12  md4',
          $cl: 'BTitle',
          $clp: {
            $_t: 'display-1'
          },
          items: [
            {

                  _t: 'First',
                  _s: 'Subtitle',
                  _m: 'https://picsum.photos/100/100?random'

            },
            {

                  _t: 'Second',
                  _s: 'Subtitle',
                  _m: 'https://picsum.photos/100/100?random'


            },

            {

                  _t: 'Third',
                  _s: 'Subtitle',
                  _m: 'https://picsum.photos/100/100?random'


            },

          ]
        }

      },



      {
        $$: 'SectionWrap',
        _props: {
          _$:'about-borsht',
          _n:'About',
          _t: 'Do you need html text?',  //
          _d: 'It is no problem. You can combine HtmlText with others blocks. For example, block image',  //
          $_t: 'display-2 font-weight-regular ',
          $tc: 'white',
          $bf: 'xs12 sm12 md6',
          $bls: [
            {
              $$: 'BHtmlText',

              _props: {
                  _te: '<h3>This text can be creating in  WYSIWYG redactor</h3><p>We can use <strong>strong text</strong> and much more tags, like <em>this</em>. But Html redactor has some rule for adding texts and it can to block some tags like script or link</p><p>In HtmlText block you can create paragraph.</p><h3>And Title using h3, h4,h5</h3><p>H1 and H1, you can use in Title(_t) and description(_d) props for section.</p>',
              }
            },

            {
              $$: 'BImage',
              _props: {
                  _m: 'https://picsum.photos/500/500?random',

              }
            }
          ]


        }

      },

      {
        $$: 'SectionWrap',
        _props: {
          _t: 'Tabs',
          _d: '',
          $bc:'',
          $bf: 'md12 text-xs-center',
          $bls: [
            {
              $$: 'BTabs',

              _props: {
                $bls: [
                  {
                    $$:'BFormOrder',
                    _n: 'Order',
                    _i: 'si-order',
                    _props:{

                    }


                  },

                  {
                    $$:'BFormRecall',
                    _n: 'Order Recall',
                    _i: 'si-recall',
                    _props: {

                    }

                  },

                  {
                    $$:'BTitle',
                    _n: 'Title',
                    _i: 'si-help',
                    _props: {
                      _t: 'Title 1',
                      _s: 'Subtitle ',
                      _d: 'Decription lasjdhf klahsdf klhasklfh khasf kjhaskj fhaskjhf kjashf kjhaslkjfhkjlsahf klhasf kljhkalsjhf klashfklhas'
                    }

                  },

                  {
                    $$: 'AutoServices',
                    _n: 'Services',
                    _i: 'si-services',


                  }
                ]
              }
            }
          ]
        }

      },

      {

        $$: 'SectionWrap',
        _props: {
          _t: 'Title with button',  //
          _d: 'If you click on default AppAction button you will  go to order form  by default. Everywhere! Everytime!',  //
          $tc: 'primary',
          _p: '', // background image
          $bf: 'xs12 sm6 md4 text-xs-center',
          $bls: [
            {
              $$:'AppAction',
              _props: {
                _at: 'Action Text',  //
                //_ah: 'Action Href',  //
              }
            }
          ]
        }

      },

      {

        $$: 'AutoServices',
        _props: {
          _t: 'Services ',  //
          _d: 'If all services or items which you sell',  //


        }

      },

      {

        $$: 'AutoExperts',
        _props: {
          _t: 'Experts from company',  //
          _d: 'Description Header Block',  //
          $tc: 'blue-grey lighten-1'


        }

      },



      {
        $$: 'SectionWrap',
        _props: {
          _t: '',
          _d: '',
          $tc: 'grey lighten-3',
          $bc: 'grid-list-xl',
          $bl: 'align-center justify-center row wrap fill-heigh',
          $bf: 'md6 ',
          $bls: [
            {
              $$:'BTitle',
              $bf: 'text-md-left ',
              _props: {
                _t: 'Integrate your order form',
                _s: 'Form is very flexible',
                _d: 'You can use combination of fields. Base core fields are name, lastname, email, phone, date, services, experts. Some fields, such as, services, experts are integrated with your price list and your people list. Customer can select one of them when booking throught your web-app, if those fields will include at form.',


              }
            },
            {
              $$: 'BFormOrder'
            }


          ]
        }

      },

      {
         $$: 'SectionWrap',
         _props: {
           $bf: 'md6',
           $bl: 'align-center row wrap ',
           $bls: [
             {
               $$:'BInstagram',
                $bf: 'text-xs-center ',
               _props: {
                 _url: 'https://www.instagram.com/p/BpPnezuAZjr',
                 $hc: true
               }
             },
             {
               $$:'BTitle',
               $bf: 'text-md-center',
               _props: {
                 _t: 'Integrate your instagram Post',
                 _s: 'It is easy and asynchrony',
                 _d: 'Put your link with post id in  instagram block. And your custumers will see your picture  with caption or  only image. People will be easy  follow you or your business account in Instagram.com',
                _al: '/go/recall',
                _at:'We Recall to  You',
                $aa: {
                  dark: true,
                  color: 'red',
                  siicon: 'si-recall',
                  rel: 'nofollow'
                },
                $_al: 'text-xs-center' ,
                $_t: 'display-3  pink--text',
                _m: 'http://pluspng.com/img-png/instagram-png-file-instagram-icon-png-599.png',


                $_mt: true,
                $_ms: 200,

               }
             }



           ]
         }

      },

      {
        $$: 'SectionWrap',
        _props: {
          _t: 'Buttons  Action ',
          _d: 'Description about Buttons  Action',
          $tc: 'grey lighten-3',
          $bf: 'md6 text-xs-center align-center',
          $bls: [
            {
              $$: 'AutoContacts',
              _props: {
                $type: 'call',
                $clp: {
                  fab: true
                }
              }
            },

            {
              $$: 'AutoContacts',

            },

          ]
        }

      },

      {
        $$: 'SectionWrap',
        _props: {
          _t: 'Buttons  Action ',
          _d: 'Description about Buttons  Action sdfg lskdfjgh ljsdfhgkj sfdlkjgh kjlsdhg klhsdlkgh klsjfdhgklhsdg kjhsdlkgh lksjfdhg lkjsdhglkjsd',

          $bf: 'md12 text-xs-center',
          $bls: [
            {
              $$: 'AutoLinks'
            }
          ]
        }

      },



      {
        $$: 'SectionWrap',
        _props: {
          _t: 'Block of Quote',
          _d: 'Block with quotes from people or customers',

          $tc:'blue',
          $bc:'fluid',
          $bf: 'md6',
          $bls: [
            {
              $$: 'BQuote',
              _props: {
                 _t: 'Dmytro Diachuk',
                 _s: 'Founder siteo.com',
                 _m: 'https://scontent.fhen1-1.fna.fbcdn.net/v/t1.0-9/14054133_1212875082083948_7676951218311066170_n.jpg?_nc_cat=107&_nc_ht=scontent.fhen1-1.fna&oh=2c1909bb38e52d557b3b8fd27d28ac9d&oe=5C88A703',
                 _d: 'I am creating a platform for structuring small markets. Siteo-template is javascript template locate on  GitHub project which will using for small website, website-aggregators, and business web app. Each market or small business uses separate siteo-template with settings and special configuration.'
              }
            },

            {
              $$: 'BQuote',
              _props: {
                 _t: 'Inna Shepetyuk',
                 _s: 'have created web-app on siteo-top',
                 _m: 'https://scontent.fhen1-1.fna.fbcdn.net/v/t1.0-9/14063771_10206538812939961_1732695943355684861_n.jpg?_nc_cat=109&_nc_ht=scontent.fhen1-1.fna&oh=d1d942df476eb91a099d5243688afcd2&oe=5C3EE555',
                 _d: 'I am using siteo platfowm for my project. It is very Easy, Simple and Fast. I have integrated my all social links and create page for my  instagram shops'
              }
            }
          ]
        }

      },



      {

        $$: 'SectionWrap',
        _props: {
          _$: 'reciept',
          _n: 'reciept',
          _t: 'How to cook Borsh',  //
          _d: 'dskjgh lshdflgh lsdkfjgh lskdfhgkl jhsdflkjhg kljhsdfkjlgh kjsdfhgkj hsdfkhg lkjsdfhgkljhsdfkjgh kjsdfhlgkjh lskdfhg kjlhsdflkjgh kjlsfdhg kljsdfhgkljh sfdkljgh kljsfdhgkjsfdhgks asdf asfd asfdasfd asdf asdfa',  //

          _p: '', // background image
          $bf: 'xs12 md6',
          $bls: [
            {
              $$: 'BList',
              _props: {
                _li: [
                    {
                      _t: 'Beetroot',
                      _d: '200gr',
                    },
                    {
                      _t: 'Onion',
                      _d: '200gr',
                    },
                    {
                      _t: 'Beetroot',
                      _d: '200gr',
                    },
                    {
                      _t: 'Onion',
                      _d: '200gr',
                    },
                    {
                      _t: 'Beetroot',
                      _d: '200gr',
                    },
                    {
                      _t: 'Onion',
                      _d: '200gr',
                    }

                ]
              }
            },

            {
              $$: 'SectionListWrap',
              _props: {
                _t: '',
                _d: '',
                $tc: 'align-center white ',

                $bc: ' ',
                $bl: 'row wrap align-center',
                $bf: 'text-xs-center xs6  md3',
                $cl: 'BImage',
                $clp: {
                  $_t: 'display-1'
                },
                items: [
                  {
                    _m: 'https://picsum.photos/220/220?random'
                  },
                  {
                     _m: 'https://picsum.photos/222/222?random'
                  },

                  {
                    _m: 'https://picsum.photos/223/223?random'
                  },
                  {
                    _m: 'https://picsum.photos/220/220?random'
                  },
                  {
                    _m: 'https://picsum.photos/223/223?random'
                  },
                  {
                     _m: 'https://picsum.photos/222/222?random'
                  },

                ]
              }

            },



          ]
        }

      },


      {
        // name section
        $$: 'SectionListWrap',
        // data section


        _props: {
          //_t: 'Title  Header Block ',
            $cl: 'BStep',
            _d: 'If you want to prepare Borsht. See reciept bottom',  //
          items: [
              {
                _t:'Крок 1 ',
                _s:'Text in v-card-title',
                _d:' фываюлор флдывра дорфыдлваор лдфырвалдрдл офырвадлор фылдовра длорфылдовар длфырвалд орфыдловра рфыавлд орфлдыорва лдорфыалвр длфыра влодфрыдлвар длфыравдло рфыдлвар лдофырва лдорлдофырвалд рдлфоывра лдрфылдвра лдорфылдвар лдфырвалод рдлфоырва лдорфылодвар лодрфылводар лодфырва лдорфылвоа рлодфырва длорфылдвар лдофырав лдофырва лодыфвра',
                _m:'https://cdn.vuetifyjs.com/images/cards/docks.jpg'
              },
              {
                _t:'Крок 1 ',
                _s:'',
                _d:' фываюлор флдывра дорфыдлваор лдфырвалдрдл офырвадлор фылдовра длорфылдовар длфырвалд орфыдловра рфыавлд орфлдыорва лдорфыалвр длфыра влодфрыдлвар длфыравдло рфыдлвар лдофырва лдорлдофырвалд рдлфоывра лдрфылдвра лдорфылдвар лдфырвалод рдлфоырва лдорфылодвар лодрфылводар лодфырва лдорфылвоа рлодфырва длорфылдвар лдофырав лдофырва лодыфвра',
                _m:'https://cdn.vuetifyjs.com/images/cards/docks.jpg'
              },
              {
                _t:'Крок 1 ',
                _s:'',
                _d:' фываюлор флдывра дорфыдлваор лдфырвалдрдл офырвадлор фылдовра длорфылдовар длфырвалд орфыдловра рфыавлд орфлдыорва лдорфыалвр длфыра влодфрыдлвар длфыравдло рфыдлвар лдофырва лдорлдофырвалд рдлфоывра лдрфылдвра лдорфылдвар лдфsdvdfg sdfg sdfg sdfg sdfg sdfg dsfgырвалод рдлфоырва лдорфылодвар лодрфылводар лодфырва лдорфылвоа рлодфырва длорфылдвар лдофырав лдофырва лодыфвра',
                _m:'https://cdn.vuetifyjs.com/images/cards/docks.jpg'
              },
              {
                _t:'Крок 1 ',
                _s:'',
                _d:' фываюлор флдывра дорфыдлваор лдфырвалдрдл офырвадлор фылдовра длорфылдовар длфырвалд орфыдловра рфыавлд орфлдыорва лдорфыалвр длфыра влодфрыдлвар длфыравдло рфыдлвар лдофырва лдорлдофырвалд рдлфоывра лдрфылдвра лдорфылдвар лдфырвалод рдлфоырва лдорфылодвар лодрфылводар лодфырва лдорфылвоа рлодфырва длорфылдвар лдофырав лдофырва лодыфвра',
                _m:'https://cdn.vuetifyjs.com/images/cards/docks.jpg'
              },
          ]
           // background image
        }

      },

      {
        // name section
        $$: 'SectionWrap',
        // data section
        _props: {
          _t: 'Title  Header Block ',
          _d: 'If you want to prepare Borsht. See reciept bottom',  //
          $he:400,
          $_t: 'display-3',
          $tc: 'align-center',
          $co:'v-parallax',
          $bl: 'justify-center text-xs-center',
          _p: 'https://picsum.photos/1600/600?random', // background image
          $bls: [
            {
              $$: 'AppAction',


            }
          ]
        }

      },

      {

        $$: 'SectionWrap',
        _props: {
          _t: 'Popular questions about Borsch',  //
          _d: 'Few questions that ask with name dishes',  //
          $bls: [
            {
              $$:'BQa',
              _props: {
                _qa:
                [
                    {
                      _q: 'Where did create firstBorsh?',
                      _a: 'In Ukraine '
                    },

                    {
                      _q: 'How to prepare Borsh?',
                      _a: 'In Ukraine  asdfasdfjghasjdfg jkasgfd jaskjfd gjagsfjdk gjkasgfdkjasfd asfdasdf'
                    },

                    {
                      _q: 'What is main ingridient in Ukrainian Borsht?',
                      _a: 'In Ukraine borsht main ingridient is beetroot?'
                    },

                    {
                      _q: ' How many kind of borsc?',
                      _a: '75 adfjh asldfhlkasdjhf lkahsdlkfh lkashdflk haskldjfh kalsdhflk jhasfdsaIn Ukraine '
                    }
                ],
              }
            }
          ],

          $tc: 'primary', // background color
          _p: '', // background image
        }

      },


      {
        $$: 'SectionWrap',
        _props: {
          _t: 'About Borsht',  //
          _d: 'Borsht is very good food with beetroot',  //

          $bf: 'xs12 sm12 md8',
          $bls: [

            {
              $$:'BVideo',
              _props: {
                _vi: 'nejk74AtW0I'
              }
            }
          ]

        }

      }



    ]
 }
