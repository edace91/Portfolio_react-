import React from 'react'
import { Row, Col } from 'react-grid-system'
//import Web Design Gallery component
import WebGallery from '../../components/WebGallery'

export default class WebDesign extends React.Component {

  render() {
    return (
      //place the component between the First Row
      <div>
        <Row>
          <WebGallery/>
        </Row>
      </div>
      //add Button list linking to other page subjects.
    );
  }
}