import React, { useContext } from 'react'
import Card_home from '../components/Card_Home'
import { AuthContext } from '../App'


const Home = () => {
  return (
    <React.Fragment> 
      {/* <div class="flex flex-col md:flex-row w-full justify-evenly items-center lg:mt-[-32vh]"> */}
      <Card_home/>
      {/* </div> */}
    </React.Fragment>
  )
}

export default Home