import React from 'react'
import { Link } from 'react-router'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import {List, ListItem} from 'material-ui/List';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionFace from 'material-ui/svg-icons/action/face';
import ActionWork from 'material-ui/svg-icons/action/work';
import CommunicationEmail from 'material-ui/svg-icons/communication/email';
import RaisedButton from 'material-ui/RaisedButton';



const styles = {
  imageInput: {
    margin: 24,
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

  render() {

    return (
      <div>
        <Drawer open={this.state.open}>
          <List>
            <Link to={'/'} style={{ color: "#303030"}}>
              <ListItem onClick={this.handleToggle} primaryText="Home" rightIcon={<ActionHome />} />
            </Link>
            <Link to={'secondpage'} style={{ color: "#303030"}}>
              <ListItem onClick={this.handleToggle} primaryText="About" rightIcon={<ActionFace />} />
            </Link>
            <Link to={'thirdpage'} style={{ color: "#303030"}}>
              <ListItem onClick={this.handleToggle} primaryText="Work" rightIcon={<ActionWork/>} />
            </Link>
              <ListItem primaryText="Connect" rightIcon={<CommunicationEmail />} />  
          </List>
          
          <RaisedButton
            href="https://github.com/callemall/material-ui"
            target="_blank"
            secondary={false}
            icon={<img src="../../images/git.svg"/>}
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
