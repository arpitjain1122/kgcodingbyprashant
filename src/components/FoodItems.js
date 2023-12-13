// yaha kaam hai data show krne ka
import Item from "./Items";
const FoodItems = ({ items }) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        // method mein arguments pass krte hai vohi kiya hai, fooditem ko as a argument pass kiya hai
        <Item key={item} fooditem={item}></Item>
      ))}
    </ul>
  );
};

export default FoodItems;
