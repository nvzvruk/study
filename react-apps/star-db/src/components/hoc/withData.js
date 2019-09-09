import React from 'react';
import Spinner from '../spinner/index';

const withData = ( View, getData ) => {
    return class extends React.Component {
        state = {
            data: null
        }

        componentDidMount() {
            this.props.getData()
                .then(data => {
                    this.setState({ data: data })
                })
        };

        render() {
            const { data } = this.state;
            if(!data) {
                return <Spinner/>;
            }
            return <View {...this.props} data={this.state.data}/>
        }
    }
};

export default withData;