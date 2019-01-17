var express = require('express');
var server = express();
const fs = require('fs');

const configsAPI = require('./configs');

const renderer = require('vue-server-renderer').createRenderer({
  template: fs.readFileSync('./ssr/index.template.html', 'utf-8')
});

const NODE_ENV = process.env.NODE_ENV || "production";
if (NODE_ENV !='production')  {
   // SSL sertificate not work on local development
    process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
}

//const { createBundleRenderer } = require('vue-server-renderer');

server.use(express.static('static'));
// server.js
const createApp = require('./dist/built-server-bundle.js');

server.get('*', (req, res) => {
  const context = { url: req.url, configsAPI:configsAPI};

  createApp(context).then(app => {

    renderer.renderToString(app, context, (err, html) => {
      if (err) {
        //console.log(JSON.stringify(err));
        if (err.code === 404) {
          res.status(404).end('404 error')
        } else {
          res.status(500).end('500 error')
        }
      } else {
        res.end(html)
      }
    })
  }).catch(error=>{

    if (NODE_ENV !='production')  {
      var return_error = '';
      console.log(error);
      if (error.response) {
         return_error = JSON.stringify(error.response.data);
      }

      res.status(500).end('<div>Error: '+ (return_error||JSON.stringify(error)) +'</div>');
    } else {
      res.status(500).end('500 createApp error')
    }

  })
})


server.listen(8080, function() {

});
