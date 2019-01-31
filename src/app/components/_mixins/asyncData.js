
export default {

  beforeMount () {
   console.log('before Mount');
   const { asyncData } = this.$options

     // присваиваем операцию загрузки к Promise
     // чтобы в компонентах мы могли делать так `this.dataPromise.then(...)`
     // для выполнения других задач после готовности данных
     console.log(this.$route);
     var result = asyncData({
       store: this.$store,
       route: this.$route
     });


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
