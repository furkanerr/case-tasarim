import React from "react";
import { Button } from "react-bootstrap";
import ProductCardsData from "../../../../datas/productCards.json";
import ProductCard from "../ProductCard";

const SectionTwo = () => {
  return (
    <div  style={{backgroundColor: "#1F2937"}}>
        <div className="container"style={{paddingTop:"80px",paddingBottom:"80px"}}>
        <div className="container text-center mb-5">
  <div className="row justify-content-center align-items-center">
    <div className="col-12 col-lg-8 mb-3 mb-lg-0">
      <h2 className="display-4 fw-bold text-light">
        The best of the best
      </h2>
    </div>
    <div className="col-12 col-lg-4 d-flex justify-content-center">
      <Button
        variant="dark"
        style={{ backgroundColor: "#1F2937", borderColor: "white", maxWidth: "233px", height: "64px" }}
      >
        Sign Up Now
      </Button>
    </div>
  </div>
</div>

      <div className="row row-cols-1 row-cols-md-3 g-5">
        {ProductCardsData.products.map((item, index) => (
          <div className="col" key={index}>
            <ProductCard
              buttonText={item.buttonText}
              description={item.description}
              image={item.image}
              title={item.title}
            />
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default SectionTwo;
