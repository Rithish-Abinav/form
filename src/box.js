import React, { useState } from 'react'
import './App.css'

export default function Box() {

const [state,setState]=useState("");



function change(e){
    setState(e)
}




  return (
    <div>


<div className={state=="one"?"box":"active"} value="one" onClick={(e)=>change(e.target.getAttribute('value'))}>
    s
</div>
<div className={state=="two"?"box":"active"} value="two" onClick={(e)=>change(e.target.getAttribute('value'))}>
    s
</div>

<div className={state=="three"?"box":"active"} value="three" onClick={(e)=>change(e.target.getAttribute('value'))}>
    s
</div>



    </div>
  )
}
