import React from 'react'

import { Row, Col } from 'react-grid-system'

import { Card, CardTitle, CardText } from 'material-ui/Card'



export default class About extends React.Component {

  render() {
    return (
      <Row>
        <Col Col md={12}>
          <Card style={{
            backgroundColor: "#546E7A",
            padding: "50px",
            border:"30px",
            borderColor:"#546E7A",
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
