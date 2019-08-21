import React from 'react';
import ApiService from '../../utils/api-service';

const ItemListView = ({ items }) => {
    return(
        <ul className="item-list list-group">
            {
                items.map(item => <li key={item.name} className="list-group-item">{item.name}</li>)
            }
        </ul>
    );
}

class ItemList extends React.PureComponent {

    apiService = new ApiService();

    state = {
        list: []
    };

    componentDidMount() {
        this.apiService.getAll('people')
            .then(items => this.setState({ list: items}))
        }

    render() {
        const { list } = this.state;
        if(!list.length) {
            return null;
        }
        return(
            <ItemListView items={list}/>
        )
    }
}

export default ItemList;