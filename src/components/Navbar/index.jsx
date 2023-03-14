import CartWidget from "./CartWidget";
import styles from "./navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Futbol Style</h1>
      <div className={styles.menu}>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
        <CartWidget />
      </div>
  );
};

export default Navbar;

