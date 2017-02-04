import React from 'react'
import { Row, Col } from 'react-grid-system'
//import Web Design Gallery component
import WebGallery from '../../components/WebGallery'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton';

export default class WebDesign extends React.Component {

  render() {
    return (
      //place the component between the First Row
      <div>
        <Row>
          <Col md={7}>
            <WebGallery/>
          </Col>
          <Col md={5} >
            <Card style={{ backgroundColor: "#9E9E9E"}}>
              <CardTitle
                title="Web Design"
                subtitle="Code is sickening hun"
              />
              <CardText>
                I build cool stuff myself, thank you very much! From Html to CSS and JQuery to React, which I built this portfolio you are clicking through right now.
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