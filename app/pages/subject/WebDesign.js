import React from 'react'
import { Row, Col } from 'react-grid-system'
//import Web Design Gallery component
import WebGallery from '../../components/WebGallery'
import { Card, CardTitle, CardText } from 'material-ui/Card'

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
            <Card style={{ backgroundColor: "#00BCD4"}}>
              <CardTitle
                title="About me"
                subtitle="Eduardo Aceves"
              />
              <CardText>
                I am a designer, proficient in print and web design, currently enrolled in a coding bootcamp.
              </CardText>
            </Card>
          </Col>
        </Row>
      </div>
      //add Button list linking to other page subjects.
    );
  }
}