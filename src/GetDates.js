import React, { Component } from 'react';
import './styles.css';


class GetDates extends Component {

    constructor (props) {
        super(props)
        this.URL_REPORT = "http://127.0.0.1:8000/rest/v1/report/?format=json";
        this.tempURL = 'http://127.0.0.1:8000/rest/v1/report/?format=json&from_date=2009-07-22&to_date=2020-07-31';
        this.postData = "";
        this.option = "today";
        this.today = new Date();
        this.state = {
            error : null,
            isLoaded : false,
            from_date: '' ,
            to_date: '',
            posts : [],
            url:'http://127.0.0.1:8000/rest/v1/report/?format=json',
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

                        <input id="from_date" class="form-control" type="date" name="from_date"
                        value={this.state.from_date} onChange={this.onChange}
                        min="2000-01-01" max="2050-12-31"></input>

                        <p id="to">to</p>
                        
                        <input id="to_date" class="form-control" type="date" name="to_date" 
                        value={this.state.to_date} onChange={this.onChange}
                        min="2000-01-01" max="2050-12-31"></input>

                        <button onClick={this.getData} >GENERATE REPORT</button>
                    </div>
                    <br />
                </form>
                <br/>
                <div class="container">
                    {/* <h4>Report</h4> */}
                    <table class="table">
                        <tr>
                            <th width="30">emp_id</th>
                            <th width="30">cart_id</th>
                            <th width="30">snack_id</th>
                            <th width="30">qty</th>
                            <th width="30">data_time</th>
                            <th width="30">total</th>
                            <th width="30">payment_status</th>
                        </tr>
                    {
                        this.state.posts.map(post => (
                            <tr key={post.id} align="start">
                                <td width="30">{post.emp_id}</td>
                                <td width="30">{post.cart_id}</td>
                                <td width="30">{post.snack_id}</td>
                                <td width="30">{post.qty}</td>
                                <td width="30">{post.date_time}</td>
                                <td width="30">{post.total}</td>
                                <td width="30">{post.payment_status}</td>
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