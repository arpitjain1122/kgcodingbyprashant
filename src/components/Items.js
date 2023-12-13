import styles from "./Item.module.css";

const Item = ({ fooditem, handleBuyButton }) => {
  // const Item = ({fooditem}) modern destructuring

  // type - array destructuring
  //let {fooditem} = props;

  // creating a seperate function for button click and event handling. event ka kaam hota hai har cheez ko detail mein batana
  // const handleBuyButtonClicked= (event) => {
  //   console.log(event);
  //   console.log(`${fooditem} being bought`);
    
  // }
  
  

  return (
    // fooditem ko uthaya props ke andar aur as an argument le liya
    <li className={`${styles["kg-item"]} list-group-item`}>
      <span className={styles["kg-span"]}>{fooditem}</span>
      <button
        className={`${styles.button} btn btn-info`}
        //onClick={() => console.log(`item ${fooditem}  being bought`)} //onClick button yaha pr hamne button ko uske food se map kr diya hai hai. 
        // second way
        //onClick={(event) => handleBuyButtonClicked(event)} // Event Handler as arrow functions
        onClick={handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;
