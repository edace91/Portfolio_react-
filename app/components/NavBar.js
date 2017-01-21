import React from 'react'
import { Link } from 'react-router'

import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'



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
          <Link to={'/'}>
            <MenuItem onClick={this.handleToggle}>Home</MenuItem>
          </Link>
          <Link to={'secondpage'}>
            <MenuItem onClick={this.handleToggle}>About</MenuItem>
          </Link>
          <Link to={'thirdpage'}>
            <MenuItem onClick={this.handleToggle}>Connect</MenuItem>
          </Link>
          <Link to={'thirdpage'}>
            <MenuItem onClick={this.handleToggle}>Projects</MenuItem>
          </Link>
        </Drawer>
        <AppBar
          title="Eduardo Aceves"
          //title={<img src="http://www.eduardoaceves.com/gallery/wp-content/uploads/2016/05/EA_partial-Logo.jpg"/>}
          style={{boxShadow:
              "none"
          }}
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={this.handleToggle}
        />
      </div>
    );
  }
}
