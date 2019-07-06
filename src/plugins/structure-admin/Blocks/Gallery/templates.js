
export default  {

    api: {url: '/apps/designer/templates'},
    items: { getfullObjectFromServer: true},

    state () {
        return {
          title: '',
          type: '',
          jsonStructure: '' // json structure for template
        }
    }

  }
