import React from 'react'
import { Row, Col } from 'react-grid-system'
//import Video Gallery component
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import ImageZoom from 'react-medium-image-zoom'

export default class Video extends React.Component {

  render() {
    return (
      //place the component between the First Row
      <div>
        <Row>
          <Col md={6}>
            <Card style={{ backgroundColor: "#52616B"}}>
              <CardTitle
                title="Saul Vara Rivera Foundation"
                subtitle="Short photo/animation depicting the story of the foundation"
              />
              <CardActions>
                <FlatButton label="View" href="https://vimeo.com/53085384"/>
              </CardActions>
              <CardMedia>
                <img src="../../images/SVR-Logo-1024x943.jpg"/>
              </CardMedia>  
            </Card>
          </Col>


          <Col md={6} >
            <Card style={{ backgroundColor: "#52616B"}}>
              <CardTitle
                title="Demo Reel"
                subtitle="Showcasing visual effects experience"
              />
               <CardActions>
                <FlatButton label="View" href="https://vimeo.com/100355694"/>
              </CardActions>
              <CardMedia>
                <img src="../../images/DemoReel.png" />
              </CardMedia> 
            </Card>
          </Col>

        </Row>
        <br></br>
        <Row>

          <Col md={6}>
            <Card style={{ backgroundColor: "#52616B"}}>
              <CardTitle
                title="Food"
                subtitle="Short film"
              />
              <CardActions>
                <FlatButton label="View" href="https://vimeo.com/65231847"/>
              </CardActions> 
              <CardMedia>
              <img src="../../images/food.png" />
              </CardMedia> 
            </Card>
          </Col>

          <Col md={6} >
            <Card style={{ backgroundColor: "#52616B"}}>
              <CardTitle
                title="ACL"
                subtitle="After Effects Animation"
              />
              <CardActions>
                <FlatButton label="View" href="https://vimeo.com/53085384"/>
              </CardActions>  
              <CardMedia>
               <img src="../../images/ACl.png" />
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