import * as React from 'react';
import Button from './components/Button';

interface Props {}

interface State {
  number: number;
}
export default class App extends React.Component<Props, State> {

  state: State = {
    number: 0
  };

  increment = () => {
    this.setState({
      number: (this.state.number + 1)
    })
  }

  decrement = () => {
    this.setState({
      number: (this.state.number - 1)
    })
  }

render() {
    return (
      <div className="App">
        <p>{this.state.number}</p>
        <Button title="Increment" function={this.increment}/>
        <Button title="Decrement" function={this.decrement}/>
      </div>
    );
  }
}