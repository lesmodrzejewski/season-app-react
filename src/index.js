import React from 'react';
import ReactDOM from 'react-dom';
import ShowSeason from './ShowSeason';
import Spinner from './Spinner';


class App extends React.Component {
    state = {lat: 0, errorMessage: ''};

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            location => this.setState({ lat: location.coords.latitude}),
            error => this.setState( { errorMessage: error.message } )
        );
    };

    renderContent() {
        if(this.state.lat && !this.state.errorMessage)
            return <ShowSeason lat={this.state.lat}/>;
        if(!this.state.lat && this.state.errorMessage)
            return <p>Error: {this.state.errorMessage}</p>;
        if(!this.state.lat && !this.state.errorMessage)
            return <Spinner />;
    }

    render() {
        
        return (
            <div>
                {this.renderContent()}
            </div>
        );
    };


};


ReactDOM.render(<App />, document.getElementById('root'));