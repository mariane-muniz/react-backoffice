import React from 'react';
import Logo from '../img/logo.png';
import { Link } from 'react-router-dom';

export default class LogoComponent extends React.Component <any, any> {

    render() {
        return (
            <Link to="/">
                <img className="img-responsive logo" src={Logo} alt=""/>
            </Link>
        );
    }
}