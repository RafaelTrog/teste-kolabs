import React from 'react'
import styled from 'styled-components'
import SearchBar from './SearchBar'
import Filter from './Filter'
import Result from './Results'

const SearchPageStyle = styled.div`
    box-sizing: border-box;
    width: 80%;
    max-width: 1000px;
    min-width: 800px;

    display: grid;
    grid-template-areas:
        'searchbar searchbar'
        'filter result';
    grid-template-rows: 40px;
    grid-template-columns: 250px calc(100% - 250px); 
    grid-gap: 10px;
    background-color: #h8h8h8;
    padding: 10px;
    
`

const ResultBox = styled.div`
`

export default SearchPage => {
    return (
            <SearchPageStyle>
                <SearchBar />
                <Filter />
                <ResultBox>
                    <Result img="https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg" title="The Avengers: Os Vingadores" date="25 de abril de 2018" desc="As reservas naturais da Terra estão chegando ao fim e um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie. Cooper é chamado para liderar o grupo e aceita a missão sabendo que pode nunca mais ver os filhos. Ao lado de Brand, Jenkins e Doyle, ele seguirá em busca de um novo lar." />
                    <Result img="https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg" title="The Avengers: Os Vingadores" date="25 de abril de 2018" desc="As reservas naturais da Terra estão chegando ao fim e um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie. Cooper é chamado para liderar o grupo e aceita a missão sabendo que pode nunca mais ver os filhos. Ao lado de Brand, Jenkins e Doyle, ele seguirá em busca de um novo lar." />
                </ResultBox>
            </SearchPageStyle>
    )
}