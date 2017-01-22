import React from 'react'
import { Link } from 'react-router'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import {List, ListItem} from 'material-ui/List';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionFace from 'material-ui/svg-icons/action/face';
import ActionWork from 'material-ui/svg-icons/action/work';
import CommunicationEmail from 'material-ui/svg-icons/communication/email';


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
        </Drawer>
        <AppBar
          //title="Eduardo Aceves"
          title={<img src="http://www.eduardoaceves.com/gallery/wp-content/uploads/2016/05/EA_partial-Logo.jpg" style={{ width: '100px'}} alt="Eduardo Aceves"/>}
          style={{
            backgroundColor: "white",
            boxShadow: "none"
          }}
          color= ""
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={this.handleToggle}
        />
      </div>
    );
  }
}
