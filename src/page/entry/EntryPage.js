import React,{useState} from 'react'
import './entry.style.css';
import { Login } from '../../components/login/Login.component';
import { ResetPassword } from '../../components/password-reset/PasswordReset';


export const Entry=()=>{
  //email-variable,setEmail-function
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [FormLoad,setFormLoad]=useState('login');
   

  const handleOnChange=e=>{
    //name::email, value:what we type
    const {name,value}=e.target;

    switch(name){
      case 'email':
        setEmail(value)
        break
      case 'password':
        setPassword(value)
        break
      default:
        break
    }
    console.log(name,value);
  }
  const handleOnSubmit=e=>{
    e.preventDefault();
    if(!email || !password){
      alert("Fill up all the details in the form");
    }
    //add more validation for the form 
  }
  const handleOnResetSubmit=e=>{
    e.preventDefault();
    if(!email){
      alert("Please enter email");
    }
    //add more validation for the form 
  }

  const formSwitcher=formType=>{
    setFormLoad(formType);
  }
  //bg-info===bootstrap utility class ==info-blue
  return <div className='entry-page bg-info'>
      <div className='EntryContainer'>
        {FormLoad==='login' &&  <Login handleOnChange={handleOnChange} email={email} password={password} handleOnSubmit={handleOnSubmit}  formSwitcher={formSwitcher}/>}
        {FormLoad==='reset' && <ResetPassword handleOnChange={handleOnChange} email={email} handleOnResetSubmit={handleOnResetSubmit} formSwitcher={formSwitcher}/>}
        
      </div>
  </div>
}
