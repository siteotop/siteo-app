

export const PropHeight = function(settings) {
  return {
    name: 'v-slider',
    props: {
      min: settings.validators.min||0,
      max: settings.validators.max||100,
      thumbLabel: true,
      inverseLabel: true,
      alwaysDirty: true,
    },
  }
}



export const PropTitle = function () {
  return {
    name: 'v-text-field',
    props: {
    },
  }
}

export const PropDescription = function () {
  return {
    name: 'v-textarea',
    props: {
    },
  }
}

export const PropSelect = function (settings) {
  //console.log(settings);
  return {
    name: 'v-select',
    props: {
      items: settings.items,
      menuProps: {
        zIndex:999
      }
    },
  }
}


export const PropBoolean = function() {
  return {
    name: 'v-switch',
    props: {
      falseValue: false,
      trueValue: true,
    }
  }
}



import {default as ClassComponent} from '../Class.vue';

export const PropClass = function (settings) {
  var helper_class = ['background', 'display', 'elevation', 'hidden', 'margin', 'padding',  'textalign', 'textcolor', 'textsize', 'texttransform',  'textweight', 'textwrap'];
  return {
    name: ClassComponent,
    props: {
      forProp: settings.n /*_name*/,
      allow: settings.allow? settings.allow: !settings.additional?  helper_class:  [...settings.additional, ...helper_class ]
    }
  }

}


import {default as Background} from '../../Class/Background.vue';

export const PropClassBackground = function () {
  return {
    name: Background,
    props: {

    }
  }

}

export const PropColor = PropClassBackground;

import {default as Elevation} from '../../Class/ElevationN.js';
export const PropClassElevation = function () {
  return {
    name: Elevation,
  }

}

import {default as Hidden} from '../../Class/Hidden.js';
export const PropClassHidden = function () {
  return {
    name: Hidden
  }
}


import {default as Textsize} from '../../Class/TextSize.js';
export const PropClassTextsize = function () {
  return {
    name: Textsize
  }
}

import {default as Textcolor} from '../../Class/TextColor.js';
export const PropClassTextcolor = function () {
  return {
    name: Textcolor
  }
}

import {default as Textalign} from '../../Class/TextAlign.js';
export const PropClassTextalign = function () {
  return {
    name: Textalign
  }
}

import {default as Textweight} from '../../Class/TextWeight.js';
export const PropClassTextweight = function () {
  return {
    name: Textweight
  }
}

import {default as Texttransform} from '../../Class/TextTransform.js';
export const PropClassTexttransform = function () {
  return {
    name: Texttransform
  }
}

import {default as Textwrap} from '../../Class/TextWrap.js';
export const PropClassTextwrap = function () {
  return {
    name: Textwrap
  }
}

import {default as Flexsize} from '../../Class/Flexsize.js';
export const PropClassFlexsize = function () {
  return {
    name: Flexsize
  }
}

import {default as Offset} from '../../Class/Offset.js';
export const PropClassOffset = function () {
  return {
    name: Offset
  }
}

import {default as Order} from '../../Class/Order.js';
export const PropClassOrder = function () {
  return {
    name: Order
  }
}


import {default as Padding} from '../../Class/Padding.js';
export const PropClassPadding = function () {
  return {
    name: Padding
  }
}

import {default as Display} from '../../Class/Display.js';
export const PropClassDisplay = function () {
  return {
    name: Display
  }
}

import {default as Margin} from '../../Class/Margin.js';
export const PropClassMargin = function () {
  return {
    name: Margin
  }
}


import {default as Blocklayout} from '../../Class/Blocklayout.js';
export const PropClassBlocklayout = function () {
  return {
    name: Blocklayout
  }
}

import {default as Blockflex} from '../../Class/Blockflex.js';
export const PropClassBlockflex = function () {
  return {
    name: Blockflex
  }
}

import {default as Gridlist} from '../../Class/GridList.js';
export const PropClassGridlist = function () {
  return {
    name: Gridlist
  }
}

import {default as Colors} from '../../Colors.vue';
export const PropColorsTheme = function () {
  return {
    name: Colors
  }
}
