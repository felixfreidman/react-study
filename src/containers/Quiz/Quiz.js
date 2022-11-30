import React from "react";
import { Component } from "react";
import classes from './Quiz.module.css'
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz";

class Quiz extends Component {

    state = {
        activeQuestion: 0,
        answerState: null,
        isFinished: false,
        results: {},
        quiz: [
            {
                question: 'How are you?',
                rightAnswerId: 2,
                id: 1,
                answers: [
                    { text: 'Bad', id: 1 },
                    { text: 'Good', id: 2 },
                    { text: 'Awesome', id: 3 },

                ]
            },
            {
                question: 'What is the weather today?',
                rightAnswerId: 3,
                id: 2,
                answers: [
                    { text: 'Cloudy', id: 1 },
                    { text: 'Sunny', id: 2 },
                    { text: 'Rainy', id: 3 },

                ]
            },
        ]
    }
    onAnswerClickHandler = (answerId) => {
        if (this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0]
            if (this.state.answerState[key] === 'success') {
                return
            }
        }
        const question = this.state.quiz[this.state.activeQuestion];
        const results = this.state.results;
        if (question.rightAnswerId === answerId) {
            if (!results[question.id]) {
                results[question.id] = 'success'
            }
            this.setState(
                {
                    answerState: {
                        [answerId]: 'success'
                    },
                    results
                }
            )
            setTimeout(() => {
                if (this.isQuizFinished()) {
                    this.setState({
                        isFinished: true
                    })
                } else {
                    this.setState({
                        answerState: null,
                        activeQuestion: this.state.activeQuestion + 1,
                    })
                }
            }, 1000);

        } else {
            results[question.id] = 'failure';
            this.setState(
                {
                    answerState: {
                        [answerId]: 'failure',
                        results
                    }
                }
            )
        }

    }

    isQuizFinished() {
        return this.state.activeQuestion + 1 === this.state.quiz.length
    }

    onRetryHandler = () => {
        this.setState({
            activeQuestion: 0,
            answerState: null,
            isFinished: false,
            results: {}
        })
    }

    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Plese fill all the answers</h1>
                    {this.state.isFinished
                        ? <FinishedQuiz
                            results={this.state.results}
                            quiz={this.state.quiz}
                            onRetry={this.onRetryHandler}
                        />
                        : <ActiveQuiz
                            answers={this.state.quiz[this.state.activeQuestion].answers}
                            question={this.state.quiz[this.state.activeQuestion].question}
                            onAnswerClick={this.onAnswerClickHandler}
                            quizLength={this.state.quiz.length}
                            answerNumber={this.state.activeQuestion + 1}
                            state={this.state.answerState}
                        />
                    }

                </div>
            </div>
        )
    }
}

export default Quiz