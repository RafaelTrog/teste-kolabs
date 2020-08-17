import React from 'react'
import styled from 'styled-components'
import SearchBar from './SearchBar'
import Filter from './Filter'

const SearchPageStyle = styled.div`
    box-sizing: border-box;
    width: 80%;
    max-width: 1000px;
    min-width: 800px;
    // border: 1px solid red;
`

export default SearchPage => {
    return (
            <SearchPageStyle>
                <SearchBar />
                <Filter />
            </SearchPageStyle>
    )
}