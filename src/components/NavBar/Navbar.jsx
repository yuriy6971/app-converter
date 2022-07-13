//import React, { Component } from 'react'
import s from './navbar.module.css'
import React from 'react'
import {connect} from 'react-redux'
import {setValuteThunkAC} from '../../redux/convertor_reducer'
import Element from './Element'
import BlockElement from './BlockElement'


class NavBarClass extends React.Component{
   constructor(props){
       super(props)
   }

   componentDidMount(){
       this.props.ThunkGetValute()
   }

   render() {
       return <div className = {s.nav}>
           <BlockElement valute = {this.props.valute} isFetching = {this.props.isFetching} />
         

       </div>
                  
       
   }
}
const mapStateToProps = (state) => {
    return {
        valute : state.convertorPage.valute,
        isfetching : state.convertorPage.isFetching
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
       ThunkGetValute : () => {
           dispatch(setValuteThunkAC())
       }
    }
}

const NavBarContainer = connect (mapStateToProps,mapDispatchToProps)(NavBarClass)
export default NavBarContainer