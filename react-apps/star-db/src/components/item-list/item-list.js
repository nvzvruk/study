import React from 'react';
import './item-list.css';

const ItemList = ({ data, onClick, children: renderLabel }) => {
    const items = data.map(item => {
        const { id } = item;
        const label = renderLabel(item);
        return(
            <li key={item.id} onClick={() => onClick(id)} className="list-group-item">{label}</li>
        );
    });

    return(
        <ul className="item-list list-group">
            {items}
        </ul>
    );
};

export default ItemList;