/* This is a React class component that displays counts and user information, with the ability to
increase counts on button click. */

import React from "react";

class UserClass extends React.Component{

  constructor(props){
    super(props);
    this.state={
      count:0,
      count1:0,
      count2:0,
    }
   console.log(this.props.name+" Child Construtor");
  }
  componentDidMount(){
    console.log( this.props.name+"component did mount");
  }

  
    render(){
       const { name, location } = this.props;
       const {count,count1,count2}=this.state;
       console.log(this.props.name+"Child Render");
        return (
          <div className="user-card">
            <h1>Count :{count}</h1>
            <h1>Count :{count1}</h1>
            <h1>Count :{count2}</h1>
            <button
              onClick={() => {
                this.setState({
                  count: this.state.count + 1,
                  count1: this.state.count1 + 1,
                  count2: this.state.count2 + 2,
                });
              }}
            >
              Count increase
            </button>
            <h2>Name:{name}</h2>
            <h3>Location:{location}</h3>
            <h3>Contact:896797998979</h3>
          </div>
        );
    }
}
export default UserClass;
