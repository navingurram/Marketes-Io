import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footercontainer'>
      <div>
        <h1 style={{paddingBottom: '13px'}}>BriSphere</h1>
        <p style={{paddingBottom: '13px'}}>Spituk, Ladakh</p>
        <p style={{paddingBottom: '13px'}}>+91 - 776499703</p>
        <p style={{paddingBottom: '13px'}}>amit.jha6700@gmail.com</p>
        <div>
        <button style={{backgroundColor: '#283982', paddingTop: '13px', paddingBottom: '13px', paddingLeft: '30px', paddingRight: '30px', color: 'white', border: 'none', outline: 'none', borderRadius: '10px'}}>Location</button>
      </div>
      </div>
    </div>
  )
}

export default Footer
