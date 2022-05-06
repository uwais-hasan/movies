import axios from "axios";
import {img_size, Key} from "../../Config/Config";
import {useEffect, useState} from "react";
import {SwiperSlide,Swiper} from "swiper/react/swiper-react";
import 'swiper/swiper.min.css'
import './Carousal.css'
import {img_undefined} from "../../Config/Config";
import {Autoplay} from "swiper";

const Carousel=({id,media})=>{



    const[person,setPerson]=useState([]);
    const personsFun=async()=>{
      const {data}=await axios.get(`https://api.themoviedb.org/3/${media&&media}/${id&&id}/credits?api_key=${Key}&language=en-US`)
        setPerson(data.cast)
    };

    useEffect(()=>{
        personsFun();
    },[]);

    console.log(person)
 return(
     <Swiper

         breakpoints={{
             // when window width is >= 640px
             640: {
                 width: 230,
                 height:320,
                 slidesPerView: 1,
             },
             // when window width is >= 768px
             768: {
                 width: 700,
                 slidesPerView: 4,
                 spaceBetween: 30
             },
             1024: {
                 width:1000,
                 slidesPerView: 5,
                 spaceBetween: 30
             },

         }}
         spaceBetween={10}
         slidesPerView={3}
         loop={true}
         autoplay={{
             delay: 2500,
             disableOnInteraction: false,
         }}
         modules={[Autoplay]}
     >
         {person &&
         person.map(img => {
             return (
                 <SwiperSlide  className='d-flex flex-column'>
                     <img src={img.profile_path ?`${img_size}${img.profile_path}`:img_undefined}/>
                     <span className='text-center color-white'>{img.original_name}</span>

                 </SwiperSlide>
             )
         })
         }



     </Swiper>

 )
}
export default Carousel