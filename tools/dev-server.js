import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import open from 'open';
import bodyParser from 'body-parser';
// import cookieSession from 'cookie-session'
import session from 'express-session'
import request from 'request'

var FileStore = require('session-file-store')(session);

// var express = require('express');
// var router = express.Router();
// var request = require('request');


 /* eslint-disable no-console */



const port = 3000;
const app = express();
const compiler = webpack(config);

// app.use(cookieSession({
//   name: 'session',
//   keys: ['jwt', 'testing']
// }))

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use(session({
  name: 'server-session-cookie-id',
  secret: 'my express secret',
  saveUninitialized: true,
  resave: true,
  cookie: {
    secure: false,
    maxAge: 2160000000,
    httpOnly: false
  },
  store: new FileStore()
}));

app.get('/login', function(req, res) {
  console.log('you did it')
  console.log(req.query.jwt)
  // req.cookies.set('jwt', req.query.jwt)
  req.session.jwt = req.query.jwt
  req.session.save
  console.log('wrote to session??')
  console.log(req.session)
  res.redirect('/')
  
})

app.get('/fetchCurrentUser', function(req, res, next) {
  console.log(req.session)
  // console.log(req.cookies.get('jwt'))
  req.session.testing = 'testing session persistance'
  console.log(req.session.jwt)
  console.log('in express fetch current user')
  request({
    uri: 'http://localhost:5000/api/me',
    headers: {
      "Authorization": `Bearer ${req.session.jwt}`
    }
  }).pipe(res);
});

// app.get('/getStudents', function(req, res) {
//   // api call to rails using token from req.session.jwt
// })

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
