import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import { EmailValidation } from '../../utils/EmailValidation';
import '../Login/Login.css';
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

const SignUp = () => {

    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');

    const[error,setError]=useState(null);

    const signupProcess=async(e)=>{

        e.preventDefault();

        if(!name){

            setError('Please enter a name.');
            return;
        }

        if(!EmailValidation(email)){

            setError('Please enter a valid email address.');
            return;
        }

        if(!password){
            setError('Please enter a password.')
        }

        setError(null);

        console.log('Logged In!');

    }
  return (
    <>
    
    <Navbar/>

    <div className='main-container' style={{textAlign:'center',}}>
        <div className='inner-container'style={{borderRadius:'10px',backgroundColor:'white',border:'3px solid whitesmoke'}}>
            <form onSubmit={signupProcess} style={{display:'flex',flexDirection:'column',justifyContent:'space-evenly'}}>

                <h4 style={{fontSize:'28px',}}>Sign Up</h4>
                <input type='text' placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)}/>
                <br/>
                <input type='text' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <br/>
                <input type='password' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                
                {error && <p style={{color:'red',fontWeight:'500',paddingBottom:'1px',textAlign:'justify'}}>{error}</p>}

                <Button style={{backgroundColor:'#01579b',color:'white'}} type="submit">Sign up</Button>
                <p>Already have an account ?
                <Link to={'/Login'} style={{textDecoration:'none',color:'01579b'}}>Login</Link> </p>

            </form>
        </div>
    </div>
    
    </>
  )
}

export default SignUp