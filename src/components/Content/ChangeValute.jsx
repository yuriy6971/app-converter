import React from 'react'
import s from './changeValute.module.css'
import { connect } from 'react-redux'


const ChangeValute = (props) => {
    let componentCurrentValute = React.createRef()
    const showCurrentValute = (event) => {
        let val = componentCurrentValute.current.value;
       // let number = props.screen_ccy_valute * props.currentElementValute.buy;
        props.setCurrentValute(val)
        props.setCurrentElemValute(val)
        props.setCurrentExchangeRate()
        props.setValueBase("")
        props. updateCurrentValute("")

    }

    return (
        <div>
            <div className = {s.block_valute}>
                <input className={s.input} ref={componentCurrentValute} onClick={showCurrentValute} size="1" type="text" name="valute" value={props.valuteName}  />

            
            </div>

            <div className={s.block}></div>
        </div>
    )
}
export default ChangeValute
