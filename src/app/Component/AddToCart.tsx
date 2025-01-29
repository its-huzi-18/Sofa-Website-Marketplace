'use client';

import { useState } from 'react';
import { useCart } from '@/app/Component/CreateContext'; // Import the cart context
import QuantityUpdater from './CartQuantity';

interface CartManagerProps {
  product: {
    id: string;
    name: string;
    price: number;
    image: string;
    quantity: number;
  };
}

const CartManager: React.FC<CartManagerProps> = ({ product }) => {
  const { addToCart } = useCart(); // Access addToCart from context
  const [quantity, setQuantity] = useState<number>(1);
  const [notification, setNotification] = useState<string | null>(null);
  const [progress, setProgress] = useState<number>(100);

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity,
      image: product.image,
    });

    setNotification(`${product.name} has been added to your cart!`);
    setProgress(100);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev <= 0) {
          clearInterval(interval);
          setNotification(null);
          return 0;
        }
        return prev - 1.5;
      });
    }, 20);
  };

  return (
    <div className="flex gap-3 items-center">
      {notification && (
        <div className="fixed top-1 left-1/2 transform -translate-x-1/2 w-full sm:w-[360px]">
          <div className="bg-white shadow-white p-4 rounded-lg shadow-lg z-50 flex  flex-col justify-between items-center">
            <p>{notification}</p>
            <div className="relative w-full bg-gray-600 h-1 mt-2 rounded-full">
              <div
                className="absolute top-0 left-0 h-1 bg-green-500 rounded-full"
                style={{ width: `${progress}%`, transition: 'width 0.1s ease-out' }}
              ></div>
            </div>
          </div>
        </div>
      )}
      <QuantityUpdater
        initialQuantity={1}
        onQuantityChange={setQuantity}
      />
      <button
        onClick={handleAddToCart}
        className="hover:bg-mainColor w-full sm:w-[215px] h-12 sm:h-[64px] bg-transparent text-black rounded-2xl border border-black flex items-center justify-center gap-2"
      >
        Add To Cart
      </button>
    </div>
  );
};

export default CartManager;
