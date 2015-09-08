React e2e testing with Nightwatch.js
===
This repository contains really simple React application that calculates the length of given string.
Testing is done using [Nightwatch.js](http://nightwatchjs.org/) with [PhantomJS](http://phantomjs.org/) against standalone Selenium server. Static HTTP server is used during tests to serve the target application.

[es5-shim](https://github.com/es-shims/es5-shim) is included in order for PhantomJS to play well with React.

Running tests
---
Run `npm install` to install dependencies and `npm test` to run tests.