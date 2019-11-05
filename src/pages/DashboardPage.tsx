import React from 'react';
import { LeftMenu } from '../components/LeftMenu';
import { HorizontalNav } from '../components/HorizontalNav';

export default class DashboardPage extends React.Component {

    render() {
        return (
            <div className="ms-Grid full-height" dir="ltr">
                <div className="ms-Grid-row full-height">
                    <LeftMenu />
                    <div className="ms-Grid-col ms-sm6 ms-md8 ms-lg10 ms-bgColor-gray10 full-height p-0">
                        <HorizontalNav />
                    </div>
                </div>
            </div>
        );
    }

    componentWillMount() {
        document.title = "Administration";
    }
}