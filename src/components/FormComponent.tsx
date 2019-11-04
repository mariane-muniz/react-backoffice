import React from 'react';
import { TextField, ComboBox } from 'office-ui-fabric-react';

export class FormComponent extends React.Component<any, any> {
    render() {
        return (
            <div style={{ marginTop: 20 + 'px' }}>
                <ComboBox
                    label="Status"
                    defaultSelectedKey="B"
                    allowFreeform
                    autoComplete="on"
                    persistMenu={true} />
                <TextField label="Product name" value="Nike shoes" />
            </div>
        );
    }
}