
export default {

  beforeMount () {
   console.log('before Mount');
   const { asyncData } = this.$options

     // присваиваем операцию загрузки к Promise
     // чтобы в компонентах мы могли делать так `this.dataPromise.then(...)`
     // для выполнения других задач после готовности данных
    var self = this;
    var result = asyncData({
       store: this.$store,
       route: this.$route
     });
     if (result!==undefined) {
       //if promise
       result.catch(function(error){
         if (self.asyncDataError) {
           self.asyncDataError(error.response.data);
         }
       });
     }


 },

 beforeRouteUpdate (to, from, next) {
   const { asyncData } = this.$options
   console.log('update route');
   if (asyncData) {
     asyncData({
       store: this.$store,
       route: to
     }).then(next).catch(next)
   } else {
     next()
   }
 }

}
