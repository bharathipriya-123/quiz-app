// import React from 'react'
// import { useState } from 'react';

// export default function UseSatate() {
//    
//     let x=1;
//     const handleAdd=()=>
//     {
//         x=x+1;
//         console.log(x);
//     }
//   return (
//     <div>
//         <h1>{x}</h1> 
//         <button onClick={handleAdd}>Add</button>
//     </div>
//   )
// }



// import React from 'react'
// import { useState } from 'react';

// export default function UseSatate() {
//     const [num,setNum]=useState();
    
//     let x=1;
//     const handleAdd=()=>
//     {
//         // x=x+1;
//         // console.log(x);
//         setNum(2);
//     }
//     console.log(num);
//   return (
//     <div>
//         <h1>{num}</h1> 
//         <button onClick={handleAdd}>Add</button>
//     </div>
//   )
// }



import React from 'react'
import { useState } from 'react';

export default function UseSatate() {
    //the usestatevalue can be empty or if we give any value it will assign the value for variale...
    const [num,setNum]=useState(100);
    
    let x=1;
    const handleAdd=()=>
    {
        // x=x+1;
        // console.log(x);
        //setNum(2)
        setNum((currentValue)=>
        {
           return currentValue+1;
        }) 

        
    }
    // console.log(num);
  return (
    <div>
        <h1>{num}</h1> 
        <button onClick={handleAdd}>Add</button>
    </div>
  )
}
