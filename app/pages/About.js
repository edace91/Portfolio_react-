import React from 'react'

import { Row, Col } from 'react-grid-system'

import { Card, CardTitle, CardText, CardMedia, } from 'material-ui/Card'



export default class About extends React.Component {

  render() {
    return (
      <Row>
        
        <Col Col md={6}>
            <Card style={{
            backgroundColor: "#52616B",
            padding: "10px",
            border:"20px",
            borderColor:"#52616B",
            width:"100%",
            left:"0"
          }}>
            <CardMedia>
                <img src="../../images/self.jpg" />
            </CardMedia>
          </Card>
        </Col>
        <Col Col md={6}>
          <Card style={{
            backgroundColor: "#52616B",
            padding: "50px",
            border:"30px",
            borderColor:"#52616B",
            width:"100%",
            left:"0"
          }}>
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
    );
  }
}
