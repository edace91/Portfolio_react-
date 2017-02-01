import React from 'react'
import { Row, Col } from 'react-grid-system'
//import photography Gallery component
import PhotographyGallery from '../../components/PhotographyGallery'

export default class Photography extends React.Component {

  render() {
    return (
      //place the component between the First Row
      <div>
        <Row>
          <PhotographyGallery/>
        </Row>
      </div>
      //add Button list linking to other page subjects.
    );
  }
}