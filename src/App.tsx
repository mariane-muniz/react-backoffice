import React from 'react';
import { FontWeights } from 'office-ui-fabric-react';
import logo from './img/pantone-1.png';
import { LeftMenu } from './components/LeftMenu';
import { List } from './components/List';
import { HorizontalNav } from './components/HorizontalNav';

const boldStyle = {
  root: { fontWeight: FontWeights.semibold }
};

export const App: React.FunctionComponent = () => {
  return (
    <div className="ms-Grid full-height" dir="ltr">
      <div className="ms-Grid-row full-height">
        <LeftMenu logoImg={logo} />
        <div className="ms-Grid-col ms-sm6 ms-md8 ms-lg10 ms-bgColor-gray10 full-height p-0">
          <HorizontalNav />
          <List />
        </div>
      </div>
    </div>
  );
};
