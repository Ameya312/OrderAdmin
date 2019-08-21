import React from 'react';
import ReactDOM from 'react-dom';
import '../Styles/orderSummary.css';
import App from '../App';

class Status extends React.Component{
constructor(props){
    super(props);
    this.state = {status:"",
                }
}
componentDidMount() {
    const orderId = localStorage.getItem('orderId');
    fetch("http://10.151.240.98:8080/user/order/fetchStatus?orderId="+orderId+"", {

        method:"GET"
    }).then(response => {
console.log(response)
            return response.text()
        }).then(json => {
            this.setState({ 
                status:json
            });
        });
}
render(){
    return(
        <div><br/><br/><br/><br/><br/><br/><br/>
            <center>
    <img src="https://www.incedoinc.com/templates/common/images/logo.svg" alt="" width="50%"></img>
    <br/><br/><br/><br/>
    <h1  >{this.state.status}</h1>
    <br/><br/><br/>
    <button onClick ={()=>ReactDOM.render(<App/>, document.getElementById('root'))} class="payN">HOME</button>
    </center>
    </div>
    )
}
}


export default Status;