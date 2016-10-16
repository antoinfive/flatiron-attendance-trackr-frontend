import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import open from 'open';
import bodyParser from 'body-parser';
var localStorage = require('localStorage')
// import {LocalStorage} from 'node-localstorage'
// global.localStorage = require('localStorage')
// var store = require('./store')
// store.set('foo', 1)
// console.log(store.get('foo'))

// var localStorage = new LocalStorage('./scratch')
// /* eslint-disable no-console */



const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

var jsonParser = bodyParser.json()

app.get('/login', function(req, res) {
  console.log('you did it')
  console.log(req.query.jwt)
  localStorage.setItem('jwt', req.query.jwt)
  res.redirect('/')
  // const jwt = req.body.jwt
  // console.log(req.body.jwt);
  // // window.sessionStorage.setItem('jwt', jwt)
  // console.log(localStorage.getItem('jwt'))
  // res.status(204)
  // localStorage.setItem('jwt', 'hi');


  //fetch('http://localhost:3000')
  // res.redirect('/')
  // put the token from the req body in sessionStorage
  // redirect somehow to get * 
})

app.get('*', function(req, res) {
  console.log('inside get * after redirect')
  res.sendFile(path.join( __dirname, '../src/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
