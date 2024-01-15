import React from 'react'
import Service_layout from '../components/Service_layout.jsx';
import { useParams } from 'react-router-dom';
import Nav_bar from '../components/Nav_bar.jsx';
import Footer from '../components/Footer.jsx';
import { h_u, labs, pharmacy } from '../data/index.js';

const Vcare_service = ( { location } ) => {
    var data = null;

    if (location == 'labs') {
      data = labs
    } else if (location == 'pharmacy') {
      data = pharmacy
    } else if (location == 'h&u') {
      data = h_u
    }

  return (
    <React.Fragment>
      {
        data !== null ? <Service_layout images={data.images} title={data.title} description={data.description}/> : <p>'404 Not Found'</p>
      }
    </React.Fragment>
  )
}

export default Vcare_service