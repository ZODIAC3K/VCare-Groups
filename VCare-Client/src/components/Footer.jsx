import React from 'react'

const Footer = () => {
  return (
    <React.Fragment>
      <footer class="bg-black w-full flex items-center justify-center text-white body-font">
        <div class="container px-5 py-24 mx-auto flex md:items-center  lg:justify-center md:flex-row md:flex-nowrap flex-wrap flex-col gap-5">
            <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                <a class="flex title-font font-medium items-center md:justify-start justify-center text-white">
                    <img class="w-6 md:w-10" src="img/logo.png" alt="logo"/>
                    <span class="ml-1 mt-2 text-xl">VCare Groups</span>
                </a>
            </div>
            <div class="lg:w-1/4 md:w-1/2 flex flex-wrap -mb-10 md:mt-0 mt-10 md:text-left text-center">
                <div class=" w-full px-4">
                    <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">Made by:</h2>
                    <nav class="list-none mb-10">
                        <li>
                            <p class="text-gray-600">Lahai Roi pvt. ltd.</p>
                        </li>
                        <li>
                            <p class="text-gray-600">Contact no :9345760439,9003856460</p>
                        </li>
                        <li>
                            <p class="text-gray-600">Mail: lahairoipvt@gmail.com</p>
                        </li>
                        <li>
                            <p class="text-gray-600">THARATCHI VILLAGE CHENNAI-</p>
                        </li>
                        <li>
                            <p class="text-gray-600">TIRUPATI HIGHWAY</p>
                        </li>
                    </nav>
                </div>
            </div>
        </div>
        
    </footer>

    <section
        class="flex justify-center items-center bottom-0 left-0  text-lg w-full h-[10vh] bg-black text-gray-500 font-[AltoneTrial-Reg]">
        <div>© 2024 Vcare Groups</div>
    </section>
    </React.Fragment>
  )
}

export default Footer