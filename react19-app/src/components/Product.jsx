function Product({ title, price }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>₹{price}</p>
    </div>
  );
}

export default Product