import { useState,useEffect } from 'react'
import styled from '@emotion/styled'
import Form from './components/Form'
import Result from './components/Result'
import Spinner from './components/Spinner'
import CryptoImg from './img/imagen-criptos.png'

const Container = styled.div`
    max-width:900px;
    margin:0 auto;
    width:90%;
    @media (min-width: 992px) {
      display: grid;
      grid-template-columns: repeat(2,1fr);
      column-gap:2rem;
    }
`

const Image = styled.img`
    max-width:400px;
    width:80%;
    margin: 100px auto 0 auto;
    display:block; 
`

const Header = styled.h1`
    font-family: 'Roboto', sans-serif;
    color: #FFF;
    text-align: center;
    font-weight: 700;
    margin-top: 80px;
    margin-bottom: 50px;
    font-size:34px;

    &::after {
      content: '';
      width: 100px;
      height: 6px;
      background-color: rgb(175, 44, 44);
      display: block;
      margin: 10px auto 0 auto;
    }
    `

function App() {
  const [currencies, setCurrencies] = useState({})
  const [result, setResult] = useState({})
  const [loading, setLoading] = useState(false) //for the spinner!

  useEffect(() => {
    if(Object.keys(currencies).length>0) {
      const cryptoPrice = async () => {
        setLoading(true)
        setResult({}) //i dont want to see the previous result so i reset state
        const {currency, cryptocurrency} = currencies

        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptocurrency}&tsyms=${currency}`

        const response = await fetch(url)
        const result = await response.json()

        setResult(result.DISPLAY[cryptocurrency][currency])

        setLoading(false)
      }
      cryptoPrice()
    }
  },[currencies])

  return (
    <Container>
        <Image 
          src={CryptoImg}
          alt='Crypto image'
        />
        <div>
        <Header>Check updated Crypto prices ☆ﾟ.*･｡ﾟᵕ꒳ᵕ</Header>

        <Form 
          setCurrencies={setCurrencies}
        />
        {loading && <Spinner />}
        {result.PRICE && <Result 
          result={result}
        
        />}


        </div>
        
    </Container>
    
  )
}

export default App
