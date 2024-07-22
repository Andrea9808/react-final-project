import React from 'react';
import styled from 'styled-components';
import Lottie from 'react-lottie';
import animationData from '../animation/not-found.json';
import '../style/errore.scss';
import backgroundImage from '../images/bg-error.jpg'; 
import { Link } from 'react-router-dom';
import useTitle from '../utils/useTitle';

const ErrorScreen = () => {

  useTitle('Pagina non trovata');

  return (
    <Wrapper>
      <BackgroundImage />
      <ContentWrapper>
        <div className='row align-items-center'>
          <div className='col-12'>
            <Lottie 
              options={{
                loop: true,
                autoplay: true,
                reverse: true,
                animationData: animationData,
                rendererSettings: {
                  preserveAspectRatio: 'xMidYMid slice'
                }
              }}
              width={350}
              height={200}
            />
          </div>
          <div className='col-12'>
            <Link to="/" className='btn-return mx-4'>Ritorna alla Home</Link>
          </div> 
        </div>
      </ContentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  text-align: center;
  position: relative;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1; 
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  filter: blur(4px); 
`;

export default ErrorScreen;
