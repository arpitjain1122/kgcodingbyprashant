const Item = ({ fooditem }) => {
  // const Item = ({fooditem}) modern destructuring

  // type - array destructuring
  //let {fooditem} = props;

  return (
    // fooditem ko uthaya props ke andar aur as an argument le liya
    <li className="list-group-item">{fooditem}</li>
  );
};

export default Item;
