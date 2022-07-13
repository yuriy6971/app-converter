import React from 'react'
import s from './content.module.css'
import { connect } from 'react-redux'
import { updateCcyValuteActionCreator, setCurrentExchangeRateActionCreator, setValueBaseValuteActionCreator, setCurrentValuteActionCreator,swapValutesActionCreator,setCurrentElementvaluteActionCreator,turnOverRateActionCreator } from '../../redux/convertor_reducer'
import ChangeValute from './ChangeValute'

const Content = (props) => {
    let newNumberElement = React.createRef()

    const updateField = () => {
        let number = newNumberElement.current.value;
        props.updateCurrentValute(number)
    }


    const calcExchangeRate = () => {
        let number = props.screen_ccy_valute * props.currentExengeRate;

        props.setValueBase(number.toFixed(2))

    }
    const clearScreens = () => {
        props.setValueBase("")
        props.updateCurrentValute("")
    }
    const swap = () => {
        props.swapValutes();
        props.turnOver();
        props.setValueBase("");
        props.updateCurrentValute("")
        
    }

    return (
        <div>
            <div className={s.calc_valute}>
                <div className={s.coude_valute}>
                    
                        <label>{`${props.currentValute} :`} <input className={s.input_number} ref={newNumberElement} onChange={updateField} value={props.screen_ccy_valute} type="text" placeholder="введите число" size="10" /> </label>
                        <span className = {s.simbol} onClick = {swap}>&#8660;</span>
                        <label>{`${props.base_valute} :`} <input className={s.input_number} value={props.screen_base_valute} type="text" size="10" /> </label>
                    
                </div>

                <div className={s.block_button}>
                    <button className={s.butt_calc} type="button" form = "data" onClick={calcExchangeRate} >Calculete</button>
                    <button className={s.butt_clear} type="button" onClick={clearScreens}>Off</button>
                </div>
            </div>
            <p className={s.change}>Выбор валюты :</p>
            <div className={s.block_valute}>
                {props.valute.map((item, index) => <ChangeValute key={index.toString()} valuteName={item.ccy} setCurrentValute={props.setCurrentValute} setCurrentExchangeRate={props.setCurrentExchangeRate} setValueBase={props.setValueBase} updateCurrentValute={props.updateCurrentValute} setCurrentElemValute = {props.setCurrentElemValute} />)}
            </div>

        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        valute: state.convertorPage.valute,
        currentValute: state.convertorPage.currentValute,
        base_valute: state.convertorPage.base_valute,
        screen_base_valute: state.convertorPage.screen_base_valute,
        screen_ccy_valute: state.convertorPage.screen_ccy_valute,
        currentExengeRate: state.convertorPage.currentExchengeRate
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

        setCurrentValute: (abrev) => {
            dispatch(setCurrentValuteActionCreator(abrev))

        },
        updateCurrentValute: (number) => {
            dispatch(updateCcyValuteActionCreator(number))
        },

        setCurrentExchangeRate: () => {
            dispatch(setCurrentExchangeRateActionCreator())
        },

        setCurrentElemValute : (code) => {
            dispatch(setCurrentElementvaluteActionCreator(code))
        },

        setValueBase: (number) => {
            dispatch(setValueBaseValuteActionCreator(number))
        },
        swapValutes : () => {
            dispatch(swapValutesActionCreator())
        },
        turnOver : () => {
            dispatch(turnOverRateActionCreator())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content)