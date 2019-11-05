import React from 'react';
import { LeftMenu } from '../components/LeftMenu';
import { HorizontalNav } from '../components/HorizontalNav';
import TabContent from '../components/TabContent';
import BreadCrumbFragment from '../fragments/breadcrumb/BreadCrumbFragment';

export class TabPage extends React.Component {

    render() {
        return (
            <div className="ms-Grid full-height p-0" dir="ltr">
                <HorizontalNav />
                <div className="ms-Grid-row full-height">
                    <LeftMenu />
                    <div className="ms-Grid-col ms-sm6 ms-md8 ms-lg10 ms-bgColor-gray10 full-height p-0">
                        <BreadCrumbFragment />
                        <TabContent />
                    </div>
                </div>
            </div>
        );
    }

    componentWillMount() {
        document.title = "Administration";
    }
}