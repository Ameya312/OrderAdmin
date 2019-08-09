import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import GetOnlinePosts from './OnlinePosts/GetOnlinePosts';
import './App.css';
import GetDates from './GetDates';

class App extends Component {
  render() {
    return (
      <div>
        <h1>INCEDO</h1>
        <div id="abc">.</div>
        <br/>
        <h2>ADMIN</h2>
        <br/><br/>
        <div className="container">
          <table>
            <tr>
              <th><button id="buttonc" onClick={()=>ReactDOM.render(<GetOnlinePosts/>, document.getElementById('root'))}>MENU CONFIGURATION</button></th>
              <th width="50"></th>
              <th><button id="buttonc" onClick={()=>ReactDOM.render(<GetDates/>, document.getElementById('root'))}>REPORT GENERATION</button></th>
            </tr>            
            </table>
        </div>
      </div>
    );
  }
}

export default App;
