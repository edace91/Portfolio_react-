import React from 'react'

import { Row, Col } from 'react-grid-system'

import AppBar from 'material-ui/AppBar';

import { Card, CardTitle, CardText } from 'material-ui/Card'

import GallerySection from '../components/GallerySection'

export default class ThirdPage extends React.Component {

  render() {
    return (
      <Row>
        <Col md={8} offset={{ md: 2 }}>
          <Card>
            <CardTitle
              title="Projects"
              subtitle=" web design"
            />
            <CardText>
              Click on image to see more information
            </CardText>
          </Card>
          <br/>
          <GallerySection/>
        </Col>
      </Row>
    );
  }
}