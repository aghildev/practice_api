import Logo from "../assets/logo.png"
import styles from "./styles/Header.module.css"

const Header = ()=>{
    return(
        <div className={styles.navContainer}>
            <div className={styles.logo}>
              <img src={Logo} alt="logo" />
            </div>
            <nav className={styles.navItems}>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;