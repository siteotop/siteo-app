

export const PropHeight = function(validators) {
  return {
    name: 'v-slider',
    props: {
      min: validators.min||0,
      max: validators.max||100,
      thumbLabel: true,
      inverseLabel: true,
      alwaysDirty: true,
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

import {default as Background} from '../../Class/Background.vue';

export const PropColor = function () {
  return {
    name: Background,
    props: {}
  }

}

import {default as Elevation} from '../../Class/ElevationN.js';
export const PropClassElevation = function () {
  return {
    name: Elevation,
  }

}
