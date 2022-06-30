import React from 'react';
import "./styles.scss";


function CategoryList({categories, filterCate}) {
    return (
        <div className='btn-category'>
            {
                categories.map((cate,index) => 
                    <button className='btn-filterCate' key={index} onClick={()=>filterCate(cate)}>
                        {cate}
                    </button>
                )
            }
        </div>
    );
}

export default CategoryList;
