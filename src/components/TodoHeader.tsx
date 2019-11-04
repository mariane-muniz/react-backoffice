import React from 'react';
import { Stack, DefaultButton, PrimaryButton, IDropdownOption, IDropdownStyles, DropdownMenuItemType, IStackTokens, Dropdown } from 'office-ui-fabric-react';

const dropdownStyles: Partial<IDropdownStyles> = {
    // dropdown: { width: 300 }
};

const options: IDropdownOption[] = [
    { key: 'fruitsHeader', text: 'Fruits', itemType: DropdownMenuItemType.Header },
    { key: 'apple', text: 'Apple' },
    { key: 'banana', text: 'Banana' },
    { key: 'orange', text: 'Orange', disabled: true },
    { key: 'grape', text: 'Grape' },
    { key: 'divider_1', text: '-', itemType: DropdownMenuItemType.Divider },
    { key: 'vegetablesHeader', text: 'Vegetables', itemType: DropdownMenuItemType.Header },
    { key: 'broccoli', text: 'Broccoli' },
    { key: 'carrot', text: 'Carrot' },
    { key: 'lettuce', text: 'Lettuce' }
];

const stackTokens: IStackTokens = { childrenGap: 20 };


export class TodoHeader extends React.Component<any, any> {

    render() {
        return (
            <Stack tokens={stackTokens}>
                <Dropdown 
                    placeholder="Select an option" 
                    label="Basic uncontrolled example" 
                    options={options} 
                    styles={dropdownStyles} />

                <Dropdown
                    label="Disabled example with defaultSelectedKey"
                    defaultSelectedKey="broccoli"
                    options={options}
                    disabled={true}
                    styles={dropdownStyles}
                />

                <Dropdown
                    placeholder="Select options"
                    label="Multi-select uncontrolled example"
                    defaultSelectedKeys={['apple', 'banana', 'grape']}
                    multiSelect
                    options={options}
                    styles={dropdownStyles}
                />
            </Stack>
        );
    }
}