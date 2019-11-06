import * as React from 'react';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import { Announced } from 'office-ui-fabric-react/lib/Announced';
import { DetailsList, DetailsListLayoutMode, Selection, SelectionMode, IColumn } from 'office-ui-fabric-react/lib/DetailsList';
import { MarqueeSelection } from 'office-ui-fabric-react/lib/MarqueeSelection';
import NavbarComponent from '../../components/NavbarComponent';
import { ClassNames } from './ClassNames';
import { IDocument } from './IDocument';
import { IDetailsListDocumentsExampleState } from './IDetailsListDocumentsExampleState';

export class ListFragment extends React.Component<{}, IDetailsListDocumentsExampleState> {

    private _selection: Selection;

    constructor(props: {}) {
        super(props);

        const columns: IColumn[] = [
            {
                key: 'column1',
                name: 'File Type',
                className: ClassNames.fileIconCell,
                iconClassName: ClassNames.fileIconHeaderIcon,
                ariaLabel: 'Column operations for File type, Press to sort on File type',
                iconName: 'Page',
                isIconOnly: true,
                fieldName: 'name',
                minWidth: 16,
                maxWidth: 16,
                onColumnClick: this._onColumnClick,
                onRender: (item: IDocument) => {
                    return <img src={item.iconName} className={ClassNames.fileIconImg} alt={item.fileType + ' file icon'} />;
                }
            },
            {
                key: 'column2',
                name: 'Name',
                fieldName: 'name',
                minWidth: 0,
                isRowHeader: true,
                isResizable: true,
                isSorted: true,
                isSortedDescending: false,
                sortAscendingAriaLabel: 'Sorted A to Z',
                sortDescendingAriaLabel: 'Sorted Z to A',
                onColumnClick: this._onColumnClick,
                data: 'string',
                isPadded: true
            },
            {
                key: 'column3',
                name: 'Date Modified',
                fieldName: 'dateModifiedValue',
                minWidth: 70,
                maxWidth: 90,
                isResizable: true,
                onColumnClick: this._onColumnClick,
                data: 'number',
                onRender: (item: IDocument) => {
                    return <span>{item.dateModified}</span>;
                },
                isPadded: true
            },
            {
                key: 'column4',
                name: 'Modified By',
                fieldName: 'modifiedBy',
                minWidth: 70,
                maxWidth: 90,
                isResizable: true,
                isCollapsible: true,
                data: 'string',
                onColumnClick: this._onColumnClick,
                onRender: (item: IDocument) => {
                    return <span>{item.modifiedBy}</span>;
                },
                isPadded: true
            },
            {
                key: 'column5',
                name: 'File Size',
                fieldName: 'fileSizeRaw',
                minWidth: 70,
                maxWidth: 90,
                isResizable: true,
                isCollapsible: true,
                data: 'number',
                onColumnClick: this._onColumnClick,
                onRender: (item: IDocument) => {
                    return <span>{item.fileSize}</span>;
                }
            }
        ];

        this._selection = new Selection({
            onSelectionChanged: () => {
                this.setState({
                    selectionDetails: this._getSelectionDetails()
                });
            }
        });

        this.state = {
            items: [],
            columns: columns,
            selectionDetails: this._getSelectionDetails(),
            isModalSelection: false,
            isCompactMode: false,
            announcedMessage: undefined,
        };
    }

    public render() {
        const { columns, isCompactMode, items, selectionDetails, isModalSelection, announcedMessage } = this.state;

        return (
            <div id="horizontal-nav" className="ms-Grid-col ms-sm12 bottom-border-gray bg-white p-0">
                <div className="ms-Grid-col ms-sm6 ms-md8 ms-lg12 ms-bgColor-gray10 full-height p-0">
                    <div className="ms-Grid-col ms-sm12 p-0">
                        <NavbarComponent />
                        <div className="bg-white p-3">
                            <Fabric>
                                {announcedMessage ? <Announced message={announcedMessage} /> : undefined}
                                {isModalSelection ? (
                                    <MarqueeSelection selection={this._selection}>
                                        <DetailsList
                                            items={items}
                                            compact={isCompactMode}
                                            columns={columns}
                                            selectionMode={SelectionMode.multiple}
                                            getKey={this._getKey}
                                            setKey="multiple"
                                            layoutMode={DetailsListLayoutMode.justified}
                                            isHeaderVisible={true}
                                            selection={this._selection}
                                            selectionPreservedOnEmptyClick={true}
                                            onItemInvoked={this._onItemInvoked}
                                            enterModalSelectionOnTouch={true}
                                            ariaLabelForSelectionColumn="Toggle selection"
                                            ariaLabelForSelectAllCheckbox="Toggle selection for all items"
                                            checkButtonAriaLabel="Row checkbox"
                                        />
                                    </MarqueeSelection>
                                ) : (
                                        <DetailsList
                                            items={items}
                                            compact={isCompactMode}
                                            columns={columns}
                                            selectionMode={SelectionMode.none}
                                            getKey={this._getKey}
                                            setKey="none"
                                            layoutMode={DetailsListLayoutMode.justified}
                                            isHeaderVisible={true}
                                            onItemInvoked={this._onItemInvoked}
                                        />
                                    )}
                            </Fabric>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    public componentDidMount() {

        // fetch("https://app-backend-content.herokuapp.com/list/product?attribute=name")
        fetch("http://localhost:8080/list/product?attribute=name")
            .then(res => res.json())
            .then(
                (result: any) => {
                    this.setState({
                        'columns': result.columns,
                        'items': result.values
                    });
                }
            );
    }

    public componentDidUpdate(previousProps: any, previousState: IDetailsListDocumentsExampleState) {
        if (previousState.isModalSelection !== this.state.isModalSelection && !this.state.isModalSelection) {
            this._selection.setAllSelected(false);
        }
    }

    private _getKey(item: any, index?: number): string {
        return item.key;
    }

    private _onChangeCompactMode = (ev: React.MouseEvent<HTMLElement>, checked: boolean): void => {
        this.setState({ isCompactMode: checked });
    };

    private _onChangeModalSelection = (ev: React.MouseEvent<HTMLElement>, checked: boolean): void => {
        this.setState({ isModalSelection: checked });
    };

    private _onChangeText = (ev: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, text: string): void => {
        this.setState({
            items: []
        });
    };

    private _onItemInvoked(item: any): void {
        alert(`Item invoked: ${item.name}`);
    }

    private _getSelectionDetails(): string {
        const selectionCount = this._selection.getSelectedCount();

        switch (selectionCount) {
            case 0:
                return 'No items selected';
            case 1:
                return '1 item selected: ' + (this._selection.getSelection()[0] as IDocument).name;
            default:
                return `${selectionCount} items selected`;
        }
    }

    private _onColumnClick = (ev: React.MouseEvent<HTMLElement>, column: IColumn): void => {
        const { columns, items } = this.state;
        const newColumns: IColumn[] = columns.slice();
        const currColumn: IColumn = newColumns.filter(currCol => column.key === currCol.key)[0];
        newColumns.forEach((newCol: IColumn) => {
            if (newCol === currColumn) {
                currColumn.isSortedDescending = !currColumn.isSortedDescending;
                currColumn.isSorted = true;
                this.setState({
                    announcedMessage: `${currColumn.name} is sorted ${currColumn.isSortedDescending ? 'descending' : 'ascending'}`
                });
            } else {
                newCol.isSorted = false;
                newCol.isSortedDescending = true;
            }
        });
        const newItems = _copyAndSort(items, currColumn.fieldName!, currColumn.isSortedDescending);
        this.setState({
            columns: newColumns,
            items: newItems
        });
    };
}

function _copyAndSort<T>(items: T[], columnKey: string, isSortedDescending?: boolean): T[] {
    const key = columnKey as keyof T;
    return items.slice(0).sort((a: T, b: T) => ((isSortedDescending ? a[key] < b[key] : a[key] > b[key]) ? 1 : -1));
}

const LOREM_IPSUM = (
    'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut ' +
    'labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut ' +
    'aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore ' +
    'eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt '
).split(' ');
let loremIndex = 0;
function _lorem(wordCount: number): string {
    const startIndex = loremIndex + wordCount > LOREM_IPSUM.length ? 0 : loremIndex;
    loremIndex = startIndex + wordCount;
    return LOREM_IPSUM.slice(startIndex, loremIndex).join(' ');
}
