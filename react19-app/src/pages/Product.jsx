import { useParams } from "react-router-dom";

function Product() {
  const { id } = useParams();

  return (
    <div>
      <h2>🛒 Product Page</h2>
      <p>Product ID: {id}</p>
    </div>
  );
}

export default Product;