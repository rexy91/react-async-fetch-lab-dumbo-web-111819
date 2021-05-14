import React, { Component } from 'react';

class App extends Component {

    componentDidMount(){
        fetch("http://api.open-notify.org/astros.json")
        .then(res => res.json())
        .then(responseObject => console.log(responseObject.people))
    }

    render() {
        return (
            <div>
                App Component
            </div>
        );
    }
}

export default App;
