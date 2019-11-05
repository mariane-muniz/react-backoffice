import React from 'react';
import { LeftMenu } from '../components/LeftMenu';
import { ListFragment } from '../fragments/list/ListFragment';
import { HorizontalNav } from '../components/HorizontalNav';
import BreadCrumbFragment from '../fragments/breadcrumb/BreadCrumbFragment';

export const ListPage: React.FunctionComponent = () => {
  return (
    <div className="ms-Grid full-height" dir="ltr">
      <div className="ms-Grid-row full-height">
        <LeftMenu />
        <div className="ms-Grid-col ms-sm6 ms-md8 ms-lg10 ms-bgColor-gray10 full-height p-0">
          <HorizontalNav />
          <BreadCrumbFragment />
          <ListFragment />
        </div>
      </div>
    </div>
  );
};