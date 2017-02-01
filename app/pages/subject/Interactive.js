import React from 'react'
import { Row, Col } from 'react-grid-system'
//import Interactive Gallery component
import InteractiveGallery from '../../components/InteractiveGallery'

export default class Interactive extends React.Component {

  render() {
    return (
      //place the Interactive component between the First Row
      <div>
      	<Row>
          <InteractiveGallery/>
      	</Row>
      </div>
      //add Button list linking to other page subjects.
    );
  }
}