import React from 'react';

// option 1
const Temperature = ({ children }) => children(30);

// option 2
const Temperature = (props) => {
    return props.children(30);
};

// option 3
class Temperature extends React.Component {
    render() {
        return (
            <CalculateTemperature>
                {/* anything inside the CalculateTemperature is its child */}
                {this.props.children(30)}
            </CalculateTemperature>
        );
    };
};

// example
const ShowTemperatureInCelsius = ({ celsius }) => {
    return (
        <div>
            Temp is {celsius} fahrenheit
            {HotOrNot(celsius)}
        </div>
    );
};

// check to see if temperature is hot or not
const HotOrNot = (fahrenheit) => {
    if (fahrenheit > 84) {
        return console.log('It is hot!');
    }
    else {
        return console.log('It is not that hot');
    }
};