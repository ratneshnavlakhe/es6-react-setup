import React from 'react';
import ReactDOM from 'react-dom';

// Make a class component.
class App extends React.Component {
  render() {
    let txt = this.props.txt;
    return <h1>{txt}</h1>
  }
}

//state less function component.
//const App = () => <h1>Hello World</h1>

App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
  txt: 'this is the default txt'
}

ReactDOM.render(
  <App cat={5} />,
  document.getElementById('app')
);
