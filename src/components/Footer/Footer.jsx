import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        Developed with 💙 by <span className={styles.developerName}>Eng: Mohamed Ali  </span>  2026
      </p>
    </footer>
  );
}