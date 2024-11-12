import React from 'react'
import "./style.css"

function NotFound() {
  return (
    <div>
      <div className='error-container'>
        <div className='logo margin-bottom'>Atko</div>
        <div className='expression margin-bottom'>Oops!</div>
        <div className='exp-message margin-bottom'>We can't seem to find the page you're looking for.</div>
        <div className='error-code margin-bottom'>Error code 404</div>
      </div>
    </div>
  )
}

export default NotFound
