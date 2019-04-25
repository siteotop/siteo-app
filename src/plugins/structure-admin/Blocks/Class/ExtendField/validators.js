
import * as baseClasses from './helper-values';
import colors from 'vuetify/es5/util/colors'

const FINDER_FOR_CLASS = {

  /**
    @example elevation-3 https://vuetifyjs.com/ru/framework/elevation
  */
  elevation: function (className) {
     return  /elevation-([0-2]?[0-9])/.test(className);
  },

  /**
    @example hidden-xs-only
  */
  hidden: function(className) {
    var regeg_string = new RegExp('hidden-('+baseClasses.breakpoint.join('|')+')-('+ baseClasses.condition.join('|')+')');
    return  regeg_string.test(className);
  },

  /**
    @example
  */
  textsize: function(className) {
    return baseClasses.topography.find((element)=>element==className);
  },

  /**
    @example  font-weight-light
  */
  textweight: function(className) {
    return baseClasses.fontweight.find((element)=>element==className);
  },

  /**
    @example  fon
  */
  texttransform: function(className) {
    return baseClasses.texttransform.find((element)=>element==className);
  },

  /**
    @example  fon
  */
  textwrap: function(className) {
    return baseClasses.textwrap.find((element)=>element==className);
  },

  /**
    @example ma-2 mx-4 and others https://vuetifyjs.com/ru/framework/spacing
  */
  margin: function(className) {
    var regeg_string = new RegExp('m('+baseClasses.direction.join('|')+')-([0-5])');
    return  regeg_string.test(className);
  },

  /**
    @example pa-2 px-4 and others https://vuetifyjs.com/ru/framework/spacing
  */
  padding: function(className) {
    var regeg_string = new RegExp('p('+baseClasses.direction.join('|')+')-([0-5])');
    return  regeg_string.test(className);
  },

  /**
    @example text-xs-center https://vuetifyjs.com/ru/framework/alignment
  */
  textalign: function(className) {
    var regeg_string = new RegExp('text-('
    + baseClasses.breakpoint.join('|')+')-('
    + baseClasses.align.join('|')+')');
    return  regeg_string.test(className);
  },

  /**
    @example d-flex   https://vuetifyjs.com/ru/framework/display
  */
  display: function (className) {
    var regeg_string = new RegExp('d-('
    +baseClasses.display.join('|')+')');
    return  regeg_string.test(className);
  },

  /**
    @example red--text or  text--lighten-2
  */
  textcolor: function (className) {
    return  /([\-]{2})text|text([\-]{2})/.test(className);
  },

  blocklayout: function(className) {
    return baseClasses.blocklayout.find((element)=>element==className);
  },

  blockwrap: function(className) {
    return baseClasses.blockwrap.find((element)=>element==className);
  },

  blockflex: function(className) {
    return baseClasses.blockflex.find((element)=>element==className);
  },

  gridlist: function(className) {
    var regeg_string = new RegExp('grid-list-('+baseClasses.breakpoint.join('|')+')');
    return  regeg_string.test(className);
  },

  /**
    @example offset-xs12
  */
  offset: function(className) {
    var regeg_string = new RegExp('offset-('+baseClasses.breakpoint.join('|')+')([0-9]{1,2})');
    return  regeg_string.test(className);
  },

  /**
    @example order-xs12
  */
  order: function(className) {
    var regeg_string = new RegExp('order-('+baseClasses.breakpoint.join('|')+')([0-9]{1,2})');
    return  regeg_string.test(className);
  },

  /**
    @example xs2, lg5
  */
  flexsize: function(className) {
    var regeg_string = new RegExp('('+baseClasses.breakpoint.join('|')+')([0-9]{1,2})');
    return  regeg_string.test(className);
  },


  /**
    @example red, blue, light-green
  */
  background: function (className) {


    var color_classes = className.split(' ');
    var color_name = color_classes[0].replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
    if (!colors[color_name]) {
      if (!['black','white', 'transparent', 'primary', 'secondary', 'accent'].find((element)=>element==color_name)) {
        return false;
      }
    }

    if (color_classes.lenght>1) {
      return  /(lighten|darken)-([1-5])/.test(color_classes[1]);
    } else {
      return true;
    }
    return false;
  }

}


export const findClassInRegex = function (className, componentName) {
  for (var regex_name in FINDER_FOR_CLASS) {
     var result = FINDER_FOR_CLASS[regex_name](className);
     if (result) {
       return regex_name;
     }
  }
  return false;
}
