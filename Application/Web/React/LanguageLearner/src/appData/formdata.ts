import uuid from 'uuid';
import { DataProps } from '../view/dynamic/renderViewConstants';

export const formdata: DataProps = {
    'steps': [
        {
            'name': 'Name Information',
            'id': uuid(),
            'sections': [
                {
                    'name': 'RESERVED NAME',
                    'id': uuid(),
                    'columns': [
                        {
                            'name': 'RESERVED NAME',
                            'id': uuid(),
                            'controls': [
                                {
                                    'name': uuid(),
                                    'id': 'PrincipalTitle1',
                                    'type': 'checkbox',
                                    'label': 'Test'
                                }
                            ]
                        }
                    ]
                },
                {
                    'name': 'RESERVED',
                    'id': uuid(),
                    'columns': [
                        {
                            'name': 'RESERVED',
                            'id': uuid(),
                            'controls': [
                                {
                                    'name': uuid(),
                                    'id': 'PrincipalTitle10',
                                    'type': 'textbox',
                                    'label': 'Principal Title 1'
                                },
                                {
                                    'name': uuid(),
                                    'id': 'PrincipalTitle102',
                                    'type': 'textbox',
                                    'label': 'Principal Title 2'
                                }
                            ]
                        }
                    ]
                },
                {
                    'name': 'NAME',
                    'id': uuid(),
                    'columns': [
                        {
                            'name': 'RESERVED NAME',
                            'id': uuid(),
                            'controls': [
                                {
                                    'name': uuid(),
                                    'id': 'PrincipalTitle2',
                                    'type': 'textbox',
                                    'label': 'Principal Title'
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            'name': 'Signature',
            'id': uuid(),
            'sections': [
                {
                    'name': 'SIGNATURE',
                    'id': uuid(),
                    'columns': [
                        {
                            'name': 'RESERVED NAME',
                            'id': uuid(),
                            'controls': [
                                {
                                    'name': uuid(),
                                    'id': 'PrincipalTitle3',
                                    'type': 'textbox',
                                    'label': 'Principal Title'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};
