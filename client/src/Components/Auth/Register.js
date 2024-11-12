import React from 'react'
import "./styles.css"

function Register() {
  return (
    <div>
      <div>
        <div className='main-container'>
          <div className='logo margin-bottom'>Atko</div>
          <div className='sub-label margin-bottom'>Signed up already? <u>Log in here</u></div>
          <div className='inputs-container margin-bottom'>

            <div className='margin-bottom'>
              <div className='label'>First Name *</div>
              <div className='prime-input'>
                <input placeholder='First Name'></input>
              </div>
              <div className='error'>First Name required</div>
            </div>

            <div className='margin-bottom'>
              <div className='label'>Last Name *</div>
              <div className='prime-input'>
                <input placeholder='Last Name'></input>
              </div>
              <div className='error'>Last Name required</div>
            </div>

            <div className='margin-bottom'>
              <div className='label'>Work Email *</div>
              <div className='prime-input'>
                <input placeholder='Work Email'></input>
              </div>
              <div className='error'>Work Email required</div>
            </div>

            <div className='margin-bottom'>
              <div className='label'>Mobile Number *</div>
              <div className='prime-input'>
                <input placeholder='Mobile Number'></input>
              </div>
              <div className='error'>Mobile Number required</div>
            </div>

            <div>
              <div className='label'>Organization Name *</div>
              <div className='prime-input'>
                <input placeholder='Organization Name'></input>
              </div>
              <div className='error'>Organization Name required</div>
            </div>

          </div>

          <div className='tc margin-bottom'>I agree to the applicable terms in this platform  Agreements and platform policies  while using the platform</div>

          <button className='prime-btn'>
            Start
          </button>
        </div>
      </div>
    </div>
  )
}

export default Register
