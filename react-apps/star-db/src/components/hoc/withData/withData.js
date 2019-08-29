import React from 'react';
import Spinner from '../../spinner'; 

const withData = ( View ) => {
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
            console.log(this.props)
            const { data } = this.state;

            if(!data) {
                return <Spinner/>;
            }

            return <div>sadda</div>  
        }
    }
}

export default withData;