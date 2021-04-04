import React from 'react';
import styled from 'styled-components';
import { Avatar } from '@material-ui/core';

const SidebarRowContainer=styled.div`
    display: flex;
    align-items:center;
    padding: 10px;
    cursor: pointer;
    color: white;

    :hover {
        background-color: #3a3b3c;
        border-radius: 10px;
    }

    .MuiSvgIcon-root {
        font-size: xx-large;
        color: #2c81f4;
    }

    h4 {
        margin-left: 20px;
        font-weight: 600;
    }

`

function SidebarRow({src, Icon, title}) {
    return (
        <SidebarRowContainer>
            {src && <Avatar src={src} />}
            {Icon && <Icon /> }
            <h4>{title}</h4>
        </SidebarRowContainer>
    )
}

export default SidebarRow
