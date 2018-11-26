
/**
  extend module for all OneItem object
*/
export default {

    props: {
      objectId: {
        type: [String, Number]

      },



    },

    created() {
        this.$store.dispatch(this.$options.storeName + '/searchObjectInItems', this.objectId ).then(response=>{
          console.log(response);
        })
    }




}
