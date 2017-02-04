import React, {Component} from 'react';
import { Link } from 'react-router'
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';

const HardwareComputer = <FontIcon className="material-icons">computer</FontIcon>;
const ContentCreate = <FontIcon className="material-icons">create</FontIcon>;
const HardwareGamepad  = <FontIcon className="material-icons">gamepad</FontIcon>;
const ImageCamera  = <FontIcon className="material-icons">camera</FontIcon>;
const AvVideocam = <FontIcon className="material-icons">videocam</FontIcon>;


export default class GalleryNavigation extends React.Component {
  
  state = {
    selectedIndex: 0,
  };

  select = (index) => this.setState({selectedIndex: index});

  render() {
    return (
      <Paper zDepth={0} rounded={false} style={{ width:"100%", position:"absolute", left:"0"}}>
        <BottomNavigation selectedIndex={this.state.selectedIndex} 
          style= {{
            padding: "20px",
            
            width: "100%"
          }}
        >
          
          <Link to={'/Gallery/WebDesign'}>
            <BottomNavigationItem
              label="Web Design"
              icon={HardwareComputer}
              onTouchTap={() => this.select(0)}
              
            />
          </Link>

          <Link to={'/Gallery/GraphicDesign'}>
            <BottomNavigationItem
              label="Graphic Design"
              icon={ContentCreate}
              onTouchTap={() => this.select(1)}
            />
          </Link>

          <Link to={'/Gallery/Interactive'}>
            <BottomNavigationItem
              label="Interactive"
              icon={HardwareGamepad}
              onTouchTap={() => this.select(2)}
            />
          </Link>

          <Link to={'/Gallery/Photography'}>
            <BottomNavigationItem
              label="Photography"
              icon={ImageCamera}
              onTouchTap={() => this.select(3)}
            />
          </Link>

          <Link to={'/Gallery/Video'}>
            <BottomNavigationItem
              label="Video"
              icon={AvVideocam}
              onTouchTap={() => this.select(4)}
            />
          </Link>
        </BottomNavigation>
      </Paper>
    );
  }
}
