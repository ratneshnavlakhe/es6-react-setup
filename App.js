import React from 'react';
import ReactDOM from 'react-dom';

// Make a class component.
class App extends React.Component {
  constructor() {
    super(); // its gonna give the context of this in our component
    this.state = {
      txt: ''
    };
    this.update = this.update.bind(this)
  }

  update(e) {
    this.setState({ txt: e.target.value });
  }
  render() {
    return (
      <div>
        <Widget txt={this.state.txt} update={this.update}/>
        <Widget txt={this.state.txt} update={this.update}/>
        <Widget txt={this.state.txt} update={this.update}/>
        <Widget txt={this.state.txt} update={this.update}/>
      </div>
    )
  }
}

//state less function component.
const Widget = (props) => {
  return (
    <div>
      <input type="text"
        onChange={props.update} />
      <h1>{props.txt}</h1>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
