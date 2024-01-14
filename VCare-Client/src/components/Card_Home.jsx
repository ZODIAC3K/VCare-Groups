import React from 'react';
{/* <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"> */}

const Card_Home = ({card_title_image},{card_description}) => {

  return (
    <React.Fragment>
      <section>
<<<<<<< HEAD
        <div data-aos="fade-up" data-aos-duration="375" data-aos-easing="ease-in-out" class="max-w-sm bg-white border border-gray-200 rounded-lg shadow m-4 pb-5">
          <img class="rounded-t-lg aspect-[3/2] object-contain" src={props.card_title_image} alt="" />
          <div class="pl-5 pr-5 mt-[-1rem] flex flex-col items-center text-center">
            <p class="mb-3 font-normal text-gray-700">{props.card_description}</p>
            <a href="Labs.html" class="self-center px-6 py-4 text-xl  text-center text-white bg-[#FCC201] rounded-lg mt-2 hover:bg-[#c9c043] transition-all ease-in-out duration-300">
              SEE MORE
            </a>
=======
        
          <div data-aos="fade-up" data-aos-duration="375" data-aos-easing="ease-in-out" class="max-w-sm bg-white border border-gray-200 rounded-lg shadow m-4 pb-5">
              <img class="rounded-t-lg aspect-[3/2] object-contain" src={card_title_image} alt="" />
            <div class="pl-5 pr-5 mt-[-1rem] flex flex-col items-center text-center">
              <p class="mb-3 font-normal text-gray-700">{card_description}</p>
              <a href="Labs.html" class="self-center px-6 py-4 text-xl  text-center text-white bg-[#FCC201] rounded-lg mt-2 hover:bg-[#c9c043] transition-all ease-in-out duration-300">
                SEE MORE
              </a>
            </div>
>>>>>>> parent of 401cbc7 (added login)
          </div>
        </div>
      </section>
      {/* Footer */}
      <section class="flex justify-center bottom-0 left-0  w-screen h-12 text-gray-600 font-[AltoneTrial-Reg] mt-8">
        <div>© 2024 Vcare Groups</div>
      </section>
    </React.Fragment>
  )
}

export default Card_Home
