import react from 'react'
import s from './header.module.css'

const Header = () => {
    return(
        <header className = {s.head}>
        <h1 className = {s.conv}>Конвертатор валют</h1>
        </header>
      
        
    )
}
export default Header