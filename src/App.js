import './App.css';
import React, {Component} from 'react';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class App extends Component {
  state = {
    username: 'Adesh Chauhan'
  }

  changeNameHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <UserInput change={this.changeNameHandler} username={this.state.username}/>
        <UserOutput username={this.state.username}/>
      </div>
    )
  }
}

export default App;
