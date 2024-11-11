import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import './Orderconfirmation.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import '../Herosection/HeroSection.css';
import { FaPlusCircle } from "react-icons/fa";
import { CiCircleMinus } from "react-icons/ci";
import right from '../assets/right.png';

const Orderconfirmation = () => {
  const { id } = useParams();
  const location = useLocation();
  
  const [bookingDetails, setBookingDetails] = useState(location.state?.bookingDetails || null);
  const totalCost = location.state?.totalCost;

  useEffect(() => {
    if (!bookingDetails) {
      const fetchBookingData = async () => {
        try {
          const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
          const data = await response.json();
          setBookingDetails(data);
        } catch (error) {
          console.error('Error fetching booking data:', error);
        }
      };
    
      fetchBookingData();
    }
  }, [id, bookingDetails]);

  return (
    <section>
      <Header />
      {bookingDetails ? (
        <div className='hero'>
          <div className='herosetioncontainer' style={{ marginBottom: '100px' }}>
            <div className='firstpart' style={{ paddingLeft: '100px', paddingTop: '70px' }}>
              <h1 style={{ paddingBottom: "10px" }}>{bookingDetails.name}</h1>
              <p style={{ paddingBottom: "10px" }}>{bookingDetails.mobile}</p>
              <p style={{ paddingBottom: "10px" }}>{bookingDetails.email}</p>
              <p style={{ paddingBottom: "10px" }}>{bookingDetails.adults} Adults and {bookingDetails.children} Children</p>
            </div>
            <div className='firstpart' style={{ display: 'flex', justifyContent: 'center', gap: '20px', paddingTop: '70px' }}>
              <div>
                <img src={right} alt='right' style={{ width: '100px' }} />
              </div>
              <div>
                <h1>Order Complete</h1>
                <p style={{ marginTop: '10px' }}>Have questions?</p>
                <p style={{ color: 'blue' }}>Contact us</p>
              </div>
            </div>
          </div>
          <div className='cardcontainer'>
            <div className='cardcontent'>
              <div>
                <h6 style={{ paddingLeft: '100px', paddingBottom: '15px' }}>CHECK-IN</h6>
                <label>{bookingDetails.checkIn}</label>
              </div>
              <hr className='hr' />
              <div>
                <h6 style={{ paddingLeft: '100px', paddingBottom: '15px' }}>CHECK-OUT</h6>
                <label>{bookingDetails.checkOut}</label>
              </div>
              <hr className='hr' />
              <div>
                <h6 style={{ paddingLeft: '13px' }}>ROOMS</h6>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', paddingTop: '30px', paddingBottom: '20px' }}>
                  <CiCircleMinus className='circleminus' />
                  <label>{bookingDetails.rooms}</label>
                  <FaPlusCircle className='pluscircle' />
                </div>
              </div>
              <hr className='hr' />
              <div>
                <button style={{ cursor: 'pointer', backgroundColor: '#283982', padding: '13px 30px', color: 'white', border: 'none', outline: 'none', borderRadius: '10px' }}>
                  {totalCost}
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading booking details...</p>
      )}
      <Footer />
    </section>
  );
};

export default Orderconfirmation;
