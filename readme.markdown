# react-starter-es6

[![build status](https://travis-ci.org/h02e56/react-starter-es6.svg?branch=master)](http://travis-ci.org/h02e56/react-starter-es6)
[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

bare-bones [react](https://facebook.github.io/react/) es6 starter
using [reactify](https://npmjs.com/package/reactify) for jsx
using [babelify](https://github.com/babel/babelify) for [Babel](https://babeljs.io)
under [browserify](http://browserify.org)/[watchify](https://npmjs.com/package/watchify)
with [npm run scripts](http://substack.net/task_automation_with_npm_run)
with [browserSync](http://www.browsersync.io) for live reload
with [standard](https://github.com/feross/standard) for linting

[view the starter demo](http://h02e56.com/react-starter-es6)

# quick start

```
$ npm install
$ npm run dev
```

# commands

* `npm run build` - build for production
* `npm run dev` - start dev server with auto realod and automatically recompile during development
* `npm start` - start a static development web server
* `npm test` - code style revision

# starter code 

``` js
import React from 'react'

class App extends React.Component {
  constructor (props) {
    super()
    this.state = props
  }
  handleClick () {
    this.setState({
      n: this.state.n + 1
    })
  }
  render () {
    return (<div>
      <h1>clicked {this.state.n} times</h1>
      <button onClick={this.handleClick.bind(this)}>click me!</button>
    </div>)
  }
}

App.propTypes = { n: React.PropTypes.number }
App.defaultProps = { n: 1}

React.render(<App />, document.querySelector('#content'))
```
