import React from 'react'

import { Row, Col } from 'react-grid-system'


import GallerySection from '../components/GallerySection'


export default class Intro extends React.Component {

  render() {
    return (
      <Row>
          <GallerySection/>
      </Row>
    );
  }
}