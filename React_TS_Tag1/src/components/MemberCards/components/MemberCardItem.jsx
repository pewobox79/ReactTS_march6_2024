import styles from '../../../styles/AboutUs.module.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const MemberCardItem = ({ name, age, id }) => {

    //Template String 
    const url = `/about-us/${id}`;

    const [isActive, setIsActive] = useState(false);


    return (<div>
        <Link to={url}>
            <div className={styles.memberCard}>
                <div className={styles.cardBody}>
                    <div 
                    style={{ backgroundColor: isActive ? "green": "white", color: isActive ? "white" : "green" }}
                    >
                        {name} {age}</div>
                </div>
            </div>
        </Link>
        <button onClick={()=> setIsActive(!isActive)}>click mich</button>
    </div>
    )
}

export default MemberCardItem
