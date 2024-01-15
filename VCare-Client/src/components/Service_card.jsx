import React from 'react'
import Nav_bar from './Nav_bar'


const Service_Card = (props) => {
  return (
    <React.Fragment>
      <Nav_bar/>
      <div className='flex flex-col items-center min-h-screen px-5 py-5 md:px-20 md:py-20 gap-10'>
      <div className="flex flex-col items-center gap-5">
            <h3 className="self-start text-[#4FA097] text-xl md:text-2xl lg:text-4xl">{font_awsome_icon}&nbsp; {props.service_title}</h3>
            <hr className="border-[#FCC201] w-full"/>
            <article className="flex items-center gap-5 lg:flex-row flex-col md:flex-start">
                <div className="flex flex-col gap-5 items-center sm:items-start">
                    <p className="text-sm md:text-lg lg:text-xl">{props.service_description}</p>
                </div>
                <a href="Labs.html" className="w-1/2 md:w-1/3 px-6 py-4 text-xl text-center text-white bg-[#FCC201] rounded-lg mt-2 hover:bg-[#c9c043] transition-all ease-in-out duration-300">Know More</a>
            </article>
            <div className="swiper w-[375px] h-[187.5px] sm:w-[600px] sm:h-[300px] md:w-[800px] md:h-[400px]">

                <div className="swiper-wrapper">

                    <div className="swiper-slide"><img className="w-full h-full" src="img/d1.jpg"/></div>
                    <div className="swiper-slide"><img className="w-full h-full" src="img/d2.jpg"/></div>
                    <div className="swiper-slide"><img className="w-full h-full" src="img/d3.jpg"/></div>
                </div>
                <div className="swiper-button-prev hidden sm:block"></div>
                <div className="swiper-button-next hidden sm:block"></div>
            </div>
        </div>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
    </React.Fragment>
  )
}

export default Service_Card