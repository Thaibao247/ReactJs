import React from 'react';
import './styles.scss'
function MenuList({menuList}) {
    return (
        <div className='row'>
                {menuList.map((item) =>
                    <div className="col-6">
                            <div key={item.id} className='menu-item'>
                                    <img src={item.img} alt={item.title} className='photo' />
                                    <div className='item-info'>
                                    <header>
                                        <h4>{item.title}</h4>
                                        <h4 className='price'>${item.price}</h4>
                                    </header>
                                    <p className='item-text'>{item.desc}</p>
                                    </div>
                            </div>
                    </div>
                    )}
        </div>
    );
}

export default MenuList;