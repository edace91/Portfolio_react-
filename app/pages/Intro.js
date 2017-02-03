import React from 'react'
import { Row, Col } from 'react-grid-system'
import GallerySection from '../components/GallerySection'
import GalleryNavigation from '../components/GalleryNavigation'
import { Card, CardTitle, CardText } from 'material-ui/Card'

export default class Intro extends React.Component {

  render() {
    return (
      <div>
        <Row>
            <Card style={{ 
              backgroundColor: "#00BCD4",
              padding: "75px",
              border:"30px",
              borderColor:"#FDD835"
            }}>
              <CardTitle
                title="Gallery"
                subtitle="A collection of projects"
              />
              <CardText>
                From web design to video work, each section includes  a collection of work and description of each project. Once in each section an info card will show information and more photos attributed to the specific project.
              </CardText>
            </Card>
        </Row>
      	<Row>
          <GallerySection/>
      	</Row>
      </div>
      //add Button list linking to other page subjects.
    );
  }
}