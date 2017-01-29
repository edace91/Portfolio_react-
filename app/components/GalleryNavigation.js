import React, {Component} from 'react';
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
      <Paper zDepth={1}>
        <BottomNavigation selectedIndex={this.state.selectedIndex}>
          <BottomNavigationItem
            label="Web Design"
            icon={HardwareComputer}
            onTouchTap={() => this.select(0)}
            link ='WebDesign'
          />
          <BottomNavigationItem
            label="Graphic Design"
            icon={ContentCreate}
            onTouchTap={() => this.select(1)}
            link ='GraphicDesign'
          />
          <BottomNavigationItem
            label="Interactive"
            icon={HardwareGamepad}
            onTouchTap={() => this.select(2)}
            link ='Interactive'
          />
          <BottomNavigationItem
            label="Photography"
            icon={ImageCamera}
            onTouchTap={() => this.select(3)}
            link ='Photography'
          />
          <BottomNavigationItem
            label="Video"
            icon={AvVideocam}
            onTouchTap={() => this.select(4)}
            link ='Video'
          />
        </BottomNavigation>
      </Paper>
    );
  }
}
