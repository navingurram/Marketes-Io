import React from 'react'
import './Services.css'
import { services } from '../dummydata/services'


const Services = () => {
  return (
    <div>
      <div className='maincontainer'>
      <h1 style={{ textAlign: "center" }}>Services</h1>
        <div className='servicescontainer'>
            {
                services.map((index) => {
                    return (
                    <div className='cardtext'>
                        <img style={{paddingTop: '20px', paddingBottom: '20px'}} src={index.image} alt='imagecard'/>
                        <h4 style={{paddingBottom: '30px'}}>{index.heading}</h4>
                        <p style={{paddingBottom: '30px'}}>{index.description}</p>
            </div>
                    )
            })
            }
        </div>
      </div>
    </div>
  )
}

export default Services
