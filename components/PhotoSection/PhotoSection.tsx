import Link from 'next/link'
import React from 'react'
import { SHOP } from '../../constants/routes'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

import { photoSectionItems } from '../../constants/photoSection'
import { Autoplay } from 'swiper'

import styles from './PhotoSection.module.css'

const PhotoSection = () => {
  return (
    <div className={styles.photoSection}>
      <Swiper
        autoplay={{
          delay: 2500,
        }}
        loop={true}
        modules={[Autoplay]}
        className={styles.swiperContainer}
      >
        {photoSectionItems.map(({ title, main, description, image }) => (
          <SwiperSlide key={main} className={styles.swiperSlide}>
            <div className={styles.photoContainer}>
              <span>{title}</span>
              <h1>{main}</h1>
              <p>{description}</p>
              <Link href={SHOP} passHref>
                <a className={styles.shopBtn}>SHOP NOW</a>
              </Link>
            </div>
            <div className={styles.imageSection}>
              <img src={image} alt="slider-image" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default PhotoSection
