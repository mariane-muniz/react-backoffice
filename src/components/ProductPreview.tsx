import React from 'react';
import { ComboBoxBasicExample } from './ComboBoxBasicExample';
import { ComboBox, SelectableOptionMenuItemType, IComboBoxOption } from 'office-ui-fabric-react';

export default class ProductPreview extends React.Component<any, any> {

    render() {
        return (
            <div>
                <div className="bottom-border-gray p-5">
                    <ComboBox
                        label="ComboBox with persisted menu"
                        defaultSelectedKey="B"
                        allowFreeform
                        autoComplete="on"
                        persistMenu={true}
                />
                </div>
                <div className="p-5">
                    <div style={{ float: 'right' }}>
                        <h1 className="m-0">R$ 56,00</h1>
                        <h4 className="m-0">3x R$ 33,00</h4>
                    </div>
                    <p className="p-0 m-0">http://www.google.com.br<b>/product-url</b></p>
                    <h3>Product Name</h3>
                    <div className="ms-Grid-col ms-sm12 p-0 mb-3">
                        <div className="ms-Grid-col ms-sm6 p-0" id="pdt-main-image">
                            <a href="">
                                <img className="img-responsive" src="https://assets.adidas.com/images/w_600,f_auto,q_auto:sensitive,fl_lossy/985126faac9345fbafa8a8dd008d1a68_9366/Duramo_9_Shoes_Black_BB7066_01_standard.jpg" alt="" />
                            </a>
                        </div>
                        <div className="ms-Grid-col ms-sm6 p-0 pl-3" id="pdt-other-images">
                            <div className="ms-Grid-col ms-sm4 p-0">
                                <a href="">
                                    <img className="img-responsive" src="https://assets.adidas.com/images/w_600,f_auto,q_auto:sensitive,fl_lossy/985126faac9345fbafa8a8dd008d1a68_9366/Duramo_9_Shoes_Black_BB7066_01_standard.jpg" alt="" />
                                </a>
                            </div>
                            <div className="ms-Grid-col ms-sm4 p-0">
                                <a href="">
                                    <img className="img-responsive" src="https://assets.adidas.com/images/w_600,f_auto,q_auto:sensitive,fl_lossy/985126faac9345fbafa8a8dd008d1a68_9366/Duramo_9_Shoes_Black_BB7066_01_standard.jpg" alt="" />
                                </a>
                            </div>
                            <div className="ms-Grid-col ms-sm4 p-0">
                                <a href="">
                                    <img className="img-responsive" src="https://assets.adidas.com/images/w_600,f_auto,q_auto:sensitive,fl_lossy/985126faac9345fbafa8a8dd008d1a68_9366/Duramo_9_Shoes_Black_BB7066_01_standard.jpg" alt="" />
                                </a>
                            </div>
                            <div className="ms-Grid-col ms-sm4 p-0">
                                <a href="">
                                    <img className="img-responsive" src="https://assets.adidas.com/images/w_600,f_auto,q_auto:sensitive,fl_lossy/985126faac9345fbafa8a8dd008d1a68_9366/Duramo_9_Shoes_Black_BB7066_01_standard.jpg" alt="" />
                                </a>
                            </div>
                            <div className="ms-Grid-col ms-sm4 p-0">
                                <a href="">
                                    <img className="img-responsive" src="https://assets.adidas.com/images/w_600,f_auto,q_auto:sensitive,fl_lossy/985126faac9345fbafa8a8dd008d1a68_9366/Duramo_9_Shoes_Black_BB7066_01_standard.jpg" alt="" />
                                </a>
                            </div>
                            <div className="ms-Grid-col ms-sm4 p-0">
                                <a href="">
                                    <img className="img-responsive" src="https://assets.adidas.com/images/w_600,f_auto,q_auto:sensitive,fl_lossy/985126faac9345fbafa8a8dd008d1a68_9366/Duramo_9_Shoes_Black_BB7066_01_standard.jpg" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="ms-Grid-col ms-sm12">
                        <h5>Description</h5>
                        <p style={{ textAlign: 'justify' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <p style={{ textAlign: 'justify' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <p style={{ textAlign: 'justify' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>
            </div>
        );
    }
}