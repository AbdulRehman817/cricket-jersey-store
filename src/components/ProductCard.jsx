// components/ProductCard.jsx
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => (
  <Link
    to={`/product/${product.id}`}
    className="block bg-white rounded-lg shadow-md overflow-hidden"
  >
    <img
      src={product.image}
      alt={product.name}
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h3 className="font-bold text-lg">{product.name}</h3>
      <p className="text-sm text-gray-600">Rs {product.price}</p>
    </div>
  </Link>
);

export default ProductCard;
