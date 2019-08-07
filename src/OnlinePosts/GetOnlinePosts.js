import React, { Component } from 'react';
import './GetOnline.css'

class GetOnlinePosts extends Component {
    constructor(props){
        super(props);
        this.state = {
            error : null,
            isLoaded : false,
            posts : []          
        };
    }
    componentDidMount(){
        // I will use fake api from jsonplaceholder website
        // this return 100 posts 
        fetch('http://localhost:8000/rest/v1/snacks/')
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

    handlePostDataSend = () => {
        console.log(this.state.posts)
        fetch('http://127.0.0.1:8000/user/order/bulk_create/', {
            method: 'POST',
            headers:{
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(
                [{
                name: "samosa", //this.state.posts.name
                price: 10, //this.state.posts.price
                is_active: false, //this.state.posts.is_active
            }])
        })
      };

    handleAddShareholder = () => {
        this.state.posts.push({
            "name": "",
            "price": "",
            "is_active": false,
            isNew:true
        })
        this.setState({post:this.state.post})
      };

    render() {
        const {error, isLoaded, posts} = this.state;
        if(error){
            return <div>Error in loading</div>
        }else if (!isLoaded) {
            return <div>Loading ...</div>
        }else{
            return(
                <div className="container">
                    <div className="col-xs-12">
                        <button type="button" onClick={this.handleAddShareholder}>Add an Item</button>
                            <table>
                                <tr>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Is Active</th>
                                </tr>
                                {posts.map((post) => {
                                    return(
                                            <tr>
                                                <td>{!post.isNew ? post.name : <input type={'text'} id="tempName" name='tempName'/>}</td>
                                                <td>{!post.isNew ? post.price : <input type={'text'} id="tempPrice"/>}</td>
                                                <td><input type="checkbox" defaultChecked={post.is_active ? true: false}></input></td>
                                            </tr>
                                    );
                                })}
                            </table>
                        <button type="button" id="update" onClick={this.handlePostDataSend}>Update Menu</button>
                    </div>
                </div>
            )
        }
    }
  }
  
  export default GetOnlinePosts;