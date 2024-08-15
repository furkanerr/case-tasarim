import Image from "next/image";
import React from "react";
import { Button } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import screenImage from "../../../../datas/Desktop.png";
import Style from "./style.module.css";

const SectionThree = () => {
  return (
    <div className={`${Style.card}`}>
      <div className={`${Style.cardWhite} container rounded-5 shadow-lg bg-light`}>
        <div className="row d-flex flex-column flex-md-row align-items-center ">
          {/* Metin kısmı */}
          <div className={ `${Style.content} col-md-6 d-flex flex-column justify-content-center` }>
            <h2 className="fs-1 fw-bold">Why Join Us</h2>
            <div className="py-4">
              <div
                className="d-flex justify-content-start align-items-center "
                style={{ gap: "10px" }}
              >
                <FaCheck style={{ color: "green", fontSize: "15px" }} />
                <p className="fs-5">
                  Est et in pharetra magna adipiscing ornare aliquam.
                </p>
              </div>
              <div
                className="d-flex justify-content-start align-items-center "
                style={{ gap: "10px" }}
              >
                <FaCheck style={{ color: "green", fontSize: "15px" }} />
                <p className="fs-5">
                  Est et in pharetra magna adipiscing ornare aliquam.
                </p>
              </div>
              <div
                className="d-flex justify-content-start align-items-center "
                style={{ gap: "10px" }}
              >
                <FaCheck style={{ color: "green", fontSize: "15px" }} />
                <p className="fs-5">
                  Est et in pharetra magna adipiscing ornare aliquam.
                </p>
              </div>
            </div>
            <Button variant="light" className={`${Style.button} border-2`}>
              Sign Up Now
            </Button>
          </div>
          {/* Resim kısmı */}
          <div className="col-md-6 d-flex justify-content-center mt-4 mt-md-0">
            <Image
              src={screenImage}
              width={520}
              height={350}
              layout="responsive"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
