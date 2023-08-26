import React from 'react'
import Navbar from './Navbar'
export default function Home() {
  return (
   <>
   <Navbar/>
   <div className="sections">
  <div className="section">
  <h1 style={{fontSize:'3rem'}}>The biggest Indian hits. Ready to watch here from ₹ 149.</h1>
  <p style={{fontSize:'1.3rem'}}>Join today. Cancel anytime.</p>
  <p style={{fontSize:'1.3rem'}}>Enter your email to create or restart your membership.</p>
</div>
<div className="section1">
  <input type="email" name="email" className='email' placeholder='Email address'/>
  <button type="submit" className='button' >Get Started</button>
</div> 
</div>
   </>
  )
}
