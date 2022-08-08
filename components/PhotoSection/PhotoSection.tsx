import Link from 'next/link'
import React from 'react'
import { SHOP } from '../../constants/routes'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

import { Navigation } from 'swiper'
import { photoSectionItems } from '../../constants/photoSection'

const PhotoSection = () => {
  return (
    <div className="px-8 mx-5 overflow-hidden h-96 bg-grey2">
      <Swiper navigation={true} modules={[Navigation]}>
        {photoSectionItems.map(({ title, main, description, image }) => (
          <SwiperSlide
            className="flex justify-center h-full pt-10 align-middle"
            key={title}
          >
            <div className="flex flex-col flex-1 gap-5 px-8 my-auto">
              <span>{title}</span>
              <h1 className="text-3xl font-bold">{main}</h1>
              <p>{description}</p>
              <Link href={SHOP} passHref>
                <a className="px-3 py-2 text-white bg-green max-w-max">
                  SHOP NOW
                </a>
              </Link>
            </div>
            <div className="flex-1">
              <img src={image} className="" alt="slider-image" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default PhotoSection
