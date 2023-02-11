import React from 'react';
import { useState } from 'react';

import Image from './images/image-product-desktop.jpg';

export const Card = () => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const backgroundStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'hsl(30, 38%, 92%)',
    height: '100vh',
  };
  const cardStyle = {
    overflow: 'hidden',
    borderRadius: '10px',
    width: '600px',
    height: '450px',
  };

  const buttonStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '10px',
    backgroundColor: isHover ? '#1a4031' : '#3d8168',
    color: 'white',
    cursor: 'pointer',
    width: '235px',
    height: '50px',
    border: 'none',
  };
  return (
    <div className="background" style={backgroundStyle}>
      <div style={cardStyle} className="card">
        <div style={{ display: 'flex' }} className="card-inner">
          <div style={{ height: '450px' }} className="card-image">
            <img style={{ width: '300px' }} src={Image}></img>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              backgroundColor: 'white',
              padding: '35px',
            }}
            className="card-text">
            <div style={{ opacity: '.7' }} className="preview_section">
              P E R F U M E
            </div>

            <div
              style={{ fontFamily: 'Fraunces', fontSize: '35px', lineHeight: '1' }}
              className="title_section">
              Gabrielle Essence Eau De Parfum
            </div>

            <div style={{ opacity: '.7', lineHeight: '1.6' }} className="body_section">
              A floral, solar and voluptuous interpretation composed by Olivier Polge,
              Perfumer-Creator for the House of CHANEL.
            </div>

            <div style={{ display: 'flex', alignItems: 'center' }} className="card-price">
              <div
                style={{ fontFamily: 'Fraunces', fontSize: '30px', color: '#378367' }}
                className="card-price--new">
                $149.99
              </div>
              <div
                style={{ textDecoration: 'line-through', paddingLeft: '20px', opacity: '.6' }}
                className="card-price--previous">
                $169.99
              </div>
            </div>

            <button
              onClick={() => console.log('Coded by Kulikov Igor')}
              style={buttonStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="btn-add">
              <svg width="15" height="16" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M14.383 10.388a2.397 2.397 0 0 0-1.518-2.222l1.494-5.593a.8.8 0 0 0-.144-.695.8.8 0 0 0-.631-.28H2.637L2.373.591A.8.8 0 0 0 1.598 0H0v1.598h.983l1.982 7.4a.8.8 0 0 0 .799.59h8.222a.8.8 0 0 1 0 1.599H1.598a.8.8 0 1 0 0 1.598h.943a2.397 2.397 0 1 0 4.507 0h1.885a2.397 2.397 0 1 0 4.331-.376 2.397 2.397 0 0 0 1.12-2.021ZM11.26 7.99H4.395L3.068 3.196h9.477L11.26 7.991Zm-6.465 6.392a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Zm6.393 0a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Z"
                  fill="#FFF"
                />
              </svg>
              Add to Cart
            </button>

            <div hidden className="attribution">
              Challenge by  
              <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
                Frontend Mentor
              </a>
              . Coded by <a href="#">Kulikov Igor</a>.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
