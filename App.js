import React from 'react';
import ReactDOM from 'react-dom';

// Make a class component.
class App extends React.Component {
  constructor() {
    super();
    this.state = { increasing: false };
    this.update = this.update.bind(this);
  }

  update() {
    ReactDOM.render(
      <App val={this.props.val+1} />,
      document.getElementById('app')
    );
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ increasing: nextProps.val > this.props.val })
  }

  render() {
    console.log(this.state.increasing);
    return <button onClick={this.update}>{this.props.val}</button>
  }
  shouldComponentUpdate(nextProps, nextState) {
    //update only if passes the condition
    return nextProps.val % 5 === 0;
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('prevProps', prevProps);
  }
}

App.defaultProps = { val: 0 }

export default App
