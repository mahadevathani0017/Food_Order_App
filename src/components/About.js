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
        <UserClass name={"First (class)"} location={"First class"} />
        <UserClass name={"Second  class"} location={"Second class"} />
        <UserClass name={"third  class"} location={"Third class"} />
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


/*
-Parent Construtor
-Parent render
   - First Construtor
   - First Render

   -Second construtor
   -Second render

   -First ComponentMountDid
   -Second ComponentMountDid

Parent ComponentMountDid
*/

