import React from 'react'
import styled from 'styled-components'
import * as AiIcon from 'react-icons/ai'
const Card = ({ name, onClick, visible }) => {
    return (
        <DivCard onClick={onClick} visible={visible}>
            <span > {name}</span>
            <span> {visible ? <AiIcon.AiFillEye /> : <AiIcon.AiFillEyeInvisible />}</span>
        </DivCard>
    )
}

const DivCard = styled.div`
    background-color: ${(props) => props.visible ? '#18FDA1' : '#1d1d1d'};
    color: ${(props) => !props.visible ? '#d1d1d1' : '#1d1d1d'};
    border-radius: 5px;
    border: 2px solid ${(props) => !props.visible ? '#d1d1d1' : '#1d1d1d'};
    height: 50px;
    display: flex;
    padding: 10px 20px;
    justify-content: space-between;
    align-items: center;
    margin: 10px;
    font-size: 22px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none; 

`;
export default Card