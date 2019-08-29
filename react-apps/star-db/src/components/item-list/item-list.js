import React from 'react';
import './item-list.css';

const ItemList = (props) => {
    const items = props.data.map(item => {
        const { id } = item;
        const label = props.renderItem(item);
        return(<li key={item.id} onClick={() => props.onClick(id)} className="list-group-item">{label}</li>)
    });

    return(
        <ul className="item-list list-group">
            {items}
        </ul>
    );
}

export default ItemList;