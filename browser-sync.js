#!/usr/bin/env node
'use strict'
var browserSync = require('browser-sync')

var bs = browserSync.create()

bs.init({
  server: './public',
  files: ['./**/*.js'],
  open: false,
  online: false,
  browser: 'google chrome'
})
