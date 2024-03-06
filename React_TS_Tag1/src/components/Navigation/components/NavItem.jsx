import { NavLink } from 'react-router-dom';
import '../../../styles/Navigation.css'
import styles from '../../../styles/Navigations.module.css'

const NavItem = (props) => {
    
    return (
        <NavLink to={props.href} className={({isActive})=> isActive ? `${styles.isActive}`: `${styles.inActive}`}>{props.name}</NavLink>
    )
}

export default NavItem
