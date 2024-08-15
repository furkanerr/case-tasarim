"use client";
import Image from "next/image";
import "./mapStyle.css";
import map from "../../../../datas/chart.png";
import shoeImage from "../../../../datas/ayyakkabi.png";
import { Tooltip, Overlay } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useRef } from "react";

export default function MapWithPoints() {
  const [showTooltip1, setShowTooltip1] = useState(true);
  
  const target1 = useRef(null);
  const target2 = useRef(null);

  return (
    <div className="map-container" style={{ position: "relative", zIndex: 99 }}>
      <div className="map-container container">
        <Image
          src={map}
          alt="World Map"
         
          width={1000}
          height={500}
          className="img-fluid"
        />

       
        <div className="center-text">
          <p>11,658,467 Shoes Collected</p>
        </div>

       
        <div
          className="map-point"
          ref={target1}
          
        >
          <Overlay target={target1.current} show={showTooltip1} placement="top">
            {(props) => (
              <Tooltip id="tooltip-top-1" {...props}>
                <Image
                  src={shoeImage}
                  layout="responsive"
                  width={100}
                  height={80}
                />
                <div className="cart-text-container">
                  <p className="cart-text">
                    Emma Simpson collected one pair of Cool Shoes.
                  </p>
                </div>
              </Tooltip>
            )}
          </Overlay>
        </div>

      
      </div>
    </div>
  );
}
