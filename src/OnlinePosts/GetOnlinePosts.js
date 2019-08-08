import React, { Component } from 'react';
import './GetOnline.css'

class GetOnlinePosts extends Component {
    constructor(props){
        super(props)
        this.state = {
            error : null,
            isLoaded : false,
            posts : [] ,
            to_send : [],
        }
        this.onChange = this.onChange.bind(this)
    }
    componentDidMount(){
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

    isActiveChanged(e, index){
        let value = e.target.checked
        var data = this.state.posts;

        data[index].is_active = value;
        this.setState({
            posts: data
        })
    }

    onChange(e,index){
        let value = e.target.value
        let name = e.target.name
        let price = e.target.price
        this.setState((state)=>{
            let postTemp = state.posts
            postTemp[index][name] = value
            postTemp[index][price] = value
            console.log(value)
            return{
              ...state,
              posts:postTemp
            }
        })
    }

    handlePostDataSend = () => {
        debugger;
        var myPosts = this.state.posts;


        var data = myPosts.filter(function(post){
            return (post.name!=="" && post.price!=="");
        }).map(function({name, price, is_active}){
            return {name, price, is_active};
        });

        fetch('http://127.0.0.1:8000/user/order/bulk_create/', {
            method: 'POST',
            headers:{
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(
                data
            ),
        })
      };

    handleAddShareholder = () => {
        this.state.posts.push({
            "id" : 0,
            "name": "",
            "price": 0,
            "is_active": true,
            isNew: true
        })
        this.setState({post:this.state.posts})
      };

    render() {
        const {error, isLoaded, posts} = this.state;
        if(error){
            return <div>Error in loading</div>
        }else if (!isLoaded) {
            return <div>Loading ...</div>
        }else{
            return(
                <div>
                    <h1>INCEDO</h1>
                    <div id="abc">.</div>
                    <h2>Order Configuration</h2>
                <div className="container"><br/>
                        <button type="button" onClick={this.handleAddShareholder} class="addB">Add an Item</button>
                        <br/>
                        <br/>
                            <table class="table">
                                <tr>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Is Active</th>
                                </tr>
                                {posts.map((post,index) => {
                                    return(
                                            <tr>
                                                <td>{!post.isNew ? post.name : <input type='text' name='name' value={post.name} onChange={(e)=>this.onChange(e,index)}/>}</td>
                                                <td>{!post.isNew ? post.price : <input type='number' step='0.1' min='0' name='price' value={parseFloat(post.price)} onChange={(e)=>this.onChange(e,index)}/>}</td>
                                                <td><input type="checkbox" defaultChecked={post.is_active ? true: false} onChange={(e)=>this.isActiveChanged(e,index)}></input></td>
                                            </tr>
                                    );
                                })}
                            </table>
                            <alert value="this.state"></alert>
                        <button type="button" id="update" onClick={this.handlePostDataSend}>Update Menu</button>
                    </div>
                </div>
            )
        }
    }
  }
  
  export default GetOnlinePosts;