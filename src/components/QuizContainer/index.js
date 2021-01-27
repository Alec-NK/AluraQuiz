import styled from 'styled-components';

const QuizContainer = styled.div`
  width: 100%;
  max-width: 370px;
  padding: 25px 20px;
  margin: 4% 10%;
  background-color: rgb(0,0,0,0.8);
  border-radius: ${({ theme }) => theme.borderRadius};
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default QuizContainer;