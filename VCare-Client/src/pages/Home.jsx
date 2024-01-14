import React, { useContext } from 'react'
import Card_home from '../components/Card_Home'
import { AuthContext } from '../App'
import Nav from '../components/Nav'
import Service_Card from '../components/Service_Card';


const Home = () => {

  return (
    <React.Fragment>
      {/* Not Resuing Hero Section So not making it as component */}
      <section class="hero_section w-screen">
        <div class=" h-[48vh] md:h-[50vh] lg:h-[80vh] bg-cover lg:bg-cover lg:bg-no-repeat flex items-center  flex-col rounded-b-[30%] text-white" style={{ backgroundImage: 'url(img/d8.jpg)' }}>
          <div class="w-full h-full flex  items-center flex-col bg-[#4FA097] bg-opacity-75 rounded-b-[30%]">
            <a href="home.html">
              <div class="flex items-center flex-col pt-10">
                <img class="w-20 md:w-24" src="img/logo.png" alt="logo"/>
                  <span class="text-2xl md:text-3xl font-[AltoneTrial-Reg] font-extrabold">VCARE GROUPS</span>
              </div>
            </a>
            <Nav/>
            <div class="flex items-center flex-col">
              <div class="font-semibold pt-6 pb-4" style={{textShadow: 'rgba(0, 0, 0, 0.514) 0px 3px 6px'}}><span class="text-2xl lg:text-6xl">Welcome to our online</span> <span class="text-2xl lg:text-6xl text-[#FCC201]">Pharmacy!</span></div>
              <div class="text-lg lg:text-2xl w-[80%] md:w-[50%] lg:w-[74%] text-center">Discover a wide range of pharmaceutical products, from prescription medication to over the counter essentials.</div>
            </div>
          </div>
        </div>
      </section>
      <div class="flex flex-col md:flex-row w-full justify-evenly items-center lg:mt-[-32vh]">
        <Card_home/>
      </div>
    </React.Fragment>
  )
}

export default Home