

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
  return {
    name: ClassComponent,
    props: {
      allow: settings.allow
    }
  }

}


import {default as Background} from '../../Class/Background.vue';

export const PropClassBackground = function () {
  return {
    name: Background,
    props: {}
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
