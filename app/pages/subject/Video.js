import React from 'react'
import { Row, Col } from 'react-grid-system'
//import Video Gallery component
import VideoGallery from '../../components/VideoGallery'

export default class Video extends React.Component {

  render() {
    return (
      //place the component between the First Row
      <div>
        <Row>
          <VideoGallery/>
        </Row>
      </div>
      //add Button list linking to other page subjects.
    );
  }
}