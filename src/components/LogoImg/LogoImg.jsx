/* eslint-disable react/prop-types */
import styles from './LogoImg.module.css';
function LogoImg({logo}) {
  return (
      <>
        <img className={styles.logoImg} src={logo} alt="logo of the company"/>
      </>
  )
}

export default LogoImg