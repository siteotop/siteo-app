
var _Values = require('lodash/values');

import AppComponentToolbar from '../../AppComponentToolbar';
import MixinLocalMessages from '../../../_mixins/LocalMessages.js';
import AppConfirm from '../../AppConfirm.vue' ;
/*
import GoogleRecaptcha from '../../AppFields/AppInputRecaptcha.vue';

import AppCheckbox from '../../AppFields/AppCheckbox.vue';
import AppInputText from '../../AppFields/AppInputText.vue';
import AppSelect from '../../AppFields/AppSelect.vue';
//import AppInputPassword from '../../AppFields/AppInputPassword.vue';
import AppInputDate from '../../AppFields/AppInputDate.vue';
import AppSelectCountries from '../../AppFields/AppSelectCountries.vue';
import AppInputPhone from '../../AppFields/AppInputPhone.vue';
*/
import AppFieldName from '../Fields/AppFieldName';
import AppFieldEmail from '../Fields/AppFieldEmail';
import AppFieldPhone from '../Fields/AppFieldPhone';
import AppFieldServices from '../Fields/AppFieldServices';
import AppFieldDate from '../Fields/AppFieldDate.vue';

export default {

  mixins: [ MixinLocalMessages],

  components: {
    AppComponentToolbar,
    AppConfirm,
    AppFieldName,
    AppFieldEmail,
    AppFieldPhone,
    AppFieldServices,
    AppFieldDate
    //VForm,
    /*  GoogleRecaptcha,
      AppConfirm,
      AppCheckbox,
      AppInputText,
      AppSelect,
      //AppInputPassword,
      AppInputDate,
      AppSelectCountries,
      AppInputPhone,
      AppComponentToolbar
   */},

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
          props: {row: true, wrap: true },
          directives: [
            {
              name: 'show',
              value: !this.isLoaderActive&&this.buttonSubmit
            }
          ]
        }, [
          h('v-flex', {class: {xs10: true}},[
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
      return h('v-card', {props: { fluid:true}},
        [

          // toolbar
          this.needToolbar? h('AppComponentToolbar', {props: {
            iconTitle: this.iconTitle,
            title: this.$i18n_t('title'),
            desc: this.$i18n_t('description')
          }}): '',
          // v-card-tex
          h('v-card-text', [
           this.$_LocalMessages_render(h),
           h('div',

              this.formStructure.map(function(el){
              return h(el.name, {
                props:el.props,
                //attrs:{ value: self.valueStructure[el.props.name]},
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
           }),
           h('app-pulse-loader', {props: {loading: this.isLoaderActive} }),
           self.renderFooter(h)


          ),
           this.renderConfirm(h),
           this.renderSubmit(h)
          ])
        ]
      )
  }
  /**
    RENDER FUNCTION FOR FORM

     render(h) {

           <v-card-text>
           {this.$_LocalMessages_render(h)}
           <div class="pa-3"  >

                {
                  _Values(this.formStructure).map(function(el) {

                    var myinput =function (ev) {
                        el.value = ev;

                        if (el.trim) {
                            el.value = ev.trim();
                            //console.log(el.value);
                        }

                    }


                    switch (el.component) {


                    case 'AppInputRecaptcha' :
                                if (self.formActive) {
                                    return  <div class="mt-2 mb-2">

                                        <google-recaptcha
                                            status={el.reload}
                                            on-changeCaptcha={myinput}
                                        ></google-recaptcha>
                                        <v-alert  outline color="error"  value={el.state}>
                                            {el.feedback}
                                        </v-alert>
                                 </div>
                               }
                              break;
                      case 'AppInputText':
                      case 'AppSelect':
                      case 'AppInputDate':
                      case 'AppInputPhone':
                      case 'AppCheckbox':
                      case 'AppSelectCountries':
                      case 'AppInputPassword':
                      //  console.log(el.type);
                        if (el.renderFunction) {
                          return el.renderFunction(h, el, self);
                        } else {
                          return   self.renderInput(h, el);
                        }

                        break;

                      case 'submit':

                            return <v-layout row wrap v-show={(!self.isLoaderActive&&self.buttonSubmit)}>

                                <v-flex xs10>
                                    <v-btn  disabled={!self.formActive}  on-click={self.onSubmit} color="default" large>{el.label? el.label: "send"}</v-btn>
                                </v-flex>
                                <v-flex xs2>
                                <v-tooltip
                                   top
                                 >
                                   <v-btn
                                     icon
                                     disabled={!self.formActive}
                                     on-click={()=>{ self.leaveform = self.clearForm }  }
                                     slot="activator"
                                   >
                                   <app-icon name="form-clear"></app-icon>
                                  </v-btn>
                                 <span>Reset form</span>
                               </v-tooltip>
                                </v-flex>

                              </v-layout>
                      break;
                      default:

                    }

                  })
                }

                  <app-pulse-loader loading={this.isLoaderActive} ></app-pulse-loader>

                  {self.renderFooter(h)}

           </div>
             {

               self.renderConfirm()

            }
            </v-card-text>
           </v-card>


        return a;

    }
*/

}
