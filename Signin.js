import React from 'react'
import Navbar from './Navbar'
export default function Signin() {
  return (
    <>
    <Navbar/>
    <div className="sign-in">
    
        <h1 style={{color:'antiquewhite'}}>Sign In</h1>
        <input type="email" name="email" className='email1' placeholder='Email' />
        <input type="password" name="password" className='password' placeholder='Password' />
        <input type="submit" value="Sign In" className='button1'/>
        <h5 style={{color:'antiquewhite',marginTop:'1.5rem'}}>New to Netflix? Sign In now</h5>
    </div>
    
    </>
  )
}
