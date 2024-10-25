import React from 'react'
import User from "./User"
import UserClass from './UserClass'

class About extends React.Component{
  constructor(props){
    super(props);
    console.log( " Parent Constructor")
  }

  componentDidMount(){
    console.log("Parent Component Mount did");
  }
  render()
  {
    console.log(+"Parent Render");
    return (
      <div>
        <h1>About</h1>
        {/* <User name={"Mahadev Athani"}/> */}
        <UserClass
          name={"Mahadev Athani (class)"}
          location={"Bengal class"}
        />
        <UserClass
          name={"Namaste  class"}
          location={"youtube class"}
        />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       {/* <User name={"Mahadev Athani"}/> */}
//       <UserClass name={"Mahadev Chidanand Athani (class)"} location={"Bengal"}/>
//     </div>
//   );
// }

export default About;


