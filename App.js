import React from 'react';
import ReactDOM from 'react-dom';


let Mixin = InnerComponent => class extends React.Component {
  constructor() {
    super();
    this.state = { val: 0 };
    this.update = this.update.bind(this);
  }

  update() {
    this.setState({ val: this.state.val + 1 })
  }

  componentWillMount() {
    console.log('Will mount')
  }

  render() {
    return <InnerComponent
      update={this.update}
      {...this.state}
      {...this.props} />
  }
  componentDidMount() {
    console.log('mounted');
  }
}

const Button = (props) => <button
                          onClick={props.update}>
                          {props.txt} - {props.val}
                          </button>

let ButtonMixed = Mixin(Button)
// Make a class component.
class App extends React.Component {
  render() {
    return (
      <ButtonMixed txt="button"/>
    );
  }
}

export default App
