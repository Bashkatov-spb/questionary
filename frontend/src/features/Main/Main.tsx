/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './Main.module.scss';
import Footer from '../Footer/Footer';
import Blocks from '../Blocks/Blocks';

function Main(): JSX.Element {
  return (
    <div className={styles.main__container}>
      <Swiper
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div className={styles['swiper-slide']}>
            <img src="https://source.unsplash.com/random/280x240" alt="slide" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles['swiper-slide']}>
            <img src="https://source.unsplash.com/random/280x240" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles['swiper-slide']}>
            <img src="https://source.unsplash.com/random/280x240" alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
      <Blocks />
      <Footer />
    </div>
  );
}

export default Main;
