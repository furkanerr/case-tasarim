import Image from 'next/image';
import styles from './Card.module.css';


import cup from '../../../../datas/cup.png'
const SectionOneCard = ({ icon, title, text }) => {
  // İkon eşleştirmesi için resimlerinizi kullanın
  const iconMap = {
    'cup': <Image src={cup} alt="Bolt Icon" width={32} height={32} />,
  
  };

  return (
    <div className={`${styles.card} card border-0 p-3 m-1`}>
      <div className="card-body d-flex flex-column align-items-center"> {/* Kart içeriğini ortalamak için flexbox kullanıyoruz */}
        <div className="icon-container mb-3"> {/* İkon için bir kapsayıcı */}
          {iconMap[icon]} {/* İkonu render ediyoruz */}
        </div>
        <h5 className="card-title fw-bold text-center">{title}</h5>
        <p className="card-text text-center">{text}</p> {/* Metni ortalamak için text-center eklendi */}
      </div>
    </div>
  );
};

export default SectionOneCard;
