import React from 'react'
import { useState } from 'react';
import './HeroSection.css'
import { FaFacebook } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { FaPlusCircle } from "react-icons/fa";
import { CiCircleMinus } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {

  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    adults: "",
    children: "",
    checkIn: null,
    checkOut: null,
    rooms: 1,
  });


  const navigate = useNavigate();

  const handleBookNowClick = () => {
    navigate('/booking');
  };

  const handleRoomChange = (increment) => {
    setFormData((prev) => ({
      ...prev,
      rooms: prev.rooms + (increment ? -1 : 1),
    }));
  };


  return (
    <>
   <div className='hero'>
   <div className='herosetioncontainer'>
      <div className='firstpart'>
        <h1 className='heading'>Work from <br/>ladakh</h1>
        <p className='description'>India's first true digital tourism ecosystem</p>
        <FaFacebook className='facebook'/>
        <BiLogoInstagramAlt className='instagram'/>
      </div>
      <div className='secondpart'>
      </div>
    </div>
    <div className='cardcontainer'>
      <div className='cardcontent'>
      <div>
        <h6 style={{paddingLeft: '100px', paddingBottom: '15px'}}>CHECK-IN</h6>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker />
    </LocalizationProvider>
      </div>
      <hr className='hr'/>
      <div>
        <h6 style={{paddingLeft: '100px', paddingBottom: '15px'}}>CHECK-OUT</h6>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker />
    </LocalizationProvider>
      </div>
      <hr className='hr'/>
      <div>
        <h6 style={{paddingLeft: '13px'}}>ROOMS</h6>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', paddingTop: '30px', paddingBottom: '20px'}}>
        <CiCircleMinus
                  className="pluscircle"
                  onClick={() => handleRoomChange(true)}
                />
                <label>{formData.rooms}</label>
                <FaPlusCircle
                  className="circleminus"
                  onClick={() => handleRoomChange(false)}
                />
        </div>
      </div>
      <hr className='hr'/>
      <div>
        <button onClick={handleBookNowClick} style={{cursor: 'pointer', backgroundColor: '#3277a8', paddingTop: '13px', paddingBottom: '13px', paddingLeft: '30px', paddingRight: '30px', color: 'white', border: 'none', outline: 'none', borderRadius: '10px'}}>Book</button>
      </div>
      </div>
    </div>
   </div>
    </>
  )
}

export default HeroSection
