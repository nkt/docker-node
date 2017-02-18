FROM node:7

ENV PATH "$PATH:/root/.yarn/bin"

RUN curl -o- -L https://yarnpkg.com/install.sh | bash
