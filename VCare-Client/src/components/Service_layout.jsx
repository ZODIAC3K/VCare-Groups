import React from 'react'
import Nav_bar from './Nav_bar'
import Reach from './reach'
import Footer from './Footer'
import Gallary from './Gallary'
import Service_heading from './Service_heading'

const Service_Layout = () => {
  return (
    <React.Fragment>
      <div className='flex items-center flex-col overflow-x-hidden'>
      <Nav_bar/>
      <Service_heading/>
      <Gallary/>
      <Reach/>
      <Footer/>
      </div>
    </React.Fragment>
  )
}

export default Service_Layout