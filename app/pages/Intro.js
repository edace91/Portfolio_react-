import React from 'react'
import { Row, Col } from 'react-grid-system'
import GallerySection from '../components/GallerySection'
import GalleryNavigation from '../components/GalleryNavigation'

export default class Intro extends React.Component {

  render() {
    return (
      <div>
      	<Row>
        <GallerySection/>
      	</Row>
      </div>
      //add Button list linking to other page subjects.
    );
  }
}