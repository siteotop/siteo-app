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


import colors from 'vuetify/es5/util/colors'

const FINDER_FOR_CLASS = {
  elevation: function (className) {
     return  /elevation-([0-2]?[0-9])/.test(className);
  },

  hidden: function(className) {
    var regeg_string = new RegExp('hidden-('+breakpoint.join('|')+')-('+ condition.join('|')+')');
    return  regeg_string.test(className);
  },

  textsize: function(className) {
    return topography.find((element)=>element==className);
  },

  margin: function(className) {
    var regeg_string = new RegExp('m('+direction.join('|')+')-([0-5])');
    return  regeg_string.test(className);
  },

  padding: function(className) {
    var regeg_string = new RegExp('p('+direction.join('|')+')-([0-5])');
    return  regeg_string.test(className);
  },

  textalign: function(className) {
    var regeg_string = new RegExp('p('+breakpoint.join('|')+')-('+ align.join('|')+')');
    return  regeg_string.test(className);
  },

  display: function (className) {
    var regeg_string = new RegExp('d-('+display.join('|')+')');
    return  regeg_string.test(className);
  },

  textcolor: function (className) {
    return  /(--)?text(--)?/.test(className);
  },

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
