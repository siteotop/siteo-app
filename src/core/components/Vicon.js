
/**

After install Vuetify, need  change render function for v-icon

Put this render function instead native render function
*/
export default {
    name: 'v-icon',
    functional: true,
    props: {
        // TODO: inherit these
        color: String,
        dark: Boolean,
        light: Boolean,
        disabled: Boolean,
        large: Boolean,
        left: Boolean,
        medium: Boolean,
        right: Boolean,
        size: {
            type: [Number, String]
        },
        small: Boolean,
        xLarge: Boolean
    },
    render: function render(h, _a) {
        var props = _a.props,
            data = _a.data,
            parent = _a.parent,
            _b = _a.listeners,
            listeners = _b === void 0 ? {} : _b,
            _c = _a.children,
            children = _c === void 0 ? [] : _c;
        var small = props.small,
            medium = props.medium,
            large = props.large,
            xLarge = props.xLarge;
        var sizes = { small: small, medium: medium, large: large, xLarge: xLarge };
        var explicitSize = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_3__["keys"])(sizes).find(function (key) {
            return sizes[key] && !!key;
        });
        var fontSize = explicitSize && SIZE_MAP[explicitSize] || Object(_util_helpers__WEBPACK_IMPORTED_MODULE_3__["convertToUnit"])(props.size);
        var newChildren = [];
        if (fontSize) data.style = __assign({ fontSize: fontSize }, data.style);
        var iconName = '';
        if (children.length) iconName = children[0].text;
        // Support usage of v-text and v-html
        else if (data.domProps) {
                iconName = data.domProps.textContent || data.domProps.innerHTML || iconName;
								// Remove nodes so it doesn't
                // overwrite our changes

                delete data.domProps.textContent;
                delete data.domProps.innerHTML;
            }
        // Remap internal names like '$vuetify.icons.cancel' to the current name for that icon
        iconName = remapInternalIcon(parent, iconName);

        var iconType = 'material-icons';
        // Material Icon delimiter is _
        // https://material.io/icons/
        var delimiterIndex = iconName.indexOf('-');
        var isCustomIcon = delimiterIndex > -1;
        if (isCustomIcon) {
            iconType = iconName.slice(0, delimiterIndex);
						//console.log(iconType);
            if (isFontAwesome5(iconType)) iconType = '';
            // Assume if not a custom icon
            // is Material Icon font
        } else newChildren.push(iconName);
        data.attrs = data.attrs || {};
        if (!('aria-hidden' in data.attrs)) {
            data.attrs['aria-hidden'] = true;
        }
        var classes = __assign({}, props.color && addTextColorClassChecks.call(props, {}, props.color), { 'v-icon--disabled': props.disabled, 'v-icon--left': props.left, 'v-icon--link': listeners.click || listeners['!click'], 'v-icon--right': props.right, 'theme--dark': props.dark, 'theme--light': props.light });
        // Order classes
        // * Component class
        // * Vuetify classes
        // * Icon Classes

        data.staticClass = ['v-icon', data.staticClass, Object.keys(classes).filter(function (k) {
            return classes[k];
        }).join(' '), iconType, isCustomIcon ? iconName : null].filter(function (val) {
            return !!val;
        }).join(' ').trim();

				/*
				console.log(iconName);
				console.log(data);
				console.log(iconType);
				console.log(newChildren);*/
				/**
          MY REALIZATIONS
        */
				return h('i', data, [
						h('AppIcon', {props: {name: iconName}})
				]);


				// native realizations
        return h('i', data, newChildren);
    }
}
