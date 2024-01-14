import React from 'react';

const Card_Home = ({card_title_image},{card_description}) => {

  return (
    <React.Fragment>
      <section>
        
          <div data-aos="fade-up" data-aos-duration="375" data-aos-easing="ease-in-out" class="max-w-sm bg-white border border-gray-200 rounded-lg shadow m-4 pb-5">
              <img class="rounded-t-lg aspect-[3/2] object-contain" src={card_title_image} alt="" />
            <div class="pl-5 pr-5 mt-[-1rem] flex flex-col items-center text-center">
              <p class="mb-3 font-normal text-gray-700">{card_description}</p>
              <a href="Labs.html" class="self-center px-6 py-4 text-xl  text-center text-white bg-[#FCC201] rounded-lg mt-2 hover:bg-[#c9c043] transition-all ease-in-out duration-300">
                SEE MORE
              </a>
            </div>
          </div>
      </section>
    </React.Fragment>
  )
}

export default Card_Home
