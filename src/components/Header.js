import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px;
    background-color:#242526;
`
const HeaderLeft = styled.div`
    display: flex;
    flex:0.2;
    align-items: center;
    margin-left: 10px;

    img {
        height:40px;
        object-fit: contain;
        margin-right: 10px;
    }

    .header__searchbox {
        display: flex;
        background-color: #3a3b3c;
        border-radius: 30px;
        padding: 6px 10px;
        color: #94989b;

        .MuiSvgIcon-root {
            margin-right:5px;
        }
        input[type="text"] {
            all:unset;
        }
    }
    
`

const HeaderCenter = styled.div`
    display: flex;
    flex:0.4;

    .header__center__option {
        width: 20%;
        height: 100%;
        color: #94989b;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        padding: 10px 0px;

        :hover {
            background-color: #3a3b3c;
            border-radius: 10px;
            align-items: center;
            border-bottom: none;
            color: #2e81f4;

        }
        .MuiSvgIcon-root{
            font-size: 35px;
            
        }
    }
`

const HeaderRight =styled.div`
    display: flex;
    flex: 0.2;
    color: #94989b;

    .header__info {
        display: flex;
        align-items: center;

        .MuiAvatar-root {
            margin-right:10px;
            
        }
    }

    .MuiIconButton-root {
        color: #94989b;
    }
`

function Header() {
    return (
        <HeaderContainer>
            <HeaderLeft>
                <img src="https://facebookbrand.com/wp-content/uploads/2019/10/flogo_RGB_HEX-BRC-Site-250.png" alt="facebook-logo" />
                <div className="header__searchbox">
                    <SearchIcon />
                    <input type="text" placeholder="Facebook 검색" />
                </div>
            </HeaderLeft>
            <HeaderCenter>
                <div className="header__center__option">
                    <HomeIcon />
                </div>
                <div className="header__center__option">
                    <FlagIcon />
                </div>
                <div className="header__center__option">
                    <StorefrontOutlinedIcon />
                </div>
                <div className="header__center__option">
                    <SubscriptionsOutlinedIcon />
                </div>
                <div className="header__center__option">
                    <SupervisedUserCircleIcon />
                </div>
            </HeaderCenter>
            <HeaderRight>
                <div className="header__info">
                    <Avatar />
                    <h4>Hanjin</h4>
                </div>
                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
            </HeaderRight>
        </HeaderContainer>
    )
}

export default Header;
