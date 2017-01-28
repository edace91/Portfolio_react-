import React from 'react'

import { Row, Col } from 'react-grid-system'


import { Card, CardTitle, CardText } from 'material-ui/Card'


export default class Gallery extends React.Component {

  render() {
    return (
      <Row>
        <Col md={12} offset={{ md: 0 }}>
           {this.props.children} 
        </Col>
      </Row>
    );
  }
}