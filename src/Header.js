import React from 'react';
import './Header.css'
import Background from './img/hero.jpg';

const myStyles = {

    backgroundImage: `url( ${Background} )`,
    height: '50vh',
    backgroundSize: 'cover'

}

class Header extends React.Component {

    render() {

        return (

            <header style={myStyles}>

                <h1>
                    {this.props.title}
                </h1>
                <p>
                    A Free Bootstrap Theme by Start Bootstrap
                </p>

                <a href="#button">{this.props.button}</a>

            </header>

        );
    }
};

export default Header;