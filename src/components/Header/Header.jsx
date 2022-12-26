
import styles from './Header.module.css'
import igniteLogo from '../../assets/Ignite-logo.svg'


export function Header(){
    return (
        <div className={styles.header}>
            <img src={igniteLogo} alt="Iginte Logo" />
            <strong>Ignite Feed</strong>
        </div>
    )
}

