import React from 'react'

import { Container } from 'react-grid-system'

// --------------Setup for Material-Ui -----------------------------
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import getMuiTheme from 'material-ui/styles/getMuiTheme';


// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
// -----------------------------------------------------------------
// import NavBar from '../components/Navbar'
import NavBar from '../components/NavBar'
// import Gallery from '../components/GallerySection'


export default class Main extends React.Component {

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
      <div>
      	<NavBar/>
        <Container fluid={false}>
          {this.props.children} 
        </Container>
      </div>
      </MuiThemeProvider>
    );
  }
}
