import React from 'react';
import ApiService from '../../utils/api-service';
import Spinner from '../spinner';

class ItemList extends React.PureComponent {

    apiService = new ApiService();

    state = {
        list: []
    };

    renderListItems = (items) =>
        items.map(item => <li key={item.name}
                              onClick={() => this.props.onClick(item.id)}
                              className="list-group-item">{item.name}</li>
        );

    componentDidMount() {
        this.apiService.getAll('people')
            .then(items => this.setState({ list: items }))
    };

    render() {
        const { list } = this.state;

        if(!list.length) {
            return <Spinner/>;
        }

        const items = this.renderListItems(list);
        return(
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}

export default ItemList;