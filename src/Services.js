import React, { Component } from 'react';
import './Services.css'
class Services extends Component {

    render() {
        return (

            <div className="services">
                <h3>services</h3>
                <h2>What we Offer</h2>

                <div className="row">
                    <div>
                        <span>
                            <ion-icon name="phone-portrait"></ion-icon>
                        </span>
                        <h4>Responsive</h4>
                        <p>Looks great on any screen size</p>
                    </div>
                    <div>
                        <span>
                            <ion-icon name="brush"></ion-icon>
                        </span>
                        <h4>Redesigned</h4>
                        <p>Freshly redesigned for Boostrap 4</p>
                    </div>
                    <div>
                        <span>
                            <ion-icon name="thumbs-up"></ion-icon>
                        </span>
                        <h4>Favorited</h4>
                        <p>Million of users ♥ it</p>
                    </div>
                    <div>
                        <span>
                            <ion-icon name="help"></ion-icon>
                        </span>
                        <h4>Question</h4>
                        <p>Ask a Question</p>
                    </div>
                </div>

            </div>

        );
    }

}

export default Services;