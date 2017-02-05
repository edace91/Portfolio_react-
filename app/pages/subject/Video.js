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
            <Card style={{ backgroundColor: "#9E9E9E"}}>
              <CardTitle
                title="Saul Vara Rivera Foundation"
                subtitle="Short photo/animation depicting the story of the foundation"
              />
              <CardMedia>
              
              </CardMedia>  
            </Card>
          </Col>
          <Col md={6} >
            <Card style={{ backgroundColor: "#9E9E9E"}}>
              <CardTitle
                title="Demo Reel"
                subtitle="Showcasing visual effects experience"
              />
              <CardMedia>
               
              </CardMedia>  
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Card style={{ backgroundColor: "#9E9E9E"}}>
              <CardTitle
                title="Food"
                subtitle="Short film"
              />
              <CardMedia>
             
              </CardMedia>  
            </Card>
          </Col>
          <Col md={6} >
            <Card style={{ backgroundColor: "#9E9E9E"}}>
              <CardTitle
                title="ACL"
                subtitle="After Effects Animation"
              />
              <CardMedia>
               
              </CardMedia>  
            </Card>
          </Col>
        </Row>
      </div>
      //add Button list linking to other page subjects.
    );
  }
}