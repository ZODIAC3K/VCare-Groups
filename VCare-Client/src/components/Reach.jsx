import React from 'react'

const Reach = () => {
  return (
    <React.Fragment> 
        <section class="contact-us text-gray-600 body-font">
        <h1 class="text-6xl sm:text-6xl font-bold title-font  text-center pt-10 text-[#4FA097]">REACH US</h1>
        <div class="container flex flex-col md:flex-row lg:max-w-5xl w-full px-5 py-8 md:py-6 mx-auto section"
            id="contact-form">
            <div data-aos="fade-right" data-aos-duration="375" data-aos-easing="ease-in-out" data-aos-anchor=".contact-us" class="md:w-1/3 w-full mr-28 flex flex-col justify-evenly">
                <div class="flex h-24">
                    <img class=" object-contain" src="img/add.png" alt="" srcset=""/>
                    <div class="flex flex-col mx-6">
                        <span class="text-4xl font-bold text-[#4FA097]">ADDRESS</span>
                        <span class="text-lg text-gray-500">Kreiger Valleys, South Vincent</span>
                    </div>
                </div>
                <div class="flex h-24 mt-6">
                    <img class="object-contain" src="img/phone.png" alt="" srcset=""/>
                    <div class="flex flex-col mx-6">
                        <span class="text-4xl font-bold text-[#4FA097]">PHONE</span>
                        <span class="text-lg text-gray-500">+91 XXXXXXXXXX</span>
                    </div>
                </div>
                <div class="flex h-24 mt-4 mb-6">
                    <img class=" object-contain" src="img/email.png" alt="" srcset=""/>
                    <div class="flex flex-col mx-6">
                        <span class="text-4xl font-bold text-[#4FA097]">EMAIL</span>
                        <span class="text-lg text-gray-500">dummy@gmail.com</span>
                    </div>
                </div>
                <div class="flex flex-col gap-1 h-24 text-[#4FA097]">
                  <p class="text-4xl font-bold">Follow Us:</p>
                  <div class="flex items-center gap-5">
                    <i class="text-4xl fa-brands fa-facebook"></i>
                    <i class="text-4xl fa-brands fa-instagram"></i>
                    <i class="text-2xl text-white bg-[#4FA097] p-1 px-[0.6rem] rounded-full fa-brands fa-tiktok"></i>
                  </div>
                </div>
            </div>
            <div data-aos="fade-left" data-aos-duration="375" data-aos-easing="ease-in-out" data-aos-anchor=".contact-us" class="md:w-2/3 w-full mt-10 md:mt-0 p-10 bg-[#4FA097]">
                <form action="#" method="post" id="submit-contact-form">
                    <div class="p-2 w-full">
                        <div class="relative">
                            <label for="name" class="leading-7 py-4 text-lg text-white">Name</label>
                            <input type="text" id="name" name="name" required=""
                                class="w-full bg-white border border-gray-400  focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-white py-1 px-1 leading-8 transition-colors duration-200 ease-in-out "/>
                        </div>
                    </div>
                    <div class="p-2 w-full">
                        <div class="relative">
                            <label for="email" class="leading-7 py-4 text-lg text-white">Email</label>
                            <input type="email" id="email" name="email" required=""
                                class="w-full bg-white border border-gray-400  focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-white py-1 px-1 leading-8 transition-colors duration-200 ease-in-out "/>
                        </div>
                    </div>
                    <div class="p-2 w-full">
                        <div class="relative">
                            <label for="message" class="leading-7 py-4 text-lg text-white">Message</label>
                            <textarea id="message" name="message" required=""
                                class="w-full bg-white border border-gray-400  focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-white py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out "></textarea>
                        </div>
                    </div>
                    <div class="p-2 w-full">
                        <button type="submit"
                            class="flex text-white bg-[#FCC201] border-0 py-4 px-6 focus:outline-none hover:bg-[#fcc101d5] text-xl font-bold shadow-lg mx-0 flex-col text-center g-recaptcha">
                            Send Message ✉
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </section>
    </React.Fragment>
  )
}

export default Reach