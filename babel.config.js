const presets = [

    [  "@babel/preset-env",
      {
        //https://babeljs.io/docs/en/babel-preset-env#modules
        modules: false,

        //https://babeljs.io/docs/en/babel-preset-env#targets
        targets: {
          chrome: "41",
          ie: '11'
        },

        //https://babeljs.io/docs/en/babel-preset-env#usebuiltins-entry
        useBuiltIns: "entry",
      }
    ]
];

const plugins = [
  "@babel/plugin-syntax-dynamic-import"
];

module.exports = { presets, plugins };
