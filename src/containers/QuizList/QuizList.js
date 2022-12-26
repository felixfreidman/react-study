import React from "react";
import { Component } from "react";
import { NavLink } from "react-router-dom";
import classes from './QuizList.module.css'

class QuizList extends Component {
    // тут можно на 16 строке использовать шаблонные строки
    // https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Template_literals

    renderQuizes() {
        return [1, 2, 3].map((quiz, index) => {
            return (
                <li
                    key={index}
                >
                    <NavLink to={'/quiz/' + quiz}>
                        Quiz {quiz}
                    </NavLink>
                </li>
            )
        })
    }

    render() {
        return (
            <div className={classes.QuizList}>
                <div>
                    <h1>Quiz List</h1>
                    <ul>
                        {
                            this.renderQuizes()
                        }
                    </ul>
                </div>

            </div>
        )
    }
}


export default QuizList
