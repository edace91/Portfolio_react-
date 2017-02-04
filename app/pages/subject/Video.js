import React from 'react'
import { Row, Col } from 'react-grid-system'
//import Video Gallery component
import VideoGallery from '../../components/VideoGallery'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton';

export default class Video extends React.Component {

  render() {
    return (
      //place the component between the First Row
      <div>
        <Row>
          <Col md={5}>
            <Card style={{ backgroundColor: "#9E9E9E"}}>
              <CardTitle
                title="Video"
                subtitle="film and some animation"
              />
              <CardText>
              A couple clips I have made, check the demo reel.
              </CardText>
              <CardActions>
                <FlatButton label="Information" />
                <FlatButton label="More" />
              </CardActions>
              <CardMedia
                overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
              >
                <img src="../../images/Quidditch.jpg" />
              </CardMedia>  
            </Card>
          </Col>
          <Col md={7} >
            <VideoGallery/>
          </Col>
        </Row>
      </div>
      //add Button list linking to other page subjects.
    );
  }
}