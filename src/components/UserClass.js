/* This is a React class component that displays counts and user information, with the ability to
increase counts on button click. */

import React from "react";

class UserClass extends React.Component{

  constructor(props){
    super(props);
    this.state={
      userInfo:{
        name:"maha",
        location:"default",
      }
    }
   
  }
  async componentDidMount(){
    const data = await fetch("https://api.github.com/users/mahadevathani0017");
    const json= await data.json();
    this.setState({
      userInfo:json,
    })
    console.log(json);
  }
    render(){
      return (
          <div className="user-card">
            <h2>Name:{this.state.userinfo.name}</h2>
            <h3>Location:{location}</h3>
            <h3>Contact:896797998979</h3>
          </div>
        );
    }
}
export default UserClass;
