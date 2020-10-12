import React, { useEffect, useState } from 'react'
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import './Sidebar.css'
import AddIcon from "@material-ui/icons/Add";
import SidebarChannel from './SidebarChannel';
import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import CallIcon from "@material-ui/icons/Call";
import {Avatar} from "@material-ui/core";   
import MicIcon from "@material-ui/icons/Mic";
import HeadsetIcon from "@material-ui/icons/Headset";
import SettingsIcon from "@material-ui/icons/Settings";
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import db, {auth} from "./firebase";


function Sidebar() {
  //Pulling the data from the Data Layer
  const user = useSelector(selectUser);
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    db.collection('channels').onSnapshot(snapshot => (
        setChannels(snapshot.docs.map(doc => ({
          id: doc.id,
          channel: doc.data(),
        })))

    ))
  }, []);
  
  const handleAddChannel = () => {
    const channelName = prompt("Enter a new channel name");
    if(channelName){
      db.collection('channels').add({
        channelName:channelName,
      });
    }
  };
    return (
      <div className="sidebar">
        <div className="sidebar_top">
          <h3>Nitish's Learning Room</h3>
          <ExpandMoreIcon />
        </div>
        <div className="sidebar_channels">
          <div className="sidebar_channelsHeader">
            <div className="sidebar_header">
              <ExpandMoreIcon />
              <h4>My Channels</h4>
            </div>
            <AddIcon onClick={handleAddChannel} className="sidebar_addChannel" />
          </div>
          <div className="sidebar_channelsList">
            {channels.map(({id,channel}) => (
              <SidebarChannel key={id} id={id} channelName={channel.channelName}/>
            ))}
          </div>
        </div>
        <div className="sidebar_voice">
          <SignalCellularAltIcon
            className="sidebar_voiceIcon"
            fontSize="large"
          />
          <div className="sidebar_voiceInfo">
            <h3>Voice Connected</h3>
            <p>Stream</p>
          </div>
          <div className="sidebar_voiceIcons">
            <InfoOutlinedIcon />
            <CallIcon />
          </div>
        </div>
        <div className="sidebar_profile">
          <Avatar src={user.photo} />
          <div className="sidebar_profileInfo">
            <h3>{user.displayName}</h3>
            <p>#{user.uid.substring(0, 5)}</p>
            <p className="log_out" onClick={() => auth.signOut()}>
              Log Out
            </p>
          </div>
          <div className="sidebar_profileIcons">
            <MicIcon />
            <HeadsetIcon />
            <SettingsIcon />
          </div>
        </div>
      </div>
    );
}

export default Sidebar
