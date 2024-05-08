import React from 'react';

function CategoryList({ name, imageUrl }) {
    return (
        <div className=' w-[1199px] h-[200px] mt-[100px] '>
            <input className=' ml-[227px] ' type="checkbox" name="" id="" />
            <div className="products w-[1201px]  top-[690px] ">
                <img src={imageUrl} alt={name} className='  w-[100px] h-[100px] rounded-md bg-p bg-pink-200 ' />
                <span className=' text-center'>{name}</span>
            </div>
        </div>
    )
}

export default CategoryList;
