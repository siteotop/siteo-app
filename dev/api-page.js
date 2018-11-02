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

        _n: 'SectionWrap',
        _props: {
          _bi:'https://picsum.photos/1500/600?random',
          _ti: 'This is title block',  //
          _de: 'It is description text. Text above uses h1 tag',  //
          _tc: 'align-center primary',
          _hc: 'white--text display-4',
          _dc: 'ma-2 display-1 white--text',
          _gr: 'to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)',
          _he: 600,
          _co: 1,
          _hn: 1,

          _fc: 'xs12 sm6 md3 text-xs-center',
          _bls: [

            {
              _n:'AppAction',
              _props: {
                _at: 'Action Text',  //
                _ah: 'Action Href',  //
              }
            },

            {
              _n:'AppAction',
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
        _n: 'SectionWrap',
        _props: {
          _ti: '',
          _de: 'This is only  description for BFeatures block ',
          _tc: 'align-center white ',
          _cl: 'BTitle',
          _cl_props: {
            _tc: 'display-1'
          },
          _lc: 'row wrap align-center',
          _fc: 'text-xs-center xs12  md4',
          _bls: [
            {

                  _ti: 'First',
                  _st: 'Subtitle',
                  _me: 'https://picsum.photos/100/100?random'

            },
            {

                  _ti: 'Second',
                  _st: 'Subtitle',
                  _me: 'https://picsum.photos/100/100?random'


            },

            {

                  _ti: 'Third',
                  _st: 'Subtitle',
                  _me: 'https://picsum.photos/100/100?random'
              

            },

          ]
        }

      },

      {
        _n: 'SectionWrap',
        _props: {
          _id:'about-borsht',
          _na:'About',
          _ti: 'Do you need html text?',  //
          _de: 'It is no problem. You can combine HtmlText with others blocks. For example, block image',  //
          _hc: 'display-2 font-weight-regular ',
          _tc: 'white',
          _fc: 'xs12 sm12 md6',
          _bls: [
            {
              _n: 'BHtmlText',

              _props: {
                  _te: '<h3>This text can be creating in  WYSIWYG redactor</h3><p>We can use <strong>strong text</strong> and much more tags, like <em>this</em>. But Html redactor has some rule for adding texts and it can to block some tags like script or link</p><p>In HtmlText block you can create paragraph.</p><h3>And Title using h3, h4,h5</h3><p>H1 and H1, you can use in Title(_ti) and description(_de) props for section.</p>',
              }
            },

            {
              _n: 'BImage',
              _props: {
                  _me: 'https://picsum.photos/500/500?random',

              }
            }
          ]


        }

      },

      {

        _n: 'SectionWrap',
        _props: {
          _ti: 'Title with button',  //
          _de: 'If you click on default AppAction button you will  go to order form  by default. Everywhere! Everytime!',  //
          _tc: 'primary',
          _bi: '', // background image
          _fc: 'xs12 sm6 md4 text-xs-center',
          _bls: [
            {
              _n:'AppAction',
              _props: {
                _at: 'Action Text',  //
                _ah: 'Action Href',  //
              }
            }
          ]
        }

      },

      {

        _n: 'ListServices',
        _props: {
          _ti: 'Services ',  //
          _de: 'If all services or items which you sell',  //


        }

      },

      {

        _n: 'ListExperts',
        _props: {
          _ti: 'Experts from company',  //
          _de: 'Description Header Block',  //
          _tc: 'blue-grey lighten-1'


        }

      },



      {
        _n: 'SectionWrap',
        _props: {
          _ti: '',
          _de: '',
          _tc: 'grey lighten-3',
          _cc: 'grid-list-xl',
          _lc: 'align-center justify-center row wrap fill-heigh',
          _fc: 'md6 ',
          _bls: [
            {
              _n:'BTitle',
              _fc: 'text-md-left ',
              _props: {
                _ti: 'Integrate your order form',
                _st: 'Form is very flexible',
                _de: 'You can use combination of fields. Base core fields are name, lastname, email, phone, date, services, experts. Some fields, such as, services, experts are integrated with your price list and your people list. Customer can select one of them when booking throught your web-app, if those fields will include at form.',

                //_dc: 'body-2'
              }
            },
            {
              _n: 'AppActionOrder'
            }


          ]
        }

      },

      {
         _n: 'SectionWrap',
         _props: {
           _fc: 'md6',
           _lc: 'align-center row wrap ',
           _bls: [
             {
               _n:'BInstagram',
                _fc: 'text-xs-center ',
               _props: {
                 _url: 'https://www.instagram.com/p/BpPnezuAZjr',
                 _hc: true
               }
             },
             {
               _n:'BTitle',
               _fc: 'text-md-center',
               _props: {
                 _ti: 'Integrate your instagram Post',
                 _st: 'It is easy and asynchrony',
                 _de: 'Put your link with post id in  instagram block. And your custumers will see your picture  with caption or  only image. People will be easy  follow you or your business account in Instagram.com',
                _tc: 'display-3  pink--text',
                 _me: 'http://pluspng.com/img-png/instagram-png-file-instagram-icon-png-599.png',

                _mc: 'i',
                _mt: true,
                _ms: 200,

                 //_dc: 'body-2'
               }
             }



           ]
         }

      },

      {
        _n: 'SectionWrap',
        _props: {
          _ti: 'Buttons  Action ',
          _de: 'Description about Buttons  Action',
          _tc: 'grey lighten-3',
          _fc: 'md6 text-xs-center align-center',
          _bls: [
            {
              _n: 'AppActionChat'
            },

            {
              _n: 'AppActionCall'
            },

          ]
        }

      },

      {
        _n: 'SectionWrap',
        _props: {
          _ti: 'Buttons  Action ',
          _de: 'Description about Buttons  Action sdfg lskdfjgh ljsdfhgkj sfdlkjgh kjlsdhg klhsdlkgh klsjfdhgklhsdg kjhsdlkgh lksjfdhg lkjsdhglkjsd',

          _fc: 'md12 text-xs-center',
          _bls: [
            {
              _n: 'AppActionLinks'
            }
          ]
        }

      },

      {
        _n: 'SectionWrap',
        _props: {
          _ti: 'Они это сделали',
          _de: '',

          _tc:'blue',
          _cc:'fluid',
          _fc: 'md6',
          _bls: [
            {
              _n: 'BQuote',
              _props: {
                 _au: 'Author BQuote',
                 _po: 'Position for example website.com',
                 _av: 'https://s2.wp.com/wp-content/themes/h4/landing/marketing/pages/_common/components/testimonials/media/ann-morgan.png',
                 _qu: 'It’s been a great privilege and a life‑changing experience. I’m grateful to WordPress.com for providing an affordable and user‑friendly platform for individuals to launch projects and be heard in this way.'
              }
            },

            {
              _n: 'BQuote',
              _props: {
                 _au: 'Author2 BQuote',
                 _po: 'Position for example siteo.com',
                 _av: 'https://s0.wp.com/wp-content/themes/h4/landing/marketing/pages/_common/components/testimonials/media/quintin-lake.png',
                 _qu: 'Це не так просто прифдывпа фпывадопфыловпа дфыова фыловпа олфыпв лоаплофыпва лофывало фолывпа лофыпа влофы алофылова лофыаво фылопафыв'
              }
            }
          ]
        }

      },



      {

        _n: 'SectionWrap',
        _props: {
          _id: 'reciept',
          _na: 'reciept',
          _ti: 'How to cook Borsh',  //
          _de: 'dskjgh lshdflgh lsdkfjgh lskdfhgkl jhsdflkjhg kljhsdfkjlgh kjsdfhgkj hsdfkhg lkjsdfhgkljhsdfkjgh kjsdfhlgkjh lskdfhg kjlhsdflkjgh kjlsfdhg kljsdfhgkljh sfdkljgh kljsfdhgkjsfdhgks asdf asfd asfdasfd asdf asdfa',  //

          _bi: '', // background image
          _fc: 'xs12 md6',
          _bls: [
            {
              _n: 'BList',
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
              _n:'BImage',
              _props: {
                _me:'https://1ajvmf3xekdd2r35dh3pklbl-wpengine.netdna-ssl.com/wp-content/uploads/2014/05/vegan-doukhobor-borscht-prepared-ingredients1280-688x516.jpg'
              }
            }

          ]
        }

      },


      {
        // name section
        _n: 'StepByStep',
        // data section
        _props: {
          //_ti: 'Title  Header Block ',
          _de: 'If you want to prepare Borsht. See reciept bottom',  //
          _li: [
              {
                _t:'Крок 1 ',
                _s:'Text in v-card-title',
                _d:' фываюлор флдывра дорфыдлваор лдфырвалдрдл офырвадлор фылдовра длорфылдовар длфырвалд орфыдловра рфыавлд орфлдыорва лдорфыалвр длфыра влодфрыдлвар длфыравдло рфыдлвар лдофырва лдорлдофырвалд рдлфоывра лдрфылдвра лдорфылдвар лдфырвалод рдлфоырва лдорфылодвар лодрфылводар лодфырва лдорфылвоа рлодфырва длорфылдвар лдофырав лдофырва лодыфвра',
                _i:'https://cdn.vuetifyjs.com/images/cards/docks.jpg'
              },
              {
                _t:'Крок 1 ',
                _s:'',
                _d:' фываюлор флдывра дорфыдлваор лдфырвалдрдл офырвадлор фылдовра длорфылдовар длфырвалд орфыдловра рфыавлд орфлдыорва лдорфыалвр длфыра влодфрыдлвар длфыравдло рфыдлвар лдофырва лдорлдофырвалд рдлфоывра лдрфылдвра лдорфылдвар лдфырвалод рдлфоырва лдорфылодвар лодрфылводар лодфырва лдорфылвоа рлодфырва длорфылдвар лдофырав лдофырва лодыфвра',
                _i:'https://cdn.vuetifyjs.com/images/cards/docks.jpg'
              },
              {
                _t:'Крок 1 ',
                _s:'',
                _d:' фываюлор флдывра дорфыдлваор лдфырвалдрдл офырвадлор фылдовра длорфылдовар длфырвалд орфыдловра рфыавлд орфлдыорва лдорфыалвр длфыра влодфрыдлвар длфыравдло рфыдлвар лдофырва лдорлдофырвалд рдлфоывра лдрфылдвра лдорфылдвар лдфsdvdfg sdfg sdfg sdfg sdfg sdfg dsfgырвалод рдлфоырва лдорфылодвар лодрфылводар лодфырва лдорфылвоа рлодфырва длорфылдвар лдофырав лдофырва лодыфвра',
                _i:'https://cdn.vuetifyjs.com/images/cards/docks.jpg'
              },
              {
                _t:'Крок 1 ',
                _s:'',
                _d:' фываюлор флдывра дорфыдлваор лдфырвалдрдл офырвадлор фылдовра длорфылдовар длфырвалд орфыдловра рфыавлд орфлдыорва лдорфыалвр длфыра влодфрыдлвар длфыравдло рфыдлвар лдофырва лдорлдофырвалд рдлфоывра лдрфылдвра лдорфылдвар лдфырвалод рдлфоырва лдорфылодвар лодрфылводар лодфырва лдорфылвоа рлодфырва длорфылдвар лдофырав лдофырва лодыфвра',
                _i:'https://cdn.vuetifyjs.com/images/cards/docks.jpg'
              },
          ]
           // background image
        }

      },

      {
        // name section
        _n: 'SectionWrap',
        // data section
        _props: {
          _ti: 'Title  Header Block ',
          _de: 'If you want to prepare Borsht. See reciept bottom',  //
          _he:350,
          _tc: 'align-center',
          _co:2,
          _bi: 'https://previews.123rf.com/images/timolina/timolina1710/timolina171000285/88030343-traditional-ukrainian-russian-borscht-with-white-beans-on-the-bowl-.jpg', // background image
        }

      },

      {

        _n: 'SectionWrap',
        _props: {
          _ti: 'Popular questions about Borsch',  //
          _de: 'Few questions that ask with name dishes',  //
          _bls: [
            {
              _n:'BQa',
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

          _tc: 'primary', // background color
          _bi: '', // background image
        }

      },


      {
        _n: 'SectionWrap',
        _props: {
          _ti: 'About Borsht',  //
          _de: 'Borsht is very good food with beetroot',  //

          _fc: 'xs12 sm12 md6',
          _bls: [
            {
              _n: 'BHtmlText',
              _props: {
               _te: '<h3>He he</h3><p>Borscht derives from an ancient soup originally cooked from pickled stems, leaves and umbels of common hogweed (Heracleum sphondylium), a herbaceous plant growing in damp meadows, which lent the dish its Slavic name. With time, it evolved into a diverse array of tart soups, among which the beet-based red borscht has become the most popular.</p> <p>It is typically made by combining meat or bone stock with sautéed vegetables, which – as well as beetroots – <b>usually include cabbage</b>, carrots, onions, potatoes and tomatoes. Depending on the recipe, borscht may include meat or fish, or be purely vegetarian; it may be served either hot or cold; and it may range from a hearty one-pot meal to a clear broth or a smooth drink. </p><p>It is often served with smetana or sour cream, hard-boiled eggs or potatoes, but there exists an ample choice of more involved garnishes and side dishes, such as uszka or pampushky, that can be served with the soup.</p>',
              }
            },
            {
              _n:'BVideo',
              _props: {
                _vi: 'nejk74AtW0I'
              }
            }
          ]

        }

      },

      {
        _n: 'SectionWrap',
        _props: {
          _ti: 'Video About Borsh',  //
          _de: 'It is shortly video about how to cooking borsh',  //

          _fc: 'md6',
          _bls:[
            {
              _n:'BVideo',
              _props: {
                _vi: 'IqPt750Ptw8'
              }
            },

            {
              _n:'BVideo',
              _props: {
                _vi: 'nejk74AtW0I'
              }
            }
          ]
        }

      }




    ]
 }
