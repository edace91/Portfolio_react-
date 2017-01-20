import React from 'react'

import { Row, Col } from 'react-grid-system'

import AppBar from 'material-ui/AppBar';

import { Card, CardTitle, CardText } from 'material-ui/Card'


export default class ThirdPage extends React.Component {

  render() {
    return (
      <Row>
        <Col md={8} offset={{ md: 2 }}>
          <Card>
            <CardTitle
              title="Welcome To My Third Page!"
              subtitle="WooHoo"
            />
            <CardText>
              We just navigated to our third page!!!
            </CardText>
          </Card>
        </Col>
      </Row>
    );
  }
}