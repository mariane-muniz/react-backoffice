import React from 'react';
import { Pivot, PivotItem, Label, PivotLinkFormat } from 'office-ui-fabric-react';
import { FormComponent } from './FormComponent';
import ProductPreview from './ProductPreview';

const labels: any[] = [
    { 'label': 'Media', 'content': "content" },
    { 'label': 'Connections', 'content': 'Connections' },
];

export default class TabContent extends React.Component<any, any> {
    render() {
        return (
            <div id='horizontal-nav' className='ms-Grid-col ms-sm12 bottom-border-gray bg-white p-0'>
                <div className='ms-Grid-col ms-sm6 ms-md8 ms-lg12 ms-bgColor-gray10 full-height p-0 bg-white'>
                    <div className='ms-Grid-col ms-sm5 p-0 right-border-gray'>
                        <div className='bg-white p-5'>
                            <Pivot>
                                {labels.forEach((item, key) =>
                                    <PivotItem headerText='content'>
                                        <Label>content</Label>
                                    </PivotItem>
                                )}
                                <PivotItem headerText='Component'>
                                    <FormComponent />
                                </PivotItem>
                                <PivotItem headerText='Price'>
                                    coisado
                                </PivotItem>
                            </Pivot>
                        </div>
                    </div>
                    <div className='ms-Grid-col ms-sm7 p-0'>
                        <ProductPreview />
                    </div>
                </div>
            </div>
        );
    }
}