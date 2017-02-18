docker-node
===========

Docker base image with Node.js and Yarn.

Usage
-----

```Dockerfile
FROM gnkt/node:latest

WORKDIR /opt/app

COPY . .
yarn install --pure-lockfile
```

Versions
--------

  - `latest`
  - `4.7`
  - `4.7-onbuild`
  - `4.7-slim`
  - `4.7-wheezy`
  - `6.9`
  - `6.9-onbuild`
  - `6.9-slim`
  - `6.9-wheezy`
  - `7.5`
  - `7.5-onbuild`
  - `7.5-slim`
  - `7.5-wheezy`

License
-------
[MIT](https://opensource.org/licenses/MIT)