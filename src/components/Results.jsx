import React from 'react';
import styled from 'styled-components'

const ResultStyle = styled.div`
    grid-area: result;
    width: 100%;
    height: 150px;
    background-color: #fff;
    box-sizing: border-box;
    border-radius: 10px;
    border: 1px solid #c9c9c9;
    display: flex;
    overflow: hidden;
    margin-bottom: 20px;

    img {
        border-right: 1px solid #c9c9c9;
        height: 150px;
    }
`

const InfoStyle = styled.div`
    width: 100%;
    height: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: left;

    & .title {
        font-size: 20px;
        font-weight: 600;
    }

    & .date {
        color: #999;
    }

    & .desc {
        height: 40px;
        margin-top: 20px;
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
`

export default (props) => {
    return (
        <ResultStyle img={props.img} title={props.title}>
            <img src="https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg" alt="capa" />
            <InfoStyle>
                <span className="title">
                    {props.title}
                </span>
                <span className="date">
                    {props.date}
                </span>
                <span className="desc">
                    {props.desc}
                </span>
            </InfoStyle>
        </ResultStyle>
    )
}