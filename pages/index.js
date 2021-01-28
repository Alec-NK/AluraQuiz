import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizContainer from '../src/components/QuizContainer';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Input from '../src/components/Input';
import Button from '../src/components/Button';

/*
const BackgroundImage = styled.div`
  flex: 1;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: url(${db.bg});
`;
*/


export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Avatar Quiz</title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>Avatar: A Lenda de Aang</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Você sabe mesmo tudo sobre Avatar: A Lenda de Aang?</p>
            <form onSubmit={function(infosDoEvento){
              infosDoEvento.preventDefault(); // Faz com que toda a página não atualize 
              
              router.push(`/quiz?name=${name}`);
              console.log('Fazendo uma submissão por meio do react');

              // Router manda para outra página
              }}> 

              <Input 
                name = "nomeDoUsuario"
                onChange={(infosDoEvento) => setName(infosDoEvento.target.value)} 
                placeholder="Digite o seu nome para jogar"
                value={name}
              />

              <Button type="submit" disabled={name.length === 0}>JOGAR</Button>
            </form>
            
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/Alec-NK" />
    </QuizBackground>
  );
}
