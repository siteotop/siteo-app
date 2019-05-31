

//RootToolbar
export const RAb = {
  t: 'App bar',
  d: 'Toolbar for app (RootToolbar)',
  helperProps: {

    h: {
      t: 'height',
      d: 'Designates a specific height for the toolbar'
    },

    d: {
      t: 'Dark',
      d: 'Positions the toolbar offset from an application VDrawer'
    },

    s: {
      t: 'clipped-left',
      d: 'Designates that the applications <Drawer> is clipped on the left side of the toolbar'
    },

    t: {
      t: 'clipped-right',
      d: 'Designates that the applications <Drawer> is clipped on the right side of the toolbar'
    },

    e: {
      t: 'dense',
      d: 'Reduces the height of the toolbar content and extension'
    },

    c: {
      t: 'Color',
      d: 'Background color'
    },

    //collapse: cnf.
    a: {
      t: 'collapse',
      d: 'Puts the toolbar into a collapse state'
    },

    //elevation: cnf.
    b: {
      t: 'elevation',
      d: 'Designates an elevation between 0 and 24'
    },

    //flat: cnf.
    f: {
      t: 'flat',
      d: 'Removes the toolbar box-shadow'
    },

    //floating: cnf.
    g: {
      t: 'floating',
      d: 'Makes the toolbar float inline'
    },

    //light: cnf.
    i:{
      t: 'light',
      d: 'Applies the light theme variant'
    },

    //prominent: cnf.
    n: {
      t: 'prominent',
      d: 'Increases the height of the toolbar content to 128px'
    },

    //short: cnf.
    r: {
      t: 'short',
      d: 'Reduce the height of the toolbar content to 56px (112px when using with short)'
    },

    //tile:  cnf.
    o: {
      t: 'tile',
      d: 'Removes the components border-radius'
    },

    q: {
      t: 'src',
      d: 'Specifies an image background'
    },

    //collapseOnScrollt
    y: {
      t: 'collapseOnScroll',
      d: 'Collapse the toolbar when scrolling'
    },

    //elevateOnScroll= cnf.
    v:  {
      t: 'elevateOnScroll',
      d: 'Elevate the toolbar from 0dp to 4dp when scrolling'
    },

    //props.fadeImgOnScroll = cnf.
    w:  {
      t: 'fadeImgOnScroll',
      d: 'When using the src prop or img scoped slot, will fade the image when scrolling'
    },

    //props.hideOnScroll = cnf.
    x:  {
      t: 'hideOnScroll',
      d: 'Will transition the toolbar off screen when scrolling down'
    },

    //props.invertedScroll= cnf.
    u: {
      t: 'invertedScroll',
      d: 'Will slide out of view when scrolling down and back into view when scrolling up'
    },

    //props.scrollOffScreen= cnf.
    z: {
      t: 'scrollOffScreen',
      d: 'Scroll the entire v-app-bar (including extension) off screen.'
    },

    //props.scrollTarget= cnf.
    ab: {
      t: 'scrollTarget',
      d: 'Assigns the scroll target'
    },

    //props.scrollThreshold = cnf.
    ac: {
      t: 'scrollThreshold',
      d: 'The amount of scroll distance down before hide-on-scroll activates.'
    },

    //props.shrinkOnScroll  = cnf.
    ad: {
      t: 'shrinkOnScroll',
      d: 'Shrinks a prominent toolbar to a dense or short (default) one'
    },

    //props.shrinkOnScroll  = cnf.
    ad: {
      t: 'fixed',
      d: 'fixed bar'
    },


  }
}

//toolbar title
export const TTl = {
  t: 'Title',
  d: 'Website title',
}
// toolbar toogle
export const TTg = {
  t: 'Toogle',
  d: 'Toogle for <Drawer>',
}


export const PTr = {
  t: 'Toolbar',
  d: 'Toolbar for <card> or <drawer>',
  helperProps: RAb.helperProps
}
