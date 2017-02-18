const fs = require('fs');
const path = require('path');
const rimraf = require('rimraf').sync;
const config = require('./config');

const context = path.resolve(__dirname, '..');

config.versions.forEach((version) => {
  const versionPath = path.join(context, version);
  rimraf(versionPath);
});