import React from 'react';
import { Nav } from 'office-ui-fabric-react';
import { Link } from 'react-router-dom';

export class LeftMenu extends React.Component<any, any> {

    render() {
        return (
            <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg2 full-height right-border-gray p-3" id="left-menu">
                <Nav
                    ariaLabel="Nav example with nested links"
                    groups={[
                        {
                            links: [
                                {
                                    name: 'Produtos',
                                    url: '',
                                    target: '',
                                    expandAriaLabel: 'Expand Parent link 1',
                                    collapseAriaLabel: 'Collapse Parent link 1',
                                    links: [
                                        {
                                            name: 'Lista de produtos',
                                            url: '/list',
                                            target: ''
                                        },
                                        {
                                            name: 'Child link 2',
                                            url: 'http://example.com',
                                            target: '_blank',
                                            expandAriaLabel: 'Expand Child link 2',
                                            collapseAriaLabel: 'Collapse Child link 2',
                                            links: [
                                                {
                                                    name: '3rd level link 1',
                                                    url: 'http://example.com',
                                                    target: '_blank'
                                                },
                                                {
                                                    name: '3rd level link 2',
                                                    url: 'http://example.com',
                                                    target: '_blank'
                                                }
                                            ]
                                        },
                                        {
                                            name: 'Child link 3',
                                            url: 'http://example.com',
                                            target: '_blank'
                                        }
                                    ]
                                },
                                {
                                    name: 'Parent link 2',
                                    url: 'http://example.com',
                                    target: '_blank',
                                    expandAriaLabel: 'Expand Parent link 2',
                                    collapseAriaLabel: 'Collapse Parent link 2',
                                    links: [
                                        {
                                            name: 'Child link 4',
                                            url: 'http://example.com',
                                            target: '_blank'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]}
                />
            </div>
        );
    }
}