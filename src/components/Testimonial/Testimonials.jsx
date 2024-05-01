import React from 'react'
import './Testimonials.css';

import per01 from '../../file/image/Person-1.jpg'
import per02 from '../../file/image/Person-2.jpg'
import per03 from '../../file/image/Person-3.jpg'
import per04 from '../../file/image/Person-4.jpg'
import per05 from '../../file/image/Person-5.jpg'
import per06 from '../../file/image/Person-6.jpg'

const Testimonials = () => {
   

   return <>
         <div className="per01">
         <p>"My trip to the majestic forts and palaces of Rajasthan organized through this travel website was an absolute delight! From the vibrant markets of Jaipur to the serene lakes of Udaipur, every moment was filled with wonder and awe. The attention to detail and personalized service made the journey seamless and unforgettable. Can't wait to explore more of India with them!" 
           <br/> <br/>- Neha Sharma, Delhi
         </p>

         <div className='Per gap-4 mt-3'>
            <img src={per01} className='img1' alt="" />
            <div>
               <h6 className='name mb-0 mt-3'>Neha Sharma</h6>
               <p>Customer</p>
            </div>
         </div> 
      </div>

      <div className="per02">
         <p>"My recent getaway to the serene backwaters of Kerala arranged via this travel website was truly magical! The houseboat experience in Alleppey was unforgettable, surrounded by lush greenery and tranquil waters. The professionalism and local expertise ensured a seamless trip, allowing me to relax and soak in the natural beauty of God's Own Country. Highly recommend booking your next adventure through this website!" <br/><br/>- Rohan Chauhan , Mumbai
         </p>

         <div className='Per gap-4 mt-3'>
            <img src={per02} className='img2' alt="" />
            <div>
               <h6 className='name mb-0 mt-3'>Rohan Chauhan</h6>
               <p>Customer</p>
            </div>
         </div> 
      </div>

      <div className="per03">
         <p>"Exploring the bustling streets of Hyderabad through this travel website was an incredible experience! From indulging in mouthwatering biryanis to marveling at the historic Charminar, every moment was filled with excitement and discovery. The knowledgeable guides and seamless arrangements made the trip unforgettable. Can't wait to plan my next adventure through this website!" 
            <br/><br/>- Kartik Tyagi, Hyderabad
         </p>

         <div className='Per gap-4 mt-3'>
            <img src={per03} className='img3' alt="" />
            <div>
               <h6 className='name mb-0 mt-3'>Kartik Tyagi</h6>
               <p>Customer</p>
            </div>
         </div> 
      </div>

      <div className="per04">
         <p>"My journey to the enchanting valleys of Srinagar organized via this travel website was nothing short of spectacular! From the serene Dal Lake to the breathtaking views of the Himalayas, every moment was filled with beauty and tranquility. The professionalism and attention to detail ensured a seamless and memorable experience. Highly recommend for anyone seeking a soulful escape in nature!" <br/> <br/>- Sameer, Delhi
         </p>
            <br/>
         <div className='Per gap-4 mt-3'>
            <img src={per04} className='img4' alt="" />
            <div>
               <h6 className='name mb-0 mt-3'>Sameer</h6>
               <p>Customer</p>
            </div>
         </div> 
      </div>

      <div className="per05">
         <p>"Embarking on a culinary journey through the vibrant streets of Amritsar via this travel website was an absolute delight! From savoring mouthwatering Punjabi delicacies to visiting the sacred Golden Temple, every moment was a feast for the senses. The local expertise and personalized service made the trip unforgettable. Can't wait to explore more of Punjab through this website!" 
            <br/><br/>- Priya Gupta, Mumbai
         </p>
         <br/>
         <div className='Per gap-4 mt-3'>
            <img src={per05} className='img5' alt="" />
            <div>
               <h6 className='name mb-0 mt-3'>Priya Gupta</h6>
               <p>Customer</p>
            </div>
         </div> 
      </div>
      
      <div className="per06">
         <p>"My recent adventure to the majestic Himalayas of Himachal Pradesh organized through this travel website was an absolute thrill! From trekking through scenic valleys to exploring ancient monasteries, every moment was filled with awe and wonder. The meticulous planning and knowledgeable guides ensured a seamless and unforgettable experience. Highly recommend for anyone seeking adventure in the mountains!"
            <br/> <br/> - Karan Singh, Pune
         </p>
         <br/>
         <div className='Per gap-4 mt-3'>
            <img src={per06} className='img6' alt="" />
            <div>
               <h6 className='name mb-0 mt-3'>Karan Singh</h6>
               <p>Customer</p>
            </div>
         </div> 
      </div>
   </>
}

export default Testimonials