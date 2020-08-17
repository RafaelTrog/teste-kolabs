import React from 'react'
import styled from 'styled-components'
import { FaSearch } from 'react-icons/fa'

const SearchBarStyle = styled.div`
    width: 100%;
    margin-bottom: 30px;
`

const InputStyled = styled.input`
    background-color: #fff;
    width: 100%;
    padding-left: 10px;
    height: 40px;
    outline: none;
    border: none;
    box-sizing: border-box;
    border-bottom: 1px solid #c9c9c9;

    &::-webkit-input-placeholder {
        font-style: italic;
    }
`

const InputWrapper = styled.div`
    display: flex;
    flex-direction: row;
`

const IconWrapper = styled.div`
    color: #8a8a8a;
    background-color: #fff;
    border-bottom: 1px solid #c9c9c9;
    display: flex;
    align-items: center;
    padding: 0 10px;
    box-sizing: border-box;
`

export default SearchBar => {
    return (
        <>
            <SearchBarStyle>
                <InputWrapper>
                    <IconWrapper>
                        <FaSearch />                   
                    </IconWrapper>
                    <InputStyled placeholder="Busca" />
                </InputWrapper>
            </SearchBarStyle>
        </>
    )
}