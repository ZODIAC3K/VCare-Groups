import React from 'react'
import Nav_bar from './Nav_bar'
import Reach from './reach'
import Footer from './Footer'
import Gallary from './Gallary'
import Service_heading from './Service_heading'
import Proptypes from 'prop-types'

const Service_Layout = ({images, title, description}) => {
  return (
    <React.Fragment>
      <div className='flex items-center flex-col overflow-x-hidden'>
      <Nav_bar/>
      <Service_heading title={title} description={description}/>
      <Gallary images={images}/>
      <Reach/>
      <Footer/>
      </div>
    </React.Fragment>
  )
}

export default Service_Layout

// Service_Layout.propTypes = {
//   images: Proptypes.array(Proptypes.string),
//   title: Proptypes.string,
//   description: Proptypes.string
// }