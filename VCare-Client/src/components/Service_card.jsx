import React from 'react'
import {Navigation, Pagination} from 'swiper/modules'
import {Swiper, SwiperSlide} from 'swiper/react'
import Proptypes from 'prop-types'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'


const Service_Card = ({images, fontawesome, title, description, link}) => {
  return (
    <React.Fragment>
      <div className='flex flex-col items-center min-h-screen px-5 py-5 md:px-20 md:py-20 gap-10'>
      <div className="flex flex-col items-center gap-5">
            <h3 className="self-start text-[#4FA097] text-xl md:text-2xl lg:text-4xl"><i className={fontawesome}></i>&nbsp; {title}</h3>
            <hr className="border-[#FCC201] w-full"/>
            <article className="flex items-center gap-5 lg:flex-row flex-col md:flex-start">
                <div className="flex flex-col gap-5 items-center sm:items-start">
                    <p className="text-sm md:text-lg lg:text-xl">{description}</p>
                </div>
                <a href={link} className="w-1/2 md:w-1/3 px-6 py-4 text-xl text-center text-white bg-[#FCC201] rounded-lg mt-2 hover:bg-[#c9c043] transition-all ease-in-out duration-300">Know More</a>
            </article>
            <Swiper modules={[Navigation, Pagination]} navigation pagination={{clickable:true}} className="w-[375px] h-[187.5px] sm:w-[600px] sm:h-[300px] md:w-[800px] md:h-[400px]">
              <SwiperSlide ><img className="w-full h-full" src={images[0]}/></SwiperSlide>
              <SwiperSlide ><img className="w-full h-full" src={images[1]}/></SwiperSlide>
              <SwiperSlide ><img className="w-full h-full" src={images[2]}/></SwiperSlide>
            </Swiper>
        </div>
        </div>
    </React.Fragment>
  )
}

export default Service_Card

// Service_Card.propTypes = {
//   images: Proptypes.arrayOf(Proptypes.string),
//   fontawesome: Proptypes.string,
//   title: Proptypes.string,
//   description: Proptypes.string,
//   link: Proptypes.string
// }