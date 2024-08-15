"use client";
import React, { useState } from "react";
import { Tab, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaHome,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaInfoCircle,
  FaCogs,
} from "react-icons/fa";
import sectionData from "../../../../datas/tabComponentData.json";
import styles from "./style.module.css";
import Ayakkabi from "../../../../datas/ayyakkabi.png";
import Image from "next/image";
import wave1 from "../../../../datas/Vector 10.png";
import wave2 from "../../../../datas/Vector 11.png";
import wave3 from "../../../../datas/Vector 12.png";

const iconMap = {
  home: <FaHome className={styles.navIcon} />,
  user: <FaUser className={styles.navIcon} />,
  envelope: <FaEnvelope className={styles.navIcon} />,
  phone: <FaPhone className={styles.navIcon} />,
  infoCircle: <FaInfoCircle className={styles.navIcon} />,
  cogs: <FaCogs className={styles.navIcon} />,
};

const SectionFive = () => {
  const [key, setKey] = useState("home");

  return (
    <div className={`${styles.Tabcontainer}`}>
      <div
        className={`container py-5`}
        style={{ position: "relative", zIndex: 99 }}
      >
        <h2 className={`${styles.title} py-4 fw-bold`}>Grow your collection</h2>
        <p className="py-2 pb-4">
          Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh
          amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames
          sit rhoncus. Nec magna sed interdum sit purus tellus. Et volutpat
          proin neque placerat at bibendum quam tellus.
        </p>
        <Tab.Container
          id="left-tabs-example"
          className="p-4"
          activeKey={key}
          onSelect={(k) => setKey(k)}
        >
          <div className="row">
            <div className="col-md-3">
              <div className={styles.navContainer}>
                <Nav variant="pills" className={`${styles.navItem} flex-column`}>
                  {sectionData.map((item) => (
                    <Nav.Item key={item.id} className={styles.navItem}>
                      <Nav.Link
                        eventKey={item.id}
                        onClick={() => setKey(item.id)}
                        className={styles.navLink}
                      >
                        {iconMap[item.icon]} {item.title}
                      </Nav.Link>
                    </Nav.Item>
                  ))}
                </Nav>
              </div>
            </div>
            <div className="col-md-9">
              <Tab.Content>
                {sectionData.map((item) => (
                  <Tab.Pane eventKey={item.id} key={item.id}>
                    {item.image && (
                      <Image
                        src={Ayakkabi}
                        alt={item.title}
                        width={944}
                        height={556}
                        style={{ width: "100%", borderRadius: "8px" }}
                      />
                    )}
                  </Tab.Pane>
                ))}
              </Tab.Content>
            </div>
          </div>
        </Tab.Container>
      </div>
      <div className={styles.waveWrapper}>
        <div className={styles.wave1}>
          <Image
            src={wave1}
            alt="Wave 1"
            layout="responsive"
            width={1000}
            height={150}
          />
        </div>
        <div className={styles.wave2}>
          <Image
            src={wave2}
            alt="Wave 2"
            layout="responsive"
            width={1000}
            height={150}
          />
        </div>
        <div className={styles.wave3}>
          <Image
            src={wave3}
            alt="Wave 3"
            layout="responsive"
            width={1000}
            height={150}
          />
        </div>
      </div>
    </div>
  );
};

export default SectionFive;
