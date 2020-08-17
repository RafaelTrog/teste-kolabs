import React from 'react'
import styled from 'styled-components'

const FilterStyled = styled.div`
    width: 250px;
    border-radius: 10px 10px 0 0;
    border: 1px solid #c9c9c9;
    background-color: #fff;
    height: 500px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
`

const FilterItem = styled.div`
    height: 50px;
    width: 100%;
    background-color: #c9c9c9;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 15px;
    user-select: none;
    box-sizing: border-box;
    background-color: ${(props) => props.type === 'title' ? '#00a7eb' : '#fff'};
    margin: ${(props) => props.type === 'title' ? '0' : '5px 0 5px 0'};
    cursor: ${(props) => props.type === 'title' ? '' : 'pointer'};
    color: ${(props) => props.type === 'title' ? '#fff' : '#000'};
    font-weight: ${(props) => props.type === 'title' ? '600' : 'normal'};
    
    &:hover {
        background-color: ${(props) => props.type === 'title' ? '' : '#c9c9c9'};
    }

    &:before {
        content: '${(props) => props.title}';
        position: absolute;
        width: 120px;
        height: 20px;
        text-align: left;
        color: black;
    }

    &:after {
        content: '${(props) => props.counter}';
        position: absolute;
        margin-left: 190px;
        width: ${(props) => props.counter ? '30px' : '0'};
        height: 20px;
        background-color: #d1d1d1;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 10px;
        // font-weight: bold;
    }

    &:hover:after {
        background-color: #fff;
    }


`

const CounterStyled = styled.span`
    width: 30px;
    height: 20px;
    font-size: 10px;
    background-color: #c9c9c9;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export default Filter => {
    return (
        <FilterStyled>
            <FilterItem type="title">
                <span>Resultado da busca</span>
            </FilterItem>
            <FilterItem type="item" title="Filmes" counter="48" />
            <FilterItem type="item" title="Séries" counter="10" />
            <FilterItem type="item" title="Pessoas" counter="1" />
            <FilterItem type="item" title="Coletâneas" counter="5" />
            <FilterItem type="item" title="Palavras-chave" counter="2" />
            <FilterItem type="item" title="Produtoras" counter="0" />
            <FilterItem type="item" title="Emissoras" counter="0" />
        </FilterStyled>
    )
}