  import MenuLink from "./MenuLink/MenuLink";
  import styles from './sidebar.module.css'
  import Image from 'next/image'
  import { menuItems } from './data';
const Sidebar = () => {

  return (
    <div className={styles.contatiner}>
        <div className={styles.user}>
            <Image className={styles.userImage} src='/noavatar.png' alt='img' width='50' height='50' />
            <div className={styles.userDetails}>
                <span className={styles.username}>Mohamed Nazeem</span>
                <span className={styles.userTitle}>Administrator</span>
            </div>
        </div>
        <ul className={styles.list}>
            {
                menuItems.map(cat => (
                    <li key={cat.title}>
                        <span className={styles.cat}>{cat.title}</span>
                        {cat.list.map((item) => {
                            return (

                                <MenuLink item={item}/>
                            )
                        })}
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default Sidebar