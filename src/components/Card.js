import React from 'react'
import styled from 'styled-components'

// Card component
const Card = ({className, title, subtitle, icon, text, img}) => {
  return (
    <Wrapper className={className ? `${className}` : ''}>
      <div className='card container'>
        <div className='card-title'>
            <h4>{title}</h4>
        </div>
        {
            subtitle ? (
                <div className='card-subtitle'>
                    <h6>{subtitle}</h6>
                </div>
            ) : (
            <div className='card-icon'>
                {icon}
            </div>
        )}
        {
            text ? (
                <div className='card-text'>
                    <p>{text}</p>
                </div>
            ) : (
                <div className='card-img'>
                    <img src={img} alt={title} />
                </div>
            )
        }
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  place-items: center;
  text-align: center;
  position: relative;
  .card {
    padding: 1rem;
    height: 300px;
    border: 2px solid #4CAF50; 
    border-radius: 12px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    background-color: #1e1e1e; 
    color: #fff;
    margin: 0.5rem;
    transition: all 0.3s ease;
    width: 300px; 

    &:hover {
        background-color: #4CAF50;
        color: #000;
        border: 2px solid #fff;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
    }

    .card-title {
        margin-bottom: 0.5rem;
        h4 {
            font-size: 1.8rem;
            color: #fff;
            text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
        }
    }

    .card-subtitle {
        h6 {
            font-size: 1.2rem;
            color: #ddd;
        }
    }

    .card-icon {
        font-size: 2.5rem;
        margin: 1rem 0;
        color: orange;
    }

    .card-text {
        p {
            font-size: 1rem;
            color: #ccc;
            line-height: 1.5;
        }
    }

    .card-img {
        img {
            width: 100%;
            height: auto;
            border-radius: 8px;
        }
    }
  }
`;

export default Card
