import React from 'react';

import styled from 'styled-components';

const SettingsPainel = styled.div`
    width:750px;
    height:auto;
    margin-left:20px;
    padding-top:5px;    

    p:first-child {
        padding:10px 0 10px 0;        
        font-size:24px;
        ${props => props.color && ({
            color:props.color,
            fontWeight:"bold"
        })};
    }
`;

export default SettingsPainel;