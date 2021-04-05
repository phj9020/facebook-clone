import React from 'react';
import styled from 'styled-components';
import SidebarRow from './SidebarRow';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import {useStateValue} from '../dataLayer/StateProvider';

const SidebarContainer = styled.div`
    min-width: 300px;
    padding: 25px 10px;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 67px;
`

function Sidebar() {
    const {user} = useStateValue();


    return (
        <SidebarContainer>
            <SidebarRow  src={user?.photoURL} title={user?.displayName} />
            <SidebarRow  Icon={LocalHospitalIcon} title="COVID-19 Information Center" />
            <SidebarRow  Icon={EmojiFlagsIcon} title="Pages" />
            <SidebarRow Icon={PeopleIcon} title="Friends"/>
            <SidebarRow Icon={ChatIcon} title="Messsenger"/>
            <SidebarRow Icon={StorefrontIcon} title="Marketplage"/>
            <SidebarRow Icon={VideoLibraryIcon} title="Videos"/>
            <SidebarRow Icon={ExpandMoreIcon} title="Show More"/>
        </SidebarContainer>
    )
}

export default Sidebar;
