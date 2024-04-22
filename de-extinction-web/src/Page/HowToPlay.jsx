import React from 'react';
import CardImage1 from '../assets/fondoDino.jpg';
import CardImage2 from '../assets/fondoDino.jpg';
import CardImage3 from '../assets/fondoDino.jpg';
import CardImage4 from '../assets/fondoDino.jpg';

const HowToPlay = () => {
    return (
        <div className="how-to-play">
            <h2>¿Cómo se juega?</h2>
            <div className="cards-container">
                <div className="card">
                    <img src={CardImage1} alt="Card 1" />
                    <div className="card-info">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div className="card">
                    <img src={CardImage2} alt="Card 2" />
                    <div className="card-info">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div className="card">
                    <img src={CardImage3} alt="Card 3" />
                    <div className="card-info">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div className="card">
                    <img src={CardImage4} alt="Card 4" />
                    <div className="card-info">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowToPlay;
