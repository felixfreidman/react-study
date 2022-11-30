import React from "react";
import classes from './FinishedQuiz.module.css'
import Button from "../UI/Button/Button";
import { Link } from "react-router-dom";
const FinishedQuiz = props => {
    console.log(props.results);
    const successCount = Object.keys(props.results).reduce((total, key) => {
        if (props.results[key] === 'success') {
            total++
        }
        return total
    }, 0)
    return (
        <div className={classes.FinishedQuiz}>
            <ul>
                {
                    props.quiz.map((quizItem, index) => {
                        const resultQuestionsClasses = [
                            'fa',
                            props.results[quizItem.id] === 'failure' ? 'fa-times' : 'fa-check',
                        ]
                        return (
                            <li key={index}>
                                <strong>{index + 1}.</strong> &nbsp;
                                {quizItem.question}
                                <i className={resultQuestionsClasses.join(' ')}></i>
                            </li>
                        )
                    })
                }
            </ul>
            <p>You've answered correctly on {successCount} out of {props.quiz.length} questions</p>
            <div>
                <Button
                    onClick={props.onRetry}
                    type="primary"
                >Retry</Button>
                <Link to={'/'}>
                    <Button
                        onClick={props.onRetry}
                        type="success"
                    >Go to Quizes List</Button>
                </Link>
            </div>
        </div>
    )
}

export default FinishedQuiz