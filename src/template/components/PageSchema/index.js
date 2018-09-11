
export default {


    render(h ) {
        var self = this;
        return h('div', _PRERENDER.content.map(function(section) {
            return h(self.$root.$options.ComponetSections[section._n], { props: section._props  }  )
        }))

    }

}
