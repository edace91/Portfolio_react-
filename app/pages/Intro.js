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
                title="Gallery"
                subtitle="A collection of projects"
              />
              <CardText>
                From web design to video work, each section includes  a collection of work and description of each project. Once in each section an info card will show information and more photos attributed to the specific project.
              </CardText>
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