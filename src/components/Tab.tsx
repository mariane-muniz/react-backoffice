import React from 'react';
import { LeftMenu } from './LeftMenu';
import { HorizontalNav } from './HorizontalNav';
import TabContent from './TabContent';
import BreadCrumb from './BreadCrumb';

export class Tab extends React.Component {

    render() {
        return (
            <div className="ms-Grid full-height p-0" dir="ltr">
                <HorizontalNav />
                <div className="ms-Grid-row full-height">
                    <LeftMenu />
                    <div className="ms-Grid-col ms-sm6 ms-md8 ms-lg10 ms-bgColor-gray10 full-height p-0">
                        <BreadCrumb />
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