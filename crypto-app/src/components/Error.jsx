import styled from "@emotion/styled"

const Text = styled.div`
    background-color: #343434;
    color: #FFF;
    padding: 15px;
    font-size:22px;
    font-family: 'Roboto',sans-serif;
    font-weight: 700;
    text-align:center;
    border-radius:5px;

`

const Error = ({children}) => {
  return (
    <Text>
        {children}
    </Text>
  )
}

export default Error