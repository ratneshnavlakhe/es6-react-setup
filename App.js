import React from 'react';
import ReactDOM from 'react-dom';

// Make a class component.
class App extends React.Component {
  constructor() {
    super(); // its gonna give the context of this in our component
    this.state = {
      txt: 'this is the state txt'
    };
  }

  update(e) {
    this.setState({ txt: e.target.value });
  }
  render() {
    return (
      <div>
        <input type="text"
          onChange={this.update.bind(this)} />
        <h1>{this.state.txt}</h1>
      </div>
    )
  }
}

//state less function component.
//const App = () => <h1>Hello World</h1>

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
