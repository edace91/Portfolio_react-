import React from 'react'
import { Link } from 'react-router'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import {List, ListItem} from 'material-ui/List';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionFace from 'material-ui/svg-icons/action/face';
import ActionWork from 'material-ui/svg-icons/action/work';
import HardwareComputer from 'material-ui/svg-icons/hardware/computer';
import CommunicationEmail from 'material-ui/svg-icons/communication/email';
import ContentCreate from 'material-ui/svg-icons/content/create';
import HardwareGamepad from 'material-ui/svg-icons/hardware/gamepad';
import ImageCamera from 'material-ui/svg-icons/image/camera';
import AvVideocam from 'material-ui/svg-icons/AV/videocam';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentSend from 'material-ui/svg-icons/content/send';

const styles = {
  imageInput: {
    margin: 10,
  },
};

export default class NavBar extends React.Component {

  constructor() {
    super()
    this.state = {open: false}
    this.handleToggle = this.handleToggle.bind(this)
  }

  handleToggle() {
    this.setState({open: !this.state.open})
  }

  handleNestedListToggle = (item) => {
    this.setState({
      open: item.state.open,
    });
  };

  render() {

    return (
      <div>
        <Drawer open={this.state.open}>
          <List>
            <Link to={'/'} style={{ color: "#303030"}}>
              <ListItem onClick={this.handleToggle} primaryText="Home" rightIcon={<ActionHome />} />
            </Link>
            <Link to={'About'} style={{ color: "#303030"}}>
              <ListItem onClick={this.handleToggle} primaryText="About" rightIcon={<ActionFace />} />
            </Link>
            
              <ListItem 
                primaryText="Work"
                rightIcon={<ActionWork />}
                initiallyOpen={false}
                primaryTogglesNestedList={true}
                nestedItems={[
                
                  
                    <ListItem
                      key={1}
                      primaryText="Web Design"
                      onClick={this.handleToggle}
                      leftIcon={<HardwareComputer />}
                    />,
                  
                  
                    <ListItem
                      key={2}
                      primaryText="Graphic Design"
                      onClick={this.handleToggle}
                      leftIcon={<ContentCreate />}
                    />,
                 
                  
                    <ListItem
                      key={3}
                      primaryText="Interactive"
                      onClick={this.handleToggle}
                      leftIcon={<HardwareGamepad />}
                    />,
                  
                    <ListItem
                      key={4}
                      primaryText="Photography"
                      onClick={this.handleToggle}
                      leftIcon={<ImageCamera />}
                    />,
                  
                  
                    <ListItem
                      key={5}
                      primaryText="Video"
                      onClick={this.handleToggle}
                      leftIcon={<AvVideocam />}
                    />,  
                ]}
              />
            

            <ListItem primaryText="Connect" rightIcon={<CommunicationEmail />} />  
          </List>
          
          <FlatButton
            href="https://github.com/edace91"
            target="_blank"
            secondary={false}
            icon={<img src="../../images/git.svg"/>}
            style={styles.imageInput}
          />

          <FlatButton
            href="https://www.linkedin.com/in/aceveseduardo"
            target="_blank"
            secondary={false}
            icon={<img src="../../images/in.svg"/>}
            style={styles.imageInput}
          />

          <FlatButton
            href="https://www.behance.net/eduardoaceves"
            target="_blank"
            secondary={false}
            icon={<img src="../../images/be.svg"/>}
            style={styles.imageInput}
          />


          <FlatButton
            href="https://vimeo.com/user14562503"
            target="_blank"
            secondary={false}
            icon={<img src="../../images/vim.svg"/>}
            style={styles.imageInput}
          />
        </Drawer>
        <AppBar
          title={<img src="../../images/EA_logo.jpg" style={{ width: '100px'}} alt="Eduardo Aceves"/>}
          style={{ backgroundColor: "white", padding: "15px", boxShadow: "none"}}
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={this.handleToggle}
        />
      </div>
    );
  }
}
