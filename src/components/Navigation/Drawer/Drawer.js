import React from "react";
import { Component } from "react";
import classes from './Drawer.module.css'
import Backdrop from "../../UI/Backdrop/Backdrop";
import { NavLink } from "react-router-dom";

const links = [
    { to: '/', label: 'List' },
    { to: '/auth', label: 'Auth' },
    { to: '/quiz-creator', label: 'Create test' }
]


class Drawer extends Component {
    clickHandler = () => {
        this.props.onClose();
    }
    renderLinks() {
        return links.map((link, index) => {
            return (
                <li key={index}>
                    <NavLink
                        to={link.to}
                        // откуда приходит isActive?
                        className={({ isActive }) => isActive ? "active" : null}
                        onClick={this.clickHandler}>
                        {
                            link.label
                        }
                    </NavLink>
                </li>
            )
        })
    }

    render() {
        const cls = [
            classes.Drawer
        ]

        if (!this.props.isOpen) {
            cls.push(classes.close)
        }
        return (
            <React.Fragment>
                <nav className={cls.join(' ')} >
                    <ul>
                        {this.renderLinks()}
                    </ul>
                </nav>
                {this.props.isOpen ? <Backdrop onClick={this.props.onClose} /> : null}
            </React.Fragment>
        )
    }

}

export default Drawer
