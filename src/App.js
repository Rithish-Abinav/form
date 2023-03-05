import React, { useState } from 'react'
import './App.css'
import Box from './box';

export default function App() {


  const[name,setName]=useState("");
  const[mail,setMail]=useState("");
  const[pass,setPass]=useState("");
  const[pop,setPop]=useState(false)

  const[nerror,setNerror]=useState(true);
  const[merror,setMerror]=useState(true);
  const[perror,setPerror]=useState(true);


function namechange(e){
  setName(e.target.value);
  console.log(name)
  // if(name.trim().length<1){
  //   setNerror("Enter Name")
  // }
  // else if((name.match(uppercaseRegExp))   ||  ((name.match(lowercaseRegExp)))){
  //   setNerror(false)
  // }
}
const uppercaseRegExp   = /(?=.*?[A-Z])/;
const lowercaseRegExp   = /(?=.*?[a-z])/;
const digitsRegExp      = /(?=.*?[0-9])/;
const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
const minLengthRegExp   = /.{8,}/;
let work=""
function passchange(e){
  setPass(e.target.value);
  console.log(pass)
  if(pass.trim().length<1){
    setPerror("Enter Password")
  }
  
  else if(!(pass.match(uppercaseRegExp))){
    setPerror("Password is not Srong")
  }
  else if(!(pass.match(lowercaseRegExp))){
    setPerror("Password is not Srong")
  }
  else if(!(pass.match(digitsRegExp))){
    setPerror("Password is not Srong")
  }
  else if((pass.match(uppercaseRegExp) && (pass.match(lowercaseRegExp))  && (pass.match(digitsRegExp))  )){
    setPerror(false)
  }
}

function mailchange(e){
  setMail((e.target.value).toString().toLocaleLowerCase());
  console.log(pass)
  if(mail.trim().length<1){
    setMerror("Enter Mail Id")
  }
  else if(!(mail.match("@gmail.com"))){
    setMerror("Invalid Mail")
  }
  else if(mail.match("@gmail.com")){
    setMerror(false)
    console.log(e.target.value)
  }

}

function submit(e){
e.preventDefault();

if((perror==false)   && (merror==false) && (nerror==false)       ){
  setPop(true)
}
if(name.trim().length<1){
  setNerror("Enter Name")
}
else if((name.match(uppercaseRegExp))   ||  ((name.match(lowercaseRegExp)))){
  setNerror(false)
}

// if(name.trim().length<1){
//   setNerror("Enter Name")
// }
// else if((name.match(uppercaseRegExp))   ||  ((name.match(lowercaseRegExp)))){
//   setNerror(false)
// }

// if(mail.trim().length<1){
//   setMerror("Enter Mail Id")
// }
// else if(!(mail.match("@gmail.com"))){
//   setMerror("Invalid Mail")
// }
// else if(mail.match("@gmail")){
//   setMerror(false)
// }

// if(pass.trim().length<1){
//   setPerror("Enter Password")
// }

// else if(!(pass.match(uppercaseRegExp))){
//   setPerror("Password is not Srong")
// }
// else if(!(pass.match(lowercaseRegExp))){
//   setPerror("Password is not Srong")
// }
// else if(!(pass.match(digitsRegExp))){
//   setPerror("Password is not Srong")
// }
// else if((pass.match(uppercaseRegExp) && (pass.match(lowercaseRegExp))  && (pass.match(digitsRegExp))  )){
//   setPerror(false)
// }



}


  return (
    <div className='form'>

<form>

<h1>Create An Account</h1>

<div className='name'>
  <label>Name</label><input type='text' value={name} onChange={namechange} ></input>
</div>
<p className='error'>{nerror}</p>
<div className='mail'>
  <label>Email</label><input type="email"  onChange={mailchange} value={mail}></input>
</div>
<p className='error'>{merror}</p>
<div className='password'>
  <label>Password</label><input type='password' value={pass}onChange={passchange}  ></input>
</div>
<p className='error'>{perror}</p>



<div className='button'>
<button onClick={submit}>Sign Up</button>
</div>

</form>


<div className={pop?"confirm":"none"}>


<h1>Your Account Has Been Created</h1>

  </div>
<Box></Box>

    </div>
  )
}
