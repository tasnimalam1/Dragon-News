import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftNavbar = () => {
    const [categories,setCategories] = useState([]);

    useEffect(()=>{
        fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res=>res.json())
        .then(data=> setCategories(data.data.news_category))
    },[])

    
        // "category_id": "01",
        // "category_name": "Breaking News"
        // },

    return (
        <div className='space-y-4'>
            <h1 className='font-semibold'>All Category ({categories.length})</h1>
            <div className='flex flex-col gap-3'>
                {
                    categories.map(category => (<NavLink to={`/category/${category.category_id}`} className={({isActive})=>`btn border-none ${isActive? 'active bg-[#E7E7E7]': 'bg-base-100'}`} key={category.category_id}>{category.category_name}</NavLink>))
                }
            </div>
        </div>
    );
};

export default LeftNavbar;