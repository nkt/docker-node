const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp').sync;
const config = require('./config');

const context = path.resolve(__dirname, '..');
const template = fs.readFileSync(path.join(context, 'Dockerfile.template'), 'utf-8');

function render(pathName, version, base) {
  const tag = version + (base ? `-${base}` : '');
  const content = template.replace(/%%TAG%%/, tag);
  
  console.log('  - `%s`', tag);
  
  fs.writeFileSync(path.join(pathName, 'Dockerfile'), content);
}

config.versions.forEach((version) => {
  const versionPath = path.join(context, version);
  mkdirp(versionPath);
  
  render(versionPath, version);
  
  if (version === 'latest') {
    return;
  }
  
  config.bases.forEach((base) => {
    const basePath = path.join(versionPath, base);
    mkdirp(basePath);
    
    render(basePath, version, base);
  });
});