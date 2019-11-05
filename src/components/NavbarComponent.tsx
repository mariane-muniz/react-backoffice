import React from 'react'
import { CommandBarButton, IContextualMenuProps, IIconProps, Stack, IStackStyles } from 'office-ui-fabric-react';


export interface IButtonExampleProps {
    // These are set based on the toggles shown above the examples (not needed in real code)
    disabled?: boolean;
    checked?: boolean;
}

const menuProps: IContextualMenuProps = {
    items: [
        {
            key: 'emailMessage',
            text: 'Physical product',
            href: '/tab',
            iconProps: { iconName: 'Mail' }
        },
        {
            key: 'calendarEvent',
            text: 'Service',
            iconProps: { iconName: 'Calendar' }
        },
        {
            key: 'calendarEvent1',
            text: 'Subscription service',
            iconProps: { iconName: 'Calendar' }
        }
    ]
};
const addIcon: IIconProps = { iconName: 'Add' };
const mailIcon: IIconProps = { iconName: 'Mail' };
const stackStyles: Partial<IStackStyles> = { root: { height: 44 } };

export default class NavbarComponent extends React.Component {

    render() {
        return (
            <div className="bg-white p-3 bottom-border-gray">
                <Stack horizontal styles={stackStyles}>
                    <CommandBarButton
                        iconProps={addIcon}
                        text="New item"
                        // Set split=true to render a SplitButton instead of a regular button with a menu
                        // split={true}
                        menuProps={menuProps}
                        disabled={false}
                        checked={false}
                    />
                    <CommandBarButton iconProps={mailIcon} 
                        text="Advanced search" 
                            disabled={false} 
                            checked={false} />
                </Stack>
            </div>
        );
    }
}