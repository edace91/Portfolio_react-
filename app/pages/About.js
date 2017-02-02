import React from 'react'

import { Row, Col } from 'react-grid-system'

import { Card, CardTitle, CardText } from 'material-ui/Card'



export default class About extends React.Component {

  render() {
    return (
      <Row>
        <Col md={8} offset={{ md: 2 }}>
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
    );
  }
}
