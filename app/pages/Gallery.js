import React from 'react'

import { Row, Col } from 'react-grid-system'
import GalleryNavigation from '../components/GalleryNavigation'


import { Card, CardTitle, CardText } from 'material-ui/Card'


export default class Gallery extends React.Component {

  render() {
    return (
      <div>
        <Col md={12}>	
          <Row>
            {this.props.children} 
          </Row>
          <GalleryNavigation/>
        </Col>
      </div>
    );
  }
}