import React from 'react';
import styled from 'styled-components';

const InputBase = styled.input`
    width: 100%;
    padding: 8px;
    margin-bottom: 15px; 
    outline: none;
    background: transparent;
    border: solid 1px ${({ theme }) => theme.colors.primary};
    border-radius: 3px;
    color: ${({ theme }) => theme.colors.contrastText};
`;

export default function Input({onChange, placeholder}){
    return(
        <div>
            <InputBase onChange={onChange} placeholder={placeholder}/>
        </div>
    );
}