import React from "react";
import { Component } from "react";
import classes from './Layout.module.css';
import MenuToggle from "../../components/Navigation/MenuToggle/MenuToggle";
import Drawer from "../../components/Navigation/Drawer/Drawer";

class Layout extends Component {
    state = {
        menu: false
    }

    toggleMenuHandler = () => {
        this.setState({
            menu: !this.state.menu
        })
    }
    menuCloseHandler = () => {
        this.setState({
            menu: false
        })
    }
    render() {
        // Для вытягивания ключа menu можно использовать реструктуризацию,
        // это улучшит читаемость кода
        const { menu } = this.state;
        // С чилдреном такая же история )
        const { children } = this.props;

        return (
            <div className={classes.Layout}>
                <Drawer
                    isOpen={menu}
                    onClose={this.menuCloseHandler}
                />
                <MenuToggle
                    onToggle={this.toggleMenuHandler}
                    isOpen={menu}
                />
                <main>
                    {children}
                </main>
            </div>
        )
    }
}

export default Layout
