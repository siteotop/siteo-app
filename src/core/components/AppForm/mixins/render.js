
var _Values = require('lodash/values');

import AppComponentToolbar from 'core/components/AppComponentToolbar';
import MixinLocalMessages from 'core/components/mixins/LocalMessages.js';


import GoogleRecaptcha from 'core/components/AppFields/AppInputRecaptcha.vue';
import AppConfirm from 'core/components/AppConfirm.vue' ;
import AppCheckbox from 'core/components/AppFields/AppCheckbox.vue';
import AppInputText from 'core/components/AppFields/AppInputText.vue';
import AppSelect from 'core/components/AppFields/AppSelect.vue';
import AppInputPassword from 'core/components/AppFields/AppInputPassword.vue';
import AppInputDate from 'core/components/AppFields/AppInputDate.vue';
import AppSelectCountries from 'core/components/AppFields/AppSelectCountries.vue';
import AppInputPhone from 'core/components/AppFields/AppInputPhone.vue';

export default {

  mixins: [ MixinLocalMessages],

  components: {
    //VForm,
      GoogleRecaptcha,
      AppConfirm,
      AppCheckbox,
      AppInputText,
      AppSelect,
      AppInputPassword,
      AppInputDate,
      AppSelectCountries,
      AppInputPhone,
      AppComponentToolbar
   },

  methods: {

    renderConfirm() {

        return this.leaveform?
         <AppConfirm  dialog={true} on-hideDialog={()=>this.leaveform=false} func={this.leaveform} title={this.$store.getters.DICTIONARY_KEY('form_leave')} description={this.$store.getters.DICTIONARY_KEY('form_leave_desc')} ></AppConfirm> : '';

    },

    renderInput(h, el){
      return h( el.component, { props: {el:el, value: el.value }});
    },

    renderFooter(h){
      if (!this.contentI18N.footer) {
        return '';
      }
      return   h('div', {class:{'pt-2':true, 'grey--text':true}}, [
          this.contentI18N.footer.text,
          ' ',
          h('router-link', {props: {to:this.contentI18N.footer.action.to}}, [this.contentI18N.footer.action.text])
      ]);
    }


  },

  /**
    RENDER FUNCTION FOR FORM
  */
     render(h) {
      var self = this ;
      //console.log(this);
  //   console.log(this.meta.title);
      var a =<v-card flat fluid >
           { this.needToolbar? h('AppComponentToolbar', {props: {iconTitle: this.iconTitle, title:this.contentI18N.title, desc: this.contentI18N.description }}): '' }

           <v-card-text>
           {this.$_LocalMessages_render(h)}
           <div class="pa-3"  >

              {
                  _Values(this.pageStructure).map(function(el) {

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
                      /*  <v-btn  large  color="outline-secondary" on-click={self.clearForm} disabled={!self.formActive}><icon name="form-clear"></icon> Reset </v-btn>
                      */
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


}
