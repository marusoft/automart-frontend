import styles from "../styles/Footer.module.css";
import { BiCopyright } from "react-icons/bi"

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.content}>
        <span className={styles.footertitle}>Automart</span>
        <p className={styles.date}><BiCopyright/> 2022</p>
      </div>
    </div>
  );
};

export default Footer;
