import React from 'react'
import User from "./User"
import UserClass from './UserClass'

const About = () => {
  return (
    <div>
      <h1>About</h1>
      {/* <User name={"Mahadev Athani"}/> */}
      <UserClass name={"Mahadev Chidanand Athani (class)"} location={"Bengal"}/>
    </div>
  )
}

export default About;

