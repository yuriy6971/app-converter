import React from 'react'
import s from './preloader.module.css'
import loader from '../../assets/images/loader1.svg'


const Preloader = (props) => {
   return(
       <div className = {s.preload}>
           <img src={loader} alt="loader" />
       </div>
   )
}

export default Preloader