import React from 'react';
import Logo from '../img/logo.png';

export default class LogoComponent extends React.Component <any, any> {

    render() {
        return <img className="img-responsive logo" src={Logo} alt=""/>
    }
}