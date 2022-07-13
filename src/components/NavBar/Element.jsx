import React from 'react'
import Preloader from '../common/Preloader'
import s from "./element.module.css"

const Element = (props) => {
    return (
        <div className = {s.elem_valute}> 
         <p className = {s.names}>{props.namesValute}</p>
         <p>{props.title}</p>
         <p>{`${props.exchenge} грн.`}</p>
        </div>
    )
}

export default Element