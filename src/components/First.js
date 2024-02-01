  import React from "react";

function First () {

      return(
            <div>
                  <p style={{color:'green'}}>This is my first component</p>

            </div>
      );

}
//Named Export
//Functional Component with fat arrow
export const  Third = (s)=> {
      return(
            <>
            <h3>This is my third component</h3>
            <p>{s.name},     {s.age}</p>
            <p>{s.age}</p>
            </>
      );

}

export const  Four = ()=> {
      return(
            <>
            <h3>This is my Four component</h3>
            </>

      );

}

export default First;