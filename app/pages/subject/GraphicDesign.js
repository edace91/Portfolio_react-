import React from 'react'
import { Row, Col } from 'react-grid-system'
//import Graphic Design Gallery component
import GraphicGallery from '../../components/GraphicGallery'

export default class GraphicDesign extends React.Component {

  render() {
    return (
      //place the component between the First Row
      <div>
        <Row>
          <GraphicGallery/>
        </Row>
      </div>
      //add Button list linking to other page subjects.
    );
  }
}