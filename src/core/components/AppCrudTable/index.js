import CrudCore from 'core/components/AppCrudList/mixins/core.js';
import {HelperMenuListRenderMenu, HelperMenuDownRenderMenu} from 'core/components/helper/MenuActions';
export default {

    mixins: [CrudCore],

    /**
      when we get info about  one object, we  will be getting from list items, (not query to the server)
    */
    $confirm: true,


    created() {

        this.prepareHeaders();
    },

    methods: {


       /**
            prepare headers before create table
       */
        prepareHeaders() {
            //Actions
            if (this.actions) {
                this.headers.push({text:'', value: 'actions', sortable: false, align:'right'});
            }
        },


        /**
            render action  for table
        */


        /**
          @return slot for table list when data loads
        */
        renderProgressSlot(h) {
           return h('v-progress-linear', {
              props: {color: 'blue', indeterminate: true },
              slot: 'progress'
            })
        },

        /**
          @return  slot for tablelist, slot
        */
        renderNodataSlot(h) {
           return   h('template', {

              slot: 'no-data'
            }, [
               this.$_LocalMessages_render(h)
            ])
        },

        /**
          @return table for list
        */
        renderCRUDBody(h) {
           var self = this;
           return   h('v-data-table', {
              props: {
                  headers: self.computedHeaders,
                  items: self.filterItems,
                  loading: self.isLoaderActive
              },
              /**
                slot items for table
              */
              scopedSlots: {

                items: function(props) {
                    return  self.headers.map(function(header) {
                        if (header.value =='actions') {
                            return h('td',
                              {
                                  class: {
                                    'text-xs-right': (self.$vuetify.breakpoint.xs? false: true),
                                  //  layout: true,
                                    'px-0': true
                                  }
                              },

                            // !props.item['actionOff']?
                                (self.$vuetify.breakpoint.xs?
                                  [HelperMenuDownRenderMenu(h,  props.item.actions)]:
                                  HelperMenuListRenderMenu(h,  props.item.actions))
                             //: ''
                           )
                        } else {
                            return h('td', [props.item[header.value]])
                        }

                    });


                }
              }




          },
          [
             //this.renderNodataSlot(h),
             this.renderProgressSlot(h)
          ]


        );

      },

      helperItemFilter(item) {
          return item;
      }

    },

    computed: {



      computedHeaders() {

          if (!Object.keys(this.contentI18N.content).length) {
             return this.headers;
          }
          for (let i in this.headers) {
              this.headers[i].text = this.$_ContentI18N_get('content', ['_f', this.headers[i].value,  'l' ], false);
           }

           return this.headers;


      },

      filterItems() {
        //return this.items;
        var self =this;
        return this.items.map(function(item){
            var newItem = item;
            newItem.actions = self.createDefaultActions(newItem[self.nameElementId]);
            return self.helperItemFilter( newItem);
        });
      }


    },



    render(h) {
        return this.renderCoreComponent(h);
    }

}
