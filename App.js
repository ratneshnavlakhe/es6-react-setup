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

ReactDOM.render(
  <App txt="this is the props value" />,
  document.getElementById('app')
);
