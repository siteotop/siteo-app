



export const PPl = {

  p/*_props*/: {

    //backgroundColor: props.cnf.
    a: 'readyPropColor',
    //backgroundOpacity: props.cnf.
    b: {
      $comp: 'PropTitle',
      default:''
    },
    //bufferValue: props.cnf.
    c: {
      $comp: 'PropHeight',
      validators: {min:0, max:100},
      default: 3
    },

    //color: props.cnf.
    d: 'readyPropColor',

    //dark: props.cnf.
    e: 'readyPropBoolean',

    //light: props.cnf.
    f: 'readyPropBoolean',

    //height: props.cnf.
    g:  {
      $comp: 'PropHeight',
      validators: {min:0, max:30},
      default: 3
    },

    //rounded: props.cnf.
    h: 'readyPropBoolean',

    //striped: props.cnf.
    i: 'readyPropBoolean',

    //value: props.cnf.


    // slot value
    s: 'readyPropBoolean'

  },

  d/*_data*/: {
    a: {
      $comp: 'PropHeight',
      validators: {min:0, max:100},
      default: 30
    },
  }



}
