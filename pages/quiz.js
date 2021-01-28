import React from 'react';
import Head from 'next/head';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizContainer from '../src/components/QuizContainer';
import QuizBackground from '../src/components/QuizBackground';
import Button from '../src/components/Button';
import GitHubCorner from '../src/components/GitHubCorner';

function LoadingWidget(){
    return(
        <Widget>
            <Widget.Header>
                Carregando...
            </Widget.Header>

            <Widget.Content>
                Carregando Perguntas...
            </Widget.Content>
        </Widget>
    );
}

function QuestionWidget({question, totalQuestions, questionIndex, onSubmit}){
    const questionID = `question__${questionIndex}`;
    return(
        <Widget>
            <Widget.Header>
                <h3>
                    {`Pergunta ${questionIndex + 1} de ${totalQuestions}`}
                </h3>
            </Widget.Header>
            <img
                alt="Descrição"
                style={{
                    width: '100%',
                    height: '150px',
                    objectFit: 'cover',
                }}
                src={question.image}
            />
            <Widget.Content>
                <h2>
                    {question.title}
                </h2>
                <p>
                    {question.description}
                </p>

                {/* {JSON.stringify(questions, null, 4)} - Debug na tela */}
                <form onSubmit={(infoDoEvento) => {
                    infoDoEvento.preventDefault(); // Evita que a página inteira seja atualizada
                    onSubmit();
                }}>
                    {question.alternatives.map((alternative, alternativeIndex) =>{
                        const  alternativeID = `alternative__${alternativeIndex}`;
                        console.log("ID: " + alternativeIndex + " alternativa: " + alternative);
                        return (
                            <Widget.Topic
                                as="label" // Muda para a tag q irá ser renderizada na tela
                                htmlFor={alternativeID}
                            >
                                <input id={alternativeID} name={questionID} checked='' type="radio"/>
                                
                                {alternative}
                            </Widget.Topic>
                        );
                    })}
                    <Button type="submit">Confirmar</Button>
                </form>
            </Widget.Content>
        </Widget>

    );
}

const screenStates = {
    QUIZ: 'QUIZ',
    LOADING: 'LOADING',
    RESULT: 'RESULT'
};

export default function QuizPage(){
    const [screenState, setScreenState] = React.useState(screenStates.LOADING);
    const totalQuestions = db.questions.length;
    const [currentQuestion, setCurrentQuestion] = React.useState(0);
    const questionIndex = currentQuestion;
    const question = db.questions[questionIndex];

    React.useEffect(() =>{
        setTimeout(() => {
            setScreenState(screenStates.QUIZ);
        }, 1 * 1000);
        // nasce === didMount
    }, []);
    
    function handleSubmitQuiz(){
        const nextQuestion = questionIndex + 1;
        if(nextQuestion < totalQuestions){
            setCurrentQuestion(nextQuestion);
        } else{
            setScreenState(screenStates.RESULT);
        }
    }

    return(
        <QuizBackground backgroundImage={db.bg}>
            <Head>
                <title>Quiz Avatar</title>
            </Head>
            <QuizContainer>
                <QuizLogo />
                {screenState === screenStates.QUIZ && (
                    <QuestionWidget 
                        question={question} 
                        questionIndex={questionIndex} 
                        totalQuestions={totalQuestions}
                        onSubmit={handleSubmitQuiz}
                    />
                )}
                
                {screenState === screenStates.LOADING && <LoadingWidget/>}

                {screenState === screenStates.RESULT && <div>Você acertou X questões, parabéns!</div>}
            </QuizContainer>
            <GitHubCorner projectUrl="https://github.com/Alec-NK" />
        </QuizBackground>
    );
}