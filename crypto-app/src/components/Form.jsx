import {useEffect, useState} from 'react'
import styled from '@emotion/styled'
import Error from './Error'
import useSelectCurrencies from '../hooks/useSelectCurrencies'
import {currencies} from '../data/currencies'


const InputSubmit =styled.input` 
    background-color:rgb(175, 44, 44);
    border: none;
    width:100%;
    padding: 10px;
    color: #FFF;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius:5px;
    transition:background-color .3s ease;
    margin-top: 30px;

    &:hover {
        background-color: #e86a6a;
        cursor: pointer;
    }

`


const Form = ({setCurrencies}) => {

    const [cryptos,setCryptos] = useState([])

    const [error,setError] = useState(false)

    const [currency,SelectCurrencies] = useSelectCurrencies('Pick your currency',currencies)

    const [cryptocurrency,SelectCryptocurrency] = useSelectCurrencies('Pick your crypto',cryptos)
    
    useEffect(() => {
        const checkAPI = async () => {
            const url='https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'

            const response = await fetch(url)
            const result = await response.json()
           

            const arrayCrypto = result.Data.map(crypto =>{
                const obj = {
                    id: crypto.CoinInfo.Name,
                    optionName: crypto.CoinInfo.FullName
                }

                return obj
            })

            setCryptos(arrayCrypto)
        }
        checkAPI()
    },[])

    const handleSubmit = e => {
        e.preventDefault()

        if([currency,cryptocurrency].includes('')) {
            setError(true)
            return
        }
        setError(false)
        setCurrencies({
            currency,
            cryptocurrency
        })
    }

  return (
      <>
      {error && <Error>All fields are required</Error>}
    <form
        onSubmit={handleSubmit}
    >
        <SelectCurrencies />
        <SelectCryptocurrency />
       
        <InputSubmit type="submit" value="Check" />


    </form>
    </>
  )
}

export default Form