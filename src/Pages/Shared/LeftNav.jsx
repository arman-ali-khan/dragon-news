
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const LeftNav = () => {
    const [categories, setCategories]= useState([])
    useEffect(()=>{
        fetch('http://localhost:3000/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div>
            <h5>All Category: {categories.length}</h5>
            {
                categories.map(category => <p key={category.category_id}>
                    <Link to={`/category/${category.id}`}>{category.name}</Link>
                </p>)
            }
        </div>
    );
};

export default LeftNav;