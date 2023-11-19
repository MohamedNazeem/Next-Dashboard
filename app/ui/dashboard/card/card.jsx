import { MdSupervisedUserCircle } from 'react-icons/md';
import styles from './card.module.css'

const Card = ({title, number,percent,msg}) => {
    return (
        <div className={styles.container}>
            <MdSupervisedUserCircle size={24}/>
            <div className={styles.text}>
                <span className={styles.title}>{title}</span>
                <span className={styles.number}>{number}</span>
                <span className={styles.details}>
                    <span className={styles.positive}>{`${percent}% `}</span><span>{msg}</span>
                </span>
            </div>
        </div>
    )
}

export default Card;