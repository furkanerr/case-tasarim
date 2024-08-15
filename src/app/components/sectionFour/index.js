"use client";
import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CommentCard from "../CommentCard";
import cardData from "../../../../datas/commentCard.json";
import styles from "./style.module.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const SectionFour = () => {
  return (
    <div className={styles.sectionContainer}>
      <div className={`${styles.header} container`}>
        <h2 className="text-center mb-4">Because they love us</h2>
        <div className={styles.navigationContainer}>
          <button className={styles.swiperButton} aria-label="Previous slide">
            <FaChevronLeft className={styles.icon} />
          </button>
          <button className={styles.swiperButton} aria-label="Next slide">
            <FaChevronRight className={styles.icon} />
          </button>
        </div>
      </div>
      <div className={styles.cardBackground}></div> {/* Sarı arka plan */}
      <div className={styles.cardContent}>
        <Swiper
          modules={[Navigation]}
          slidesPerView={4}
          centeredSlides={true}
          spaceBetween={30}
          grabCursor={true}
        
          navigation={{
            nextEl: `.${styles.swiperButton}:last-of-type`,
            prevEl: `.${styles.swiperButton}:first-of-type`,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1.5,  // Mobil ekranlarda 1 slayt görünür
              spaceBetween: 15,
            },
            480: {
              slidesPerView: 1.5,  // Küçük tabletlerde 2 slayt görünür
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 3,  // Büyük tabletlerde 3 slayt görünür
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,  // Masaüstü ekranlarda 4 slayt görünür
              spaceBetween: 30,
            },
          }}
        >
          {cardData.cards.map((card) => (
            <SwiperSlide key={card.id}>
              <CommentCard
                title={card.title}
                description={card.description}
                image={card.image}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SectionFour;
