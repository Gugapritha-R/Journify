import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import './Login.css';
import { blue } from '@mui/material/colors';
import { EmailValidation } from '../../utils/EmailValidation';


const Login = () => {

    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');

    const[error,setError]=useState(null);

    const loginProcess= async(e)=>{

        e.preventDefault();
       
        if(!EmailValidation(email)){
            
            setError("Please enter a valid email address.");
            return;
        }

        if(!password){
            
            setError("Please enter a password.");
            return;
        }

        setError(null);

        console.log('Logged In!');

    }

  return (
    <div>
        <Navbar/>

        <div className='main-container' style={{textAlign:'center',}}>
            
            <div className='inner-container'style={{borderRadius:'10px',backgroundColor:'white',border:'3px solid whitesmoke'}}>
               
                <form onSubmit={loginProcess} style={{display:'flex',flexDirection:'column',justifyContent:'space-evenly'}} >
                <h4 style={{fontSize:'28px',}}>Login</h4>
                <input type='text' placeholder='Email' value={email}  onChange={(e)=>setEmail(e.target.value)}/>
                <br/>
                <input type='password' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
               
                {error && <p style={{color:'red',fontWeight:'500',paddingBottom:'1px',textAlign:'justify'}}>{error}</p>}
                <Button style={{backgroundColor:'#01579b',color:'white'}} type="submit" >Login</Button>
                <p>
                    Do not have an account ?
                    <Link to={'/SignUp'} style={{textDecoration:'none',color:'01579b'}}> Sign up</Link> 
                </p>
                </form>

            </div>
        </div>
    </div>
  )
}

export default Login