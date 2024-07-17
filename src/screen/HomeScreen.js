import React, {useEffect, useState} from 'react'
import { FaSearch } from 'react-icons/fa'
import '../style/home_screen.scss'
import styled from 'styled-components'
import Lottie from 'react-lottie'
import animationData from '../animation/gaming.json'
import { Link } from 'react-router-dom'
import useFetch from '../useFetch'
import Hero from '../components/Hero'

const HomeScreen = () => {

  const [input, setInput] = useState("Assassin's Creed")

  return (
    <>
        <Hero>
          <StyledContent>
            <div className='100-vh d-flex flex-column align-items-center justify-content-center text-white'>
              <h1 className='mb-2'>GameMaster</h1>
              <p>Benvenuto/a su GameMaster, il sito web di riferimento per tutti gli appassionati di videogiochi.</p>
              <p>GameMaster è più di un semplice database: è la tua risorsa completa per esplorare, scoprire e immergerti nel vasto mondo dei videogiochi.</p>
              <p>Con una vasta collezione di titoli e informazioni dettagliate, <span style={{
                color: "green",
                fontWeight: "bold"
              }}>GameMaster</span>  ti aiuta a trovare i giochi più recenti, a riscoprire i classici intramontabili e a seguire le ultime novità del settore.</p>
            </div>
            <Link to='/about' className='btn_home_hero'>Esplora</Link>
            <div className='m-5'>
              <Lottie 
                options={{
                  loop: true,
                  autoplay: true,
                  animationData: animationData,
                  rendererSettings: {
                    preserveAspectRatio: 'xMidYMid slice'
                  }
                }}
                width={350}
                height={200}
              />
            </div>
            
          </StyledContent>
         
        </Hero>
        <section>
           <div className='search-bar'>
                <div className='container'>
                  <form>
                    <label htmlFor='game'>
                       <h4>Cerca il tuo videogame</h4>
                    </label>
                    <div className='d-flex '>
                      <input
                        type='text'
                        id ='game'
                        className='input'
                        placeholder={input}
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                      />
                      <button className='btn_search'>
                        <FaSearch className='icon'/>
                      </button>
                    </div>
                  </form>
                  <p className='result'>3 risultati</p>
                </div>
           </div>
        </section>
    </>
  )
}

const StyledContent = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export default HomeScreen
