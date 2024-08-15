import React from "react";
import Image from "next/image";
import { Button } from "react-bootstrap";
import { FaShoppingCart } from 'react-icons/fa';
import ShoeImage from "../../../../datas/Picture.png";
import styles from "./style.module.css"; // CSS dosyanızın yolu

const ProductCard = ({ title, description, buttonText }) => {
  return (
    <div className={styles.cardContainer + " rounded border-1"}>
      <div className={styles.imageContainer}>
        <Image src={ShoeImage} width={394} height={220} alt={title} style={{ width: '100%', height: 'auto' }} />
      </div>
      <div className="contentConatiner p-4 justify-content-center align-items-center g-3 row">
        <h2 className="text-light fs-4">{title}</h2>
        <p className="text-light" style={{fontSize:"18px"}}>{description}</p>
        <Button className="d-flex justify-content-center align-items-center m-4" variant="dark"
          style={{ backgroundColor: '#1F2937', borderColor: 'white', height:"56px" }}>
          <FaShoppingCart className="me-4" />
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
