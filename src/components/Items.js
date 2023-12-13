import styles from "./Item.module.css";

const Item = ({ fooditem }) => {
  // const Item = ({fooditem}) modern destructuring

  // type - array destructuring
  //let {fooditem} = props;

  return (
    // fooditem ko uthaya props ke andar aur as an argument le liya
    <li className={`${styles["kg-item"]} list-group-item`}><span className={styles["kg-span"]}>{fooditem}</span></li>
  );
};

export default Item;
