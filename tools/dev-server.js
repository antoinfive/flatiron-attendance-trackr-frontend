import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import open from 'open';
import bodyParser from 'body-parser';
import session from 'express-session'
import request from 'request'

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);


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
  } 
}));

app.get('/authenticate', function(req, res) {
  console.log(session)
  console.log(session.jwt)
  session.jwt ? res.send(true) : res.send(false)
})

app.get('/Finishlogin', function(req, res) {
  console.log('inside express login  ... request jwt query next')
  console.log('writing to session object')
  session.jwt = req.query.jwt
  console.log('logging session object')
  res.redirect('/')
 
})

app.get('/fetchCurrentUser', function(req, res, next) {
  console.log('in express fetch current user')
  console.log('logging session object')
  console.log(session.jwt)  
  request({
    uri: 'http://localhost:5000/api/me',
    headers: {
      "Authorization": `Bearer ${session.jwt}`
    }
  }).pipe(res);
});

app.get('/fetchAttendanceRecords', function(req, res) {
  request({
    url: 'http://localhost:5000/api/schedules/1/attendance_records',
    headers: {
      "Authorization": `Bearer ${session.jwt}`
    }
  }).pipe(res)
})

// app.get('/getStudents', function(req, res) {
//   // api call to rails using token from req.session.jwt
// })

app.get('*', function(req, res) {
  console.log('inside home')
  res.sendFile(path.join( __dirname, '../src/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
