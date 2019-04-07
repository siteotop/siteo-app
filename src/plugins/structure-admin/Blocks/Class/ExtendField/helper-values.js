export const  breakpoint = [
  'xs',
  'sm',
  'md',
  'lg',
  'xl'
];

export const  align = [
  'left',
  'center',
  'right',
];

export const direction = [
  'a',
  't',
  'b',
  'l',
  'r',
  'x',
  'y',
];

export const condition = [
  'only',
  'and-down',
  'and-up'
];

export const display = [
  'inline-flex',
  'flex',
  'inline-block',
  'block',
  'inline',
  'none'
];

export const topography =  [
  'caption',
  'body-1',
  'body-2',
  'subheading',
  'title',
  'headline',
  'display-1',
  'display-2',
  'display-3',
  'display-4',
  'display-5',

];

export const overflow = [


];


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
    var regeg_string = new RegExp('hidden-('+breakpoint.join('|')+')-('+ condition.join('|')+')');
    return  regeg_string.test(className);
  },

  /**
    @example
  */
  textsize: function(className) {
    return topography.find((element)=>element==className);
  },

  /**
    @example ma-2 mx-4 and others https://vuetifyjs.com/ru/framework/spacing
  */
  margin: function(className) {
    var regeg_string = new RegExp('m('+direction.join('|')+')-([0-5])');
    return  regeg_string.test(className);
  },

  /**
    @example pa-2 px-4 and others https://vuetifyjs.com/ru/framework/spacing
  */
  padding: function(className) {
    var regeg_string = new RegExp('p('+direction.join('|')+')-([0-5])');
    return  regeg_string.test(className);
  },

  /**
    @example text-xs-center https://vuetifyjs.com/ru/framework/alignment
  */
  textalign: function(className) {
    var regeg_string = new RegExp('text-('+breakpoint.join('|')+')-('+ align.join('|')+')');
    return  regeg_string.test(className);
  },

  /**
    @example d-flex   https://vuetifyjs.com/ru/framework/display
  */
  display: function (className) {
    var regeg_string = new RegExp('d-('+display.join('|')+')');
    return  regeg_string.test(className);
  },

  /**
    @example red--text or  text--lighten-2
  */
  textcolor: function (className) {
    return  /([\-]{2})text|text([\-]{2})/.test(className);
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
      console.log(color_classes[1]);
      return  /(lighten|darken)-([1-5])/.test(color_classes[1]);
    } else {
      return true;
    }
    return false;
  }

}


export const findClassInRegex = function (className, componentName) {
  for (var regex_name in FINDER_FOR_CLASS) {
    console.log(`Resutl for ${regex_name} = `);
     var result = FINDER_FOR_CLASS[regex_name](className);

     console.log(result);
     if (result) {
       return regex_name;
     }
  }
  return false;
}
