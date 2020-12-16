import Product from './Product';
import '../styles/components/Products.css';
import { useContext } from 'react';
import AppContext from '../context/AppContext';

export default function Products() {
  const { state, addToCart } = useContext(AppContext);
  const { products } = state;

  const handleAddToCart = product => addToCart(product);
  return (
    <div className="Products">
      <div className="Products-items">
        {products.map(product => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}
