import React from 'react'

export class App extends React.Component {
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
App.defaultProps = { n: 1 }
