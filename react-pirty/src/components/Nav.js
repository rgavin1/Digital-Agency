import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

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
                <Link to="/"><span className="brand-name">PRITY</span></Link>
                <div className="nav-list">
                    <Link to="/"><span>Work</span></Link>
                    <Link to="/News"><span>News</span></Link>
                    <Link to="/About"><span>About</span></Link>
                    <Link to="/Contact"><span>Contact</span></Link>
                </div>
                <FontAwesomeIcon
                className="toggle-menu"
                onClick={this.handleMenu} 
                icon={ this.state.toggled ? faBars : faTimes } 
                />
                <div className={ this.state.toggled ? 'closed' : 'open'} >
                    <div className="mobile-menu">
                        <Link to="/" ><span>Work</span></Link>
                        <Link to="/News"><span>News</span></Link>
                        <Link to="/About"><span>About</span></Link>
                        <Link to="/Contact"><span>Contact</span></Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Nav;
