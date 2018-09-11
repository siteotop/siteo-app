import * as components from './Sections';

export default {
    

    render(h ) {

        return h('div', _PRERENDER.content.map(function(section) {
            return h(components[section._n], { props: section._props  }  )
        }))

    }

}
