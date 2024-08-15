import Image from "next/image";
import { Button } from "react-bootstrap";
import Ayakkabi from "../../../../datas/Col.png";
import SectionOneCard from "../../components/sectionOneCard/index";
import sectionOneCardsData from "../../../../datas/sectionOneCardsData.json";
import styles from './style.module.css'; 
import play from '../../../../datas/play-circle.png'
export default function SectionOne() {
  return (
    <section
      className="bg-light py-5"
      style={{
        background: "linear-gradient(180deg, #FFFBEB 0%, #FFFFFF 89.63%)", // Gradient rengi
      }}
    >
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-md-6 text-md-left mb-4 mb-md-0">
            <h1 className="display-4 mb-3 fw-bold">Collectible Sneakers</h1>
            <p className="lead mb-4">
              Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
              suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum
              ultrices amet.
            </p>
            <div className={styles.buttoncontainer}> {/* Yeni stil sınıfını kullanın */}
              {/* Sign up now butonunun kenarlığı olacak */}
              <Button
                variant="outline-primary"
                style={{ color: "#78350F", borderColor: "#78350F",borderWidth: "2px" }}
              >
                Sign up now
              </Button>
              {/* Watch Demo butonunun yazı rengi olacak */}
              <Button
                variant="link"
                className="d-flex align-items-center"
                style={{ color: "#78350F", textDecoration: "none" }}
              >
             <Image
             src={play}
             width={24}
             height={24}
             />
                Watch Demo
              </Button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="position-relative justify-content-end flex">
              <Image
                src={Ayakkabi} // Ayakkabı görselinin yolu
                alt="Collectible Sneakers"
                width={450}
                height={430}
                className="img-fluid rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Kartlar */}
        <div className="row g-4">
          {sectionOneCardsData.map((item, index) => (
            <div className="col-md-4 col-sm-12" key={index}>
              <SectionOneCard
                text={item.text}
                icon={item.icon}
                title={item.title}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
