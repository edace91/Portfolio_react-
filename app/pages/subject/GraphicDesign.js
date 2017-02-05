import React from 'react'
import { Row, Col } from 'react-grid-system'
//import Graphic Design Gallery component
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import GallerySection from '../../components/GallerySection'

import FlatButton from 'material-ui/FlatButton';

export default class GraphicDesign extends React.Component {

  render() {
    return (
      //place the component between the First Row
      <div>
        <Row>
          <Col md={6}>
            <Card style={{ backgroundColor: "#9E9E9E"}}>
              <CardTitle
                title="University of Texas at Austin"
                subtitle="Document Solutions"
              />
              <CardText>
              Several Marketing Campaigns and materials used to promote the various services that the Document Solutions Department offers to the University. Through direct mail, inserts, and email blasts. 
              </CardText>
              <CardMedia> 
                <GallerySection/>
              </CardMedia>  
            </Card>
          </Col>
          <Col md={6}>
            <Card style={{ backgroundColor: "#9E9E9E"}}>
              <CardTitle
                title="Austin Band Map"
                subtitle="Digital art and Media Collaborative Project"
              />
              <CardText>
                An interactive illustrative map of Austin music venues. 
              </CardText>
              <CardMedia> 
                <GallerySection/>
              </CardMedia>  
            </Card>
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col md={6}>
            <Card style={{ backgroundColor: "#9E9E9E"}}>
              <CardTitle
                title="Logos"
                subtitle="Collection of brand design"
              />
              <CardText>
                From Charity foundations to local buisnesses, logos crafted for a purpose.
              </CardText>
              <CardMedia> 
                <GallerySection/>
              </CardMedia>  
            </Card>
          </Col>
          <Col md={6}>
            <Card style={{ backgroundColor: "#9E9E9E"}}>
              <CardTitle
                title="Airman Heritage Museum"
                subtitle="Philantropy Booklett"
              />
              <CardText>
                Marketing packt for the promotion and collection of funds for the creation of a Airforce museum in San Antonio, Texas. 
              </CardText>
              <CardActions>
                <FlatButton label="See Booklett" href="https://github.com/masonposch/votery"/>
              </CardActions>
              <CardMedia> 
                <img src="../../images/Airforce.jpg" />
              </CardMedia>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}