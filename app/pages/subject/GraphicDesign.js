import React from 'react'
import { Row, Col } from 'react-grid-system'
//import Graphic Design Gallery component
import GraphicGallery from '../../components/GraphicGallery'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton';

export default class GraphicDesign extends React.Component {

  render() {
    return (
      //place the component between the First Row
      <div>
        <Row>
          <Col md={5}>
            <Card style={{ backgroundColor: "#9E9E9E"}}>
              <CardTitle
                title="Graphic Design"
                subtitle="Been doing this for years"
              />
              <CardText>
              So this thing called photoshop, maybe you heard of it? or maybe even illustrator and InDesign. Yup, we know eachother pretty well.
              </CardText>
              <CardActions>
                <FlatButton label="Information" />
                <FlatButton label="More" />
              </CardActions>
              <CardMedia 
                overlay={<CardTitle title="Campus Mail" subtitle="Marketing through email blasts" />}
              >
                <img src="../../images/CoursePacket.jpg" />

              </CardMedia>  
            </Card>
          </Col>
          <Col md={7} >
            <GraphicGallery/>
          </Col>
        </Row>
      </div>
    );
  }
}