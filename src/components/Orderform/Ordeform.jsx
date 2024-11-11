import React, { useState } from "react";
import "./OrderForm.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { FaPlusCircle } from "react-icons/fa";
import { CiCircleMinus } from "react-icons/ci";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const OrderForm = () => {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (name, newValue) => {
    setFormData((prev) => ({ ...prev, [name]: newValue }));
  };

  const handleRoomChange = (increment) => {
    setFormData((prev) => ({
      ...prev,
      rooms: prev.rooms + (increment ? -1 : 1),
    }));
  };

  const calculateCost = () => {
    const { rooms, adults, children } = formData;
    const roomCost = rooms * 100;
    const adultCost = adults * 20; 
    const childrenCost = children * 10; 
    return roomCost + adultCost + childrenCost;
  };

  const handleSubmit = async () => {
    const totalCost = calculateCost();
    const bookingData = {
      ...formData,
      checkIn: formData.checkIn ? formData.checkIn.format("YYYY-MM-DD") : "",
      checkOut: formData.checkOut ? formData.checkOut.format("YYYY-MM-DD") : "",
      totalCost,
    };

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bookingData),
        }
      );
      const data = await response.json();
      console.log("Booking response:", data);

      navigate(`/confirmation/${data.id}`, { state: { bookingDetails: data, totalCost } });
    } catch (error) {
      console.error("Error booking room:", error);
    }
  };

  return (
    <section id="orderform">
      <Header />
      <div className="order">
        <div className="ordersetioncontainer">
          <div className="orderpart" style={{ paddingLeft: '20px' }}>
            <TextField
              id="name"
              label="Enter Name"
              className='input'
              variant="outlined"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={{
                backgroundColor: "white",
                marginTop: "50px",
              }}
            />
            <TextField
              id="email"
              label="Enter Email"
              className='input'
              variant="outlined"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{
                backgroundColor: "white",
                marginTop: "30px",
              }}
            />
          </div>
          <div className="firstpart" style={{ paddingTop: '50px' }}>
            <TextField
              id="mobile"
              label="Enter Mobile No"
              className='input'
              variant="outlined"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              style={{
                backgroundColor: "white",
              }}
            />
            <div style={{ display: "flex", marginTop: "30px" }}>
              <TextField
                id="adults"
                label="Adult"
                className="inputc"
                variant="outlined"
                name="adults"
                value={formData.adults}
                onChange={handleChange}
                style={{
                  backgroundColor: "white",
                  marginRight: "10px",
                }}
              />
              <TextField
                id="children"
                label="Children"
                className="inputc"
                variant="outlined"
                name="children"
                value={formData.children}
                onChange={handleChange}
                style={{ backgroundColor: "white" }}
              />
            </div>
          </div>
        </div>
        <div className="ordercontainer">
          <div className="ordercontent">
            <div>
              <h6 style={{ paddingLeft: "100px", paddingBottom: "15px" }}>
                CHECK-IN
              </h6>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  value={formData.checkIn}
                  onChange={(newValue) => handleDateChange("checkIn", newValue)}
                  renderInput={(props) => <TextField {...props} />}
                />
              </LocalizationProvider>
            </div>
            <hr className="hr" />
            <div>
              <h6 style={{ paddingLeft: "100px", paddingBottom: "15px" }}>
                CHECK-OUT
              </h6>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  value={formData.checkOut}
                  onChange={(newValue) =>
                    handleDateChange("checkOut", newValue)
                  }
                  renderInput={(props) => <TextField {...props} />}
                />
              </LocalizationProvider>
            </div>
            <hr className="hr" />
            <div>
              <h6 style={{ paddingLeft: "13px" }}>ROOMS</h6>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                  paddingTop: "30px",
                  paddingBottom: "20px",
                }}
              >
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
            <hr className="hr" />
            <div>
              <button
                onClick={handleSubmit}
                style={{
                  cursor: "pointer",
                  backgroundColor: "#3277a8",
                  padding: "13px 30px",
                  color: "white",
                  border: "none",
                  outline: "none",
                  borderRadius: "10px",
                }}
              >
                ${calculateCost()}
                <FaArrowRightLong style={{marginLeft: '10px'}}/>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default OrderForm;
