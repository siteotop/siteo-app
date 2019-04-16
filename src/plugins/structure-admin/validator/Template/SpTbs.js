
import {SpLay} from './SpCt';

export const SpTbs = {
  _p: {
    alignWithTitle: 'readyPropBoolean',
    right: 'readyPropBoolean',
    centered: 'readyPropBoolean',
    color: 'readyPropColor',
    dark: 'readyPropBoolean',
    light: 'readyPropBoolean',
    fixedTabs: 'readyPropBoolean',
    grow: 'readyPropBoolean',
    hideSlider: 'readyPropBoolean',
    iconsAndText: 'readyPropBoolean',
    //mobileBreakPoint: 'readyPropBoolean',
    showArrows: 'readyPropBoolean',
    sliderColor: 'readyPropColor'

  },
  _c: ['background', 'elevation'],
  _ch: ['SpTbsi']

}


export const SpTbsi = {
  _p: {
    trn: 'readyPropTransition',
    rtrn: 'readyPropTransition',
    ...SpLay._p,
  },

  _d: {
    t: 'readyPropDataTitle'
  },

  _ch: SpLay._ch

}
