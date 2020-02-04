import React from 'react';
import './Header.css'
import Background from './img/hero.jpg';

const myStyles = {

    backgroundImage: `url( ${Background} )`,
    height: '50vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center'

}

class Header extends React.Component {

    render() {

        return (

            <header style={myStyles}>

                <h1>
                    {this.props.title}
                </h1>
                <p>
                    Come meet me on this journey
                </p>

                <a href="#button">{this.props.button}</a>

            </header>

        );
    }
};

export default Header;