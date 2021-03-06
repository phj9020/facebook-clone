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
import {Auth} from '../firebase';
import {useStateValue} from '../dataLayer/StateProvider';


const HeaderContainer = styled.div`
    width: 100%;
    height: 63px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2px 8px;
    background-color:#242526;
    position: fixed;
    left: 0px;
    top:0px;
    z-index: 9999;
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
        min-width: 60px;
        width: 20%;
        color: #94989b;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        padding: 10px 0px;
        position:relative;
        top:4px;

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

    .header__center_option--active {
        border-bottom: 4px solid #2e81f4;
        .MuiSvgIcon-root{
            color: #2e81f4;
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
        cursor: pointer;

        .MuiAvatar-root {
            margin-right:10px;
            
        }
        h4 {
            min-width: 48px;
        }
    }

    .MuiIconButton-root {
        color: #94989b;
    }
`

function Header() {
    const {user} = useStateValue();
    console.log(user)

    const signOut = (e) => {
        e.preventDefault();
        Auth.signOut();
    }
    return (
        <HeaderContainer>
            <HeaderLeft>
                <img src="https://facebookbrand.com/wp-content/uploads/2019/10/flogo_RGB_HEX-BRC-Site-250.png" alt="facebook-logo" />
                <div className="header__searchbox">
                    <SearchIcon />
                    <input type="text" placeholder="Facebook ??????" />
                </div>
            </HeaderLeft>
            <HeaderCenter>
                <div className="header__center__option header__center_option--active">
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
                <div className="header__info" onClick={signOut}>
                    <Avatar src={user?.photoURL} />
                    <h4>{user?.displayName}</h4>
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
