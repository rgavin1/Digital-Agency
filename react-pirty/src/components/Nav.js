import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

class Nav extends Component {
    constructor(props){
        super(props);
        this.state = {
            toggled: true 
        }
        this.handleMenu = this.handleMenu.bind(this);
    }

    handleMenu = () => {
        this.setState({
            toggled: !this.state.toggled
        });
    }
    
    render(){
        return (
            <div className="nav-container">
                <span className="brand-name">PRITY</span>
                <div className="nav-list">
                    <span>Work</span>
                    <span>News</span>
                    <span>About</span>
                    <span>Contact</span>
                </div>
                <FontAwesomeIcon
                className="toggle-menu"
                onClick={this.handleMenu} 
                icon={ this.state.toggled ? faBars : faTimes } 
                />
                <div className={ this.state.toggled ? 'closed' : 'open'} ></div>
            </div>
        )
    }
}

export default Nav;
