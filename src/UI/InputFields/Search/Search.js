import React from 'react';
import { Icon } from 'antd';

import { Input } from '../../index';
import {
    Search, SearchButton,
} from './styled';


export default ( props ) => {
    
    

    return (
        <Search {...props}>
            <Input 
                labelValue="Search"
            />
            <SearchButton> 
                <Icon type='search' />
            </SearchButton>
        </Search>
    );
}