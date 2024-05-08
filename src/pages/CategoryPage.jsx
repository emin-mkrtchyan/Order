import React from 'react';
import CategoryItem from '../components/CategoryItem';

const CategoryPage = ({ categories, selectedCategories, setSelectedCategories }) => {
  const handleCategoryClick = (categoryId) => {
    const updatedSelectedCategories = selectedCategories.includes(categoryId)
      ? selectedCategories.filter(id => id !== categoryId) 
      : [...selectedCategories, categoryId]; 
    setSelectedCategories(updatedSelectedCategories);
  };

  return (
    <div className="catPage w-[1199px] h-[468px] top-[192px] grid sm:grid-cols-2 lg:grid-cols-4 gap-4 m-auto">
      {categories.map(category => (
        <CategoryItem
          key={category.id}
          id={category.id}
          name={category.name}
          imageUrl={category.image}
          isSelected={selectedCategories.includes(category.id)}
          onClick={() => handleCategoryClick(category.id)}
        />
      ))}
    </div>
  );
}

export default CategoryPage;
