import React from 'react';
import Spinner from '../spinner';

class ItemList extends React.PureComponent {
    state = {
        list: []
    };

    renderListItems = items =>
        items.map(item => {
            const { id } = item;
            const label = this.props.renderItem(item);
            return(
                <li key={item.id}
                    onClick={() => this.props.onClick(id)}
                    className="list-group-item">{label}</li>
            );
        });

    componentDidMount() {
        this.props.getData()
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