import React from 'react'
import { Row, Col } from 'react-grid-system'
import GallerySection from '../components/GallerySection'
import GalleryNavigation from '../components/GalleryNavigation'
import { Card, CardTitle, CardText, CardMedia  } from 'material-ui/Card'

export default class Intro extends React.Component {

  render() {
    return (
      <div>
        <Row>
          <Col md={12}>
            <Card style={{ 
              backgroundColor: "#52616B",
              border:"30px",
              borderColor:"#78909C"
            }}>
              <CardTitle
                title="Project gallery"
                subtitle="A collection of previous works"
              />
             
            </Card>
            <CardMedia> 
                <GallerySection/>
            </CardMedia> 
          </Col>
        </Row>
      </div>
      //add Button list linking to other page subjects.
    );
  }
}