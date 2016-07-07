import React from 'react';
import ReactDOM from 'react-dom';

// Make a class component.
class App extends React.Component {
  render() {
    return <Button>I <Heart/> React</Button>
  }
}

class Button extends React.Component {
  render() {
    return <button>{this.props.children}</button>
  }
}

const Heart = () => <span>Love</span>
//state less function component.
// const Widget = (props) => {
//   return (
//     <div>
//       <input type="text"
//         onChange={props.update} />
//       <h1>{props.txt}</h1>
//     </div>
//   )
// }


ReactDOM.render(
  <App />,
  document.getElementById('app')
);
