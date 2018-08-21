
import localforage from "localforage";





const cacheStorage = {

    


}



localforage.config({
   name        : 'myApp',
});
localforage.setItem('key/sfsdf/sdfsdf/', {name: 'name'}).then(function () {
  return localforage.getItem('key');
}).then(function (value) {
  console.log(value);
  // we got our value
}).catch(function (err) {
  console.log(err);
  // we got an error
});
