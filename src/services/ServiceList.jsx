import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'
import weatherImg from '../file/image/weather.png'
import guideImg from '../file/image/guide.png'
import customizationImg from '../file/image/customization.png'

const servicesData = [
   {
      imgUrl: weatherImg,
      title: `Calculate Weather`,
      desc: `
      Plan your travels seamlessly with our real-time weather updates, ensuring you're prepared for every destination's conditions.`,
   },
   {
      imgUrl: guideImg,
      title: `Best Tour Guide`,
      desc: `
      Embark on unforgettable journeys with our expert tour guides, combining local insights and enthusiasm to create the best travel experiences.`,
   },
   {
      imgUrl: customizationImg,
      title: 'Customization',
      desc: `Tailor your travel adventure to perfection with our seamless customization options, ensuring every detail aligns with your unique preferences.`,
   },
]

const ServiceList = () => {
   return <>
      {
         servicesData.map((item, index) => (
            <Col lg='3' md='6' sm='12' className='mb-2' key={index}>
               <ServiceCard item={item} />
            </Col>))
      }
   </>

}

export default ServiceList