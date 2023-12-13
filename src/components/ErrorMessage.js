const ErrorMessage = ({ items }) => {
  //   let fooditems = ["dal", "khana", "Green Vegetable"];

  return <>{items.length === 0 && <h3>I am still hungry</h3>}</>;
};

export default ErrorMessage;
