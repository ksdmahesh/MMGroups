import * as React from 'react';
import BaseComponent from './baseComponent';
import { getControlByName } from '../../../constants/constants';
import { AddressProps } from '../../dynamic/renderViewConstants';

export default class Address extends BaseComponent<AddressProps> {
    render() {
        var id = this.props.id;
        var isRequired = this.props.isRequired;

        var addressItems = [
            {
                'name': 'Country',
                'id': id + 'IdCountry',
                'type': 'dropdown',
                'label': 'Country',
                'dataSource': 'Country',
                'isRequired': false && isRequired,
                'isVisible': true
            }, {
                'name': 'Zip',
                'id': id + 'Zip',
                'type': 'zip',
                'label': 'Zip Code',
                'isZip5Required': true && isRequired,
                'isZipExtensionRequired': true && isRequired,
                'isVisible': true
            }, {
                'name': 'Address1',
                'id': id + 'Address1',
                'type': 'textbox',
                'label': 'Street Address 1',
                'isRequired': true && isRequired,
                'isVisible': true
            }, {
                'name': 'Address2',
                'id': id + 'Address2',
                'type': 'textbox',
                'label': 'Street Address 2',
                'isRequired': false && isRequired,
                'isVisible': true
            }, {
                'name': 'City',
                'id': id + 'City',
                'type': 'textbox',
                'label': 'City',
                'isRequired': true && isRequired,
                'isVisible': true
            }, {
                'name': 'State',
                'id': id + 'State',
                'type': 'dropdown',
                'label': 'State',
                'dataSource': 'State',
                'isRequired': true && isRequired,
                'isVisible': true
            }
        ];
        return (
            <>
                {
                    addressItems.map((address, index) => {
                        return (
                            <div key={id + '-' + index} className="form-group">
                                <div className="col-lg-6">
                                    {getControlByName(address, this.props.disabled)}
                                </div>
                            </div>
                        );
                    })
                }
            </>
        );
    }
}