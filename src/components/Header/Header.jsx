import styles from './Header.module.css'; 
function Header() {
  return (
    <header className={styles.heading}>
      <img
        className={styles.headingImg}
        src="./bg-header-desktop.svg"
        alt="header background"
      />
    </header>
  )
}

export default Header