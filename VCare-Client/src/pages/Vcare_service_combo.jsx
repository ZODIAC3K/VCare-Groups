import React from 'react'
import Service_Card from '../components/Service_Card';
import { services } from '../data';
import Nav_bar from '../components/Nav_bar';
import Footer from '../components/Footer';


const Vcare_service_combo = () => {
  return (
    <React.Fragment>
      <Nav_bar/>
      {
        services.map((service, idx)=>{{
          return <Service_Card key={idx} title={service.title} link={service.link} images={service.images} fontawesome={service.icon} description={service.description}/>
        }})
      }
      <Footer />
    </React.Fragment>
  )
}

export default Vcare_service_combo