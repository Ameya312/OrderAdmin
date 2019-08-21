import React, { Component } from 'react';
import './GetDates.css';
import ReactDOM from 'react-dom';
import GetOnlinePosts from './GetOnlinePosts';
import AdminHome from './AdminHome';


class GetDates extends Component {

    constructor (props) {
        super(props)
        this.URL_REPORT = "http://10.151.240.98:8000/rest/v1/report/?format=json";
        this.tempURL = 'http://10.151.240.98:8000/rest/v1/report/?format=json&from_date=2009-07-22&to_date=2020-07-31';
        this.postData = "";
        this.option = "today";
        this.today = new Date();
        this.state = {
            error : null,
            isLoaded : false,
            from_date: '' ,
            to_date: '',
            posts : [],
            url:'http://10.151.240.98:8000/rest/v1/report/?format=json',
        }
        this.onChange = this.onChange.bind(this)
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
      }


    getData = (e) => {
        this.URL_REPORT += "&from_date=" + this.state.from_date + "&to_date=" + this.state.to_date;
        this.setState({URL_REPORT: this.URL_REPORT})
        e.preventDefault()

        fetch(this.URL_REPORT)
        .then( response => response.json())
        .then(
            // handle the result
            (result) => {
                this.setState({
                    isLoaded : true,
                    posts : result
                });
            },
            // Handle error
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                })
            },
        )

    }
    render(){
        return(
            <div>
                <h1>INCEDO</h1>
                <div id="abc">.</div>
                <br/><br/>

                <form class="container styling">
                    
                    <div class="input-group date" data-provide="datepicker">

                        <table>
                            <tr>
                                <th>From</th>
                                <th>To</th>
                                <th></th>
                                <th></th>
                            </tr>
                        <tr>
                            <td>
                                <input id="from_date" class="form-control" type="date" name="from_date"
                                    value={this.state.from_date} onChange={this.onChange}
                                    min="2000-01-01" max="2050-12-31">
                                </input>
                            </td>
                            <td>
                                <input id="to_date" class="form-control" type="date" name="to_date" 
                                    value={this.state.to_date} onChange={this.onChange}
                                    min="2000-01-01" max="2050-12-31">
                                </input>
                            </td>
                            <th></th>
                            <th></th>
                        </tr>
                        <tr>
                            <td><button onClick={this.getData} class="getD">GENERATE REPORT</button></td>
                            <td></td>
                        </tr>
                        <button onClick={()=>ReactDOM.render(<AdminHome/>, document.getElementById('root'))} class="adminHome">ADMIN HOME</button>
                        <button onClick={()=>ReactDOM.render(<GetOnlinePosts/>, document.getElementById('root'))} class="getM">MENU CONFIGURATION</button>
                        

                        <br/><br/>
                        
                       
                        </table>

                    </div>
                    <br />
                </form>
                <br/>
                <div>
                    {/* <h4>Report</h4> */}
                    <table class="tabular">
                        <tr>
                            <th width="10%">Date</th>
                            <th width="10%">Cart id</th>
                            <th width="10%">Employee id</th>
                            <th width="20%">Name</th>
                            <th width="20%">Snack name</th>
                            <th width="10%">Quantity</th>
                            <th width="10%">Total</th>
                            <th width="10%">Payment Status</th>
                        </tr>
                    {
                        this.state.posts.map(post => (
                            <tr key={post.id} align="start">
                                <td>{post.date_time}</td>
                                <td>{post.cart_id}</td>
                                <td>{post.emp_id}</td>
                                <td>{post.emp_name}</td>
                                <td>{post.snack_name}</td>
                                <td>{post.qty}</td>
                                <td>{post.ind_total}</td>
                                <td>{post.payment_status}</td>
                            </tr>
                        ))
                    }
                    </table>
                </div>
            </div>
        )
    }
}

export default GetDates;