import React from 'react'

const Service_heading = (props) => {
  return (
    <React.Fragment>
      <section>
        <span data-aos="fade-in" data-aos-duration="375" data-aos-easing="ease-in-out" class="flex flex-col justify-center items-center text-center w-[40vw]">
          <span class="text-2xl md:text-3xl font-[AltoneTrial-Reg] font-extrabold text-[#208796] mt-10 mb-5 text-nowrap">{props.title}</span>
          <span class="text-lg lg:text-2xltext-center text-gray-400">{props.description}</span>
        </span>
      </section>
    </React.Fragment>
  )
}

export default Service_heading