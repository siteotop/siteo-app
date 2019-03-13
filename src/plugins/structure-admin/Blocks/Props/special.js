
export default {

  'AppToolbar': {

      height: {
          name: 'v-slider',
          default: 64,
          props: {
            min: 50,
            max: 120,
            thumbLabel: true,
            alwaysDirty: true,
          //  appendIcon: 'reload',
          }
     },
     app:false, // using automatic
     card: false, // using only in card (toolbar not using card)
     floating: false, // Makes the toolbar float inline
  }

}
