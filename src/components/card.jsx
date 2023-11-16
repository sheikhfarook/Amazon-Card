import React from "react";
import "./card.css";
import cricket from "../images/cricket.jpg";
import amazon from "../images/Amazon-India.png";
// import amazonfresh from '../images/Amazon-Fresh.png'
import amazonfresh from "../images/amazon.png";

export default function DivOutLine() {
  return (
    <div className="Mainpart">
      
      <div className="main">
        <div className="card">
          <img className="cricket_mania" src={cricket} />
          <div>
            {/* <span>|</span> */}
            {/* <hr /> */}

            <div className="images">
            <img className="amazon_logo" src={amazon} alt="" />
            <div className="line">|</div>
            <img className="amazon_logo1" src={amazonfresh} alt="" />
</div>
            {/* <hr /> */}
            <h2>GET UP TO $100 BACK</h2>
            <h3>20% offer, Min order: $2499</h3>
            <p className="pa-insidethe-div">
              valid till 30 Nov <span>Details</span>
            </p>
            <button type="button" className="btn">
              Collect Now
            </button>
          </div>
        </div>
        <p className="pa-ce">
          Collect the offer and complete the action mentioned to receive the
          cashbacks.
        </p>
      </div>
    </div>
  );
}
