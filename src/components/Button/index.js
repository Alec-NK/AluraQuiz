import styled from 'styled-components';

const Button = styled.button`
    width: 100%;
    padding: 8px;
    border: none;
    outline: none;
    border-radius: 3px;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.contrastText};
    font-weight: bold;

    &:hover{
        cursor: pointer;
        transition: .3s;
    }
    &:disabled{
        background-color: ${({ theme }) => theme.colors.disable};
        opacity: 0.5;
        cursor: not-allowed;
    }  
`;

export default Button;