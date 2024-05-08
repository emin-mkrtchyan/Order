import React from 'react';

export default function CategoryItem({ imageUrl, name, isSelected, onClick }) {
  return (
    <div>
      <input type="checkbox" checked={isSelected} onChange={onClick} />
      <div className="products w-[1201px] top-[690px] cursor-pointer">
        <img src={imageUrl} alt={name} className="w-full rounded-md" />
        <span>{name}</span>
      </div>
    </div>
  );
}
