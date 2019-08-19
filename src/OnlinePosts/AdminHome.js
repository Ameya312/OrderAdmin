import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import GetOnlinePosts from './GetOnlinePosts';
import './GetDates.css';
import GetDates from './GetDates';
import Register from '../Scripts/Register';
import My_order from '../Scripts/my_order';

class AdminHome extends Component {
  render() {
    return (
      <div>
        <h1>INCEDO</h1>
        <div id="abc">.</div>
        <br/>
        <h2>ADMIN</h2>
        <button class="button1"  onClick={()=>ReactDOM.render(<Register role = "ADMIN"/>, document.getElementById('root'))}>Register new admin</button> 
        <br/><br/><br/><button class="button1"  onClick={()=>ReactDOM.render(<My_order role = "ADMIN"/>, document.getElementById('root'))}>Order Snacks</button>      
     
        <br/><br/>
        <div className="container">
          <table>
            <tr>
              <th><button class="getD" onClick={()=>ReactDOM.render(<GetOnlinePosts/>, document.getElementById('root'))}>MENU CONFIGURATION</button></th>
              <th width="50"></th>
              <th><button class="getD" onClick={()=>ReactDOM.render(<GetDates/>, document.getElementById('root'))}>REPORT GENERATION</button></th>
            </tr> 
            </table>
        </div>
      </div>
    );
  }
}

export default AdminHome;
