import express from "express";
import webpack from "webpack";
import path from "path";
import config from "../webpack.config.dev.js";
import open from "open";


/* eslint-disable no-console */

const port = 3000;
const app = express();
const comiler = webpack(config);

app.user(require('webpack-dev-middleware').compiler, {
  noinfo: true,
  publicPath: config.output.publicPath
}));

app.user(require('webpack-hot-middleware')(compiler));

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://locahost:$(port)}`);
    }
});
