

export default {
  "entry": "src/index.js",
  "outputPath":'dist/loanTest',
  "env": {
    "development": {
      "publicPath": '/'
    },
    "production": {
      "publicPath": '/loanTest/'
    }
  },
  // output: {
  // publicPath: '/',
  // },
  "hash": true,
  // "sass": {},
  "disableCSSModules": true,
  "theme": {
    "@primary-color": "#58B8F1",
  },
  // "devtool": "inline-source-map",
  "commons": [
    {
      children: true,
      async: '__common',
      minChunks: 3,
    }
  ],
  "html": {
    "template": "./src/index.ejs"
  },
  "ignoreMomentLocale": true,
  "extraBabelPlugins": [
    [
      "import",
      {
        "libraryName": "antd",
        "style": true,
      }
    ]
  ],
}
