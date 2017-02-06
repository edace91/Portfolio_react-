import React from 'react'
import { Row, Col } from 'react-grid-system'
//import Video Gallery component
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton';

export default class Video extends React.Component {

  render() {
    return (
      //place the component between the First Row
      <div>
        <Row>
          <Col md={6}>
            <Card style={{ backgroundColor: "#FFB74D"}}>
              <CardTitle
                title="Saul Vara Rivera Foundation"
                subtitle="Short photo/animation depicting the story of the foundation"
              />
              <CardMedia>
                <img src="../../images/SVR-Logo.jpg" />
              </CardMedia>  
              <CardActions>
                <FlatButton label="View" href="https://vimeo.com/53085384"/>
              </CardActions>
            </Card>
          </Col>


          <Col md={6} >
            <Card style={{ backgroundColor: "Black"}}>
              <CardTitle
                title="Demo Reel"
                subtitle="Showcasing visual effects experience"
              />
              <CardMedia>
                <img src="../../images/DemoReel.png" />
              </CardMedia> 
              <CardActions>
                <FlatButton label="View" href="https://vimeo.com/100355694"/>
              </CardActions>
            </Card>
          </Col>

        </Row>
        <Row>

          <Col md={6}>
            <Card style={{ backgroundColor: "#03A9F4"}}>
              <CardTitle
                title="Food"
                subtitle="Short film"
              />
              <CardMedia>
              <img src="../../images/food.png" />
              </CardMedia> 
               <CardActions>
                <FlatButton label="View" href="https://vimeo.com/65231847"/>
              </CardActions> 
            </Card>
          </Col>

          <Col md={6} >
            <Card style={{ backgroundColor: "#B71C1C"}}>
              <CardTitle
                title="ACL"
                subtitle="After Effects Animation"
              />
              <CardMedia>
               <img src="../../images/ACl.png" />
              </CardMedia> 
              <CardActions>
                <FlatButton label="View" href="https://vimeo.com/53085384"/>
              </CardActions>  
            </Card>
          </Col>
        </Row>
      </div>
      //add Button list linking to other page subjects.
    );
  }
}