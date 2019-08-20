import Padding from './Padding';

export default {
  extends: Padding,
  $type: 'm',

  computed: {
      items() {
          var cls =  this.generateClases();
          cls.push('mx-auto', 'my-auto', 'ma-auto');
          return cls;
      }
  }


}
