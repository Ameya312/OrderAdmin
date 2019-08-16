import React from 'react';
import ReactDOM from 'react-dom';
import My_order from'./Scripts/my_order';
import './App.css'
import incedo from './download.png'
import AdminHome from './OnlinePosts/AdminHome'

class App extends  React.Component {
  constructor(props){
    super(props);
    this.state = { //state is by default an object
      Username:"blank",
      PWD:"blank",
      LoginStatus: false,
   }
   this.handleUsername = this.handleUsername.bind(this);
   this.handlePass = this.handlePass.bind(this);

  }
  checkUser(){
  if(this.state.Username=="admin" && this.state.PWD=="1234")
{
  ReactDOM.render(<AdminHome/>, document.getElementById('root'))
}
else if(this.state.Username=="user" && this.state.PWD=="1234")
{
  ReactDOM.render(<My_order/>, document.getElementById('root'))
}
else{
  alert("invalid credential");
}

}
fetchCredintials(){
  fetch("http://localhost:8080/login?userName="+this.state.Username+"&userName="+this.state.PWD+"", {

      method:"GET"
  }).then(response => {
console.log(response)
          return response.text()
      }).then(json => {
          this.setState({ 
              LoginDetail:json
          });
      });
}



handleUsername(e){
  this.setState({Username:e.target.value});
}
handlePass(e){
  this.setState({PWD:e.target.value});
}
  
  render (){

  return (
    <body>
      <div className="App">
        <header className="App-header">
          <center>
              <img src={incedo} alt="Incedo Logo" width="50%"/>
              <table>
              <tr>
                <td><label>userId</label></td><td><input type="text" placeholder="enter userId" name="formUserName"  onChange={this.handleUsername}></input></td>
              </tr>
              <tr>
                <td><label>password</label></td><td><input type="password" placeholder="enter password" name="PWD" onChange={this.handlePass}></input></td>
              </tr>
              <tr>
                <td><button onClick = {()=>this.checkUser()} class="appB">login</button></td>
              </tr>
            </table>
          </center>      
        </header>
      </div>
    </body>
  )
  }
}

export default App;