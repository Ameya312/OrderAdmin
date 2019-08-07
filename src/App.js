import React, {Component} from 'react';
import GetOnlinePosts from './OnlinePosts/GetOnlinePosts';
import './App.css';

class App extends Component {
  render() {
    return (
       <div className="container">
        <GetOnlinePosts/>
       </div>
    );
  }
}

export default App;
