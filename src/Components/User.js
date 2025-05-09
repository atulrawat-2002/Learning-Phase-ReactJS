import { useState, useEffect } from "react";



const User = ({ name }) => {

    let [count] = useState(0);

   

    return <div className="user">
        <h1>count: {count} </h1>
        <h3>Funciton component</h3>
    </div>
}
 
export default User;