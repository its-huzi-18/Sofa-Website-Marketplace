'use client';

import React, { useState } from 'react';

interface QuantityUpdaterProps {
  initialQuantity: number;
  onQuantityChange?: (quantity: number) => void;
}

const QuantityUpdater: React.FC<QuantityUpdaterProps> = ({
  initialQuantity,
  onQuantityChange,
}) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleIncrease = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    if (onQuantityChange) onQuantityChange(newQuantity);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      if (onQuantityChange) onQuantityChange(newQuantity);
    }
  };

  return (
    <div className="flex items-center border border-black/50 rounded-2xl w-32 h-14">
      <button
        onClick={handleDecrease}
        className="px-3 text-lg font-semibold rounded-full hover:bg-gray-200"
        disabled={quantity <= 1}
      >
        -
      </button>
      <span className="px-4 text-lg">{quantity}</span>
      <button
        onClick={handleIncrease}
        className=" px-3 text-lg font-semibold rounded-full hover:bg-gray-200"
      >
        +
      </button>
    </div>
  );
};

export default QuantityUpdater;
