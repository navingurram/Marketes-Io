import React from "react";
import "./Discover.css";
import { IoStarSharp } from "react-icons/io5";
import boyimg from '../assets/boyimg.jpg'
import cardwaterfall from '../assets/cardwaterfall.jpg'

const Discover = () => {
  return (
    <>
      <div className="maincontainer">
        <h1 style={{ textAlign: "center" }}>Discover</h1>
        <div className="discovercontainer">
          <div className="cardtext" style={{height: '200px'}}>
            <div style={{display: 'flex'}}>
                <div>
                <img src={boyimg} alt="boyimg" style={{width:'50px', height:'50px',borderRadius:'50%',marginRight:'15px'}} />
                </div>
            <div>
            <h4 style={{marginTop: '10px'}}>Arjun Raghav</h4>
              <IoStarSharp style={{ color: "yellow" }} />
              <IoStarSharp style={{ color: "yellow" }} />
              <IoStarSharp style={{ color: "yellow" }} />
              <IoStarSharp style={{ color: "yellow" }} />
              <IoStarSharp style={{ color: "yellow" }} />
            </div>
            </div>
            <p style={{fontSize: '13px', marginTop: '10px'}}>
              I am writing this after reflecting on my one month stay with
              Bricabin in Ladakh. Right from picking us up at the airport to
              dropping us back there after a month, Urgan was very responsible
              and took good care of my friends and me. <label style={{color: 'blue'}}>read more</label>
            </p>
          </div>
          <div className="cardtext">
            <img src={cardwaterfall} alt="cardimg" style={{width: '100%', height: '300px'}} />
            <div style={{display: 'flex'}}>
                <div>
                <img src={boyimg} alt="boyimg" style={{width:'50px', height:'50px',borderRadius:'50%',marginRight:'15px'}} />
                </div>
            <div>
            <h4 style={{marginTop: '10px'}}>Arjun Raghav</h4>
              <IoStarSharp style={{ color: "yellow" }} />
              <IoStarSharp style={{ color: "yellow" }} />
              <IoStarSharp style={{ color: "yellow" }} />
              <IoStarSharp style={{ color: "yellow" }} />
              <IoStarSharp style={{ color: "yellow" }} />
            </div>
            </div>
            <p style={{fontSize: '13px', marginTop: '10px'}}>
              I am writing this after reflecting on my one month stay with
              Bricabin in Ladakh. Right from picking us up at the airport to
              dropping us back there after a month, Urgan was very responsible
              and took good care of my friends and me. <label style={{color: 'blue'}}>read more</label>
            </p>
          </div>
          <div>
            <div className="gridrow">
            <div className="cardtext">
            <div style={{display: 'flex'}}>
                <div>
                <img src={boyimg} alt="boyimg" style={{width:'50px', height:'50px',borderRadius:'50%',marginRight:'15px'}} />
                </div>
            <div>
            <h4 style={{marginTop: '10px'}}>Arjun Raghav</h4>
              <IoStarSharp style={{ color: "yellow" }} />
              <IoStarSharp style={{ color: "yellow" }} />
              <IoStarSharp style={{ color: "yellow" }} />
              <IoStarSharp style={{ color: "yellow" }} />
              <IoStarSharp style={{ color: "yellow" }} />
            </div>
            </div>
            <p style={{fontSize: '13px', marginTop: '10px'}}>
              I am writing this after reflecting on my one month stay with
              Bricabin in Ladakh. Right from picking us up at the airport to
              dropping us back there after a month, Urgan was very responsible
              and took good care of my friends and me. <label style={{color: 'blue'}}>read more</label>
            </p>
            </div>
            <div className="cardtext" style={{marginTop: '20px'}}>
            <div style={{display: 'flex'}}>
                <div>
                <img src={boyimg} alt="boyimg" style={{width:'50px', height:'50px',borderRadius:'50%',marginRight:'15px'}} />
                </div>
            <div>
            <h4 style={{marginTop: '10px'}}>Arjun Raghav</h4>
              <IoStarSharp style={{ color: "yellow" }} />
              <IoStarSharp style={{ color: "yellow" }} />
              <IoStarSharp style={{ color: "yellow" }} />
              <IoStarSharp style={{ color: "yellow" }} />
              <IoStarSharp style={{ color: "yellow" }} />
            </div>
            </div>
            <p style={{fontSize: '13px', marginTop: '10px'}}>
              I am writing this after reflecting on my one month stay with
              Bricabin in Ladakh. Right from picking us up at the airport to
              dropping us back there after a month, Urgan was very responsible
              and took good care of my friends and me. <label style={{color: 'blue'}}>read more</label>
            </p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Discover;
