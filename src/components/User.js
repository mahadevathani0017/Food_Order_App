import { useState } from "react";

const User = ({name}) => {
    const [count,setCount]=useState(0);
    const [count1]=useState(1);
    
    return (
      <div className="user-card">
        <h2>Count={count}</h2>
        <h2>Count1={count1}</h2>
        <h2>Name:{name}</h2>
        <h3>Location:Bengaluru</h3>
        <h3>Contact:896797998979</h3>
        
      </div>
    );
}
 export default User;
