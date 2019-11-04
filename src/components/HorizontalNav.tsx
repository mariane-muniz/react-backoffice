import * as React from 'react';
import LogoComponent from './LogoComponent';

export class HorizontalNav extends React.Component<any, any> {
    render() {
        return (
            <div id="horizontal-nav" className="bg-white bottom-border-gray">
                <LogoComponent />
                <ul>
                    <li><a href="#">Conteúdo</a></li>
                    <li><a href="#">Catálogo</a></li>
                    <li><a href="#">Financeiro</a></li>
                    <li><a href="#">Relatórios</a></li>
                    <li><a href="#">Pedidos</a></li>
                </ul>
                <a href="#">Logoff</a>
            </div>
        );
    }
}