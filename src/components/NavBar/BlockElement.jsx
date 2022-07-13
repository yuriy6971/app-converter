import React from 'react'
import s from "./blockElement.module.css"
import Element from './Element'



const BlockElement = (props) => {
    return(
        <div>
         <h3 className = {s.title_list}>Актуальный курс валют :</h3>
         <div className = {s.title_table}>
             <p>Код валюты</p>
             <p>название</p>
             <p>курс за ед. Грн</p>
         </div>
         <div className = {s.elem_valutes}>
             {props.valute.map((item,index) => <Element key = {index.toString()} namesValute = {item.ccy} title = {item.title} 
             exchenge = {item.buy} />)}
         </div>
        </div>
    )
}
export default BlockElement