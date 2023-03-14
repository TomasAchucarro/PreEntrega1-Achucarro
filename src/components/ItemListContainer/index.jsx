import styles from "./item.module.scss";

const ItemListContainer = ({ greeting }) => {
  return (
    <div className={styles.container}>
      <p className={styles.greeting}>{greeting}</p>
    </div>
  );
};

export default ItemListContainer;
