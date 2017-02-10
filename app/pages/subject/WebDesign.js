import React from 'react'
import { Row, Col } from 'react-grid-system'
//import Web Design Gallery component
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton';

export default class WebDesign extends React.Component {

  render() {
    return (
      //place the component between the First Row
      <div>
        <Row>
          <Col md={6} >
            <Card style={{ backgroundColor: "#52616B"}}>
              <CardTitle>
                <img style={{ width:"200px"}} src="../../images/votery_logo_Horizontal_KO.png" />
              </CardTitle>
              <CardText style={{"line-height":"200%"}}>
                 Votery, it is the easiest way of tracking your representatives voting history. Just enter
your state and your representatives will be listed for you to select. Once you choose a rep, their
information and voting history will be listed for their most recent legislative choices.
              </CardText>
              <CardActions>
                <FlatButton label="Github" href="https://github.com/masonposch/votery"/>
                <FlatButton label="Go to App" href="https://morning-garden-54466.herokuapp.com/votery"/>
              </CardActions>
              <CardMedia>
                <img src="../../images/sitting.jpg" />
              </CardMedia>  
            </Card>
          </Col>
          <Col md={6}>
            <Card style={{ backgroundColor: "#52616B"}}>
              <CardTitle>
                <img style={{ width:"250px"}} src="../../images/logo.png" />
              </CardTitle>
              <CardText style={{"line-height":"200%"}}>
                 Pet travel made easy. Plan your trip find pet friendly places, be ready for anything.Our pets are part of our family and we would much rather take them along with us than leave them behind.
              </CardText>
              <CardActions>
                <FlatButton label="Github" href="https://github.com/edace91/Petripper.git"/>
                <FlatButton label="Go to App" href="http://enigmatic-savannah-90550.herokuapp.com/"/>
              </CardActions>
              <CardMedia>
                <img src="../../images/dog_girl_beach.jpg" />
              </CardMedia>  
            </Card>
          </Col>
        </Row>
        <br></br>
      </div>
      //add Button list linking to other page subjects.
    );
  }
}