import React from 'react';
import ReactDOM from 'react-dom';

// Make a class component.
class App extends React.Component {
  constructor() {
    super();

    this.state = {val: 0, m: 0};
    this.update = this.update.bind(this);
  }

  update() {
    this.setState({ val: this.state.val+1 })
  }

  componentWillMount() {
    this.setState({ m: 2 });
  }
  componentDidMount() {
    this.inc = setInterval(this.update, 500)
  }
  render() {
    console.log('rendering');
    return <button onClick={this.update}>{this.state.val * this.state.m}</button>
  }

  componentWillUnmount () {
    clearInterval(this.inc)
  }
}

class Wrapper extends React.Component {
  mount() {
    ReactDOM.render(<App />, document.getElementById('a'))
  }
  unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('a'))
  }
  render() {
    return (
      <div>
        <button onClick={this.mount.bind(this)}>Mount</button>
        <button onClick={this.unmount.bind(this)}>Unmount</button>
        <div id="a"></div>
      </div>
    )
  }
}

export default Wrapper
