

import AppComponentToolbar from '../../AppComponentToolbar';
import MixinLocalMessages from '../../../_mixins/LocalMessages.js';
import AppConfirm from '../../AppConfirm.vue' ;
import AppFieldPlainText from '../Fields/AppFieldPlainText';
import AppFieldPhone from '../Fields/AppFieldPhone';
import AppFieldServices from '../Fields/AppFieldServices';
import AppFieldDate from '../Fields/AppFieldDate.vue';

export default {

  mixins: [ MixinLocalMessages],

  components: {
    AppComponentToolbar,
    AppConfirm,
    AppFieldPlainText,
    AppFieldPhone,
    AppFieldServices,
    AppFieldDate
    },

  methods: {

    renderConfirm(h) {

        return this.leaveform? h('AppConfirm', {
          props: {
            dialog:true,
            func: this.leaveform,
            title: this.$t('commonForm.leave'), description:this.$t('commonForm.leave_desc')},
          on: {hideDialog:()=>{this.leaveform=false} }}): '';

    },

    /**
      Create Submit blcok for Form
    */
    renderSubmit(h) {
      var self = this;
      return h('v-layout', {
          props: {row: true,  wrap: true },
          class: ['my-3'],
          directives: [
            {
              name: 'show',
              value: !this.isLoaderActive&&this.buttonSubmit
            }
          ]
        }, [
          h('v-flex', {class: {xs10: true, 'text-xs-left':true}},[
              h('v-btn', {props: {disabled: !this.formActive}, on: {click:function(ev){ self.onSubmit(ev) }} }, [
                self.submitElement.label
              ])
          ]),
          h('v-flex', {class: {xs2: true}}, [
            h('v-tooltip', {
              props: {top: true}}, [
               h('v-btn', {
                 slot:'activator',
                 props: {icon: true, disabled:!self.formActive },
                 on: {click: function () { self.leaveform = self.clearForm}}}, [
                h('AppIcon', {props: {name: 'si-clear'}})
              ]),
              h('span',  [this.$t('commonForm.reset')])
            ])
          ]),

        ])

    },

    renderFooter(h){
      if (!this.$te(this.i18nkey + '.footer')) {
        return '';
      }
      return   h('div', {class:{'pt-2':true, 'grey--text':true}}, [
          this.$i18n_t('footer.text'),
          ' ',
          this.$i18n_te('footer.action')? h('router-link', {props: {to: this.$i18n_t('footer.action.to')}}, [this.$i18n_t('footer.action.text')]): ''
      ]);
    }


  },


  render(h) {
      var self = this ;
      //console.log(this.formStructure);
      return h('v-card', {props: { flat: true, fluid:true}},
        [

          // toolbar
          this.needToolbar? h('AppComponentToolbar', {props: {
            iconTitle: this.iconTitle,
            title: this.$i18n_t('title'),
            desc: this.$i18n_t('description')
          }}): '',
          // v-card-tex
          h('v-container', { class: 'grid-list-sm'}, [
           this.$_LocalMessages_render(h),
           h('v-layout', { attrs: {row:true,  wrap:true, 'align-end': true}},
            [
              this.formStructure.map(function(el){



                return  h('v-flex', {class: 'xs12' },
                    [  h(el.name, {
                      props:el.props,
                      attrs:{ name: el._n},
                      on: {
                        input: function(event) {
                          //console.log(event);
                          //self.valueStructure[el.props.name] = event;
                          el.props.value = event;
                          if (event) {
                            self.enableForm();
                          }

                          // console.log(event;);
                        }
                      }
                    })
                ])

           }),

         ]


          ),
           this.renderConfirm(h),
           this.renderSubmit(h),
            h('app-pulse-loader', {props: {loading: this.isLoaderActive} }),
            self.renderFooter(h)
         ]),

        ]
      )
  }


}
