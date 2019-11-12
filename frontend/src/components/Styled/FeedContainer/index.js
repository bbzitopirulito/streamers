import React from 'react';
import styled from 'styled-components';

const FeedContainer = styled.div`
    width: 100%;
    height:100%;
    ${props => props.color && ({
        backgroundColor: props.color
    })}
`;

export default FeedContainer;