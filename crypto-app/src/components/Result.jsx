import styled from "@emotion/styled"

const ResultPanel = styled.div `
    font-family: 'Roboto', sans-serif;
    color: #FFF;
    text-align: center;
    display:flex;
    /* so it will align up and not stretch in the y axis, we use align items start. that was the v1.0, but centering looks better :) */
    align-items:center; 
    gap: 3rem;
    margin-top:30px;
    justify-content:center
`

const Text = styled.p`
    font-size:20px;
    span {
        font-weight: 700
    };
    
`

const Price = styled.p`
    font-size:25px;
    span {
        font-weight: 700
    };
    
`

const Image = styled.img`
    display:block;
    width: 150px;
    
`

const Result = ({result}) => {
    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR,IMAGEURL, LASTUPDATE} = result
  return (
    <ResultPanel>
            <Image 
                src={`https://cryptocompare.com/${IMAGEURL}`} alt="Crypto image" />
            <div>
                <Price>Price is <span>{PRICE}</span></Price>
                <Text>Highest price in 24hrs. <span>{HIGHDAY}</span></Text>
                <Text>Lowest price in 24hrs. <span>{LOWDAY}</span></Text>
                <Text>Variation in the last 24hrs. <span>{CHANGEPCT24HOUR}</span></Text>
                <Text>Last updated <span>{LASTUPDATE}</span></Text> 
            </div>
            
        
    </ResultPanel>
  )
}

export default Result