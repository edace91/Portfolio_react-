import React from 'react'
import { Row, Col } from 'react-grid-system'
//import Interactive Gallery component
import InteractiveGallery from '../../components/InteractiveGallery'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton';

export default class Interactive extends React.Component {

  render() {
    return (
      //place the Interactive component between the First Row
      <div>
      	<Row>
          <Col md={7}>
            <InteractiveGallery/>
          </Col>
          <Col md={5}>
            <Card style={{ backgroundColor: "#9E9E9E"}}>
              <CardTitle
                title="Interactive"
                subtitle="I Worked on a Video Game!"
              />
              <CardText>
                Mainly 3D modeled the environment using Maya and Created Concept art for it. 
              </CardText>
              <CardActions>
                <FlatButton label="Information" />
                <FlatButton label="More" />
              </CardActions>
              <CardMedia
                overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
              >
                <img src="../../images/ConceptArt.jpg" />
              </CardMedia>  
            </Card>
          </Col>
      	</Row>
      </div>
      //add Button list linking to other page subjects.
    );
  }
}