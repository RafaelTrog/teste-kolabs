import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.png'

const HeaderStyled = styled.div`
    width: 100%;
    padding: 20px 0;
    background-color: #fff;
    border-bottom: 1px solid #000;
`

export default Header => {
    return (
        <HeaderStyled>
            <img src={logo} alt="kolabs"></img>
        </HeaderStyled>
    )
}