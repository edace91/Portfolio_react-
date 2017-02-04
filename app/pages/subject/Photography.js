import React from 'react'
import { Row, Col } from 'react-grid-system'
//import photography Gallery component
import PhotographyGallery from '../../components/PhotographyGallery'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton';

export default class Photography extends React.Component {

  render() {
    return (
      //place the component between the First Row
      <div>
        <Row>
          <Col md={7}>
            <PhotographyGallery/>
          </Col>
          <Col md={5} >
            <Card style={{ backgroundColor: "#9E9E9E"}}>
              <CardTitle
                title="Photography"
                subtitle="My true passion"
              />
              <CardText>
                Out of all of the traditional art my background, photography is by far my favorite.
              </CardText>
              <CardActions>
                <FlatButton label="Information" />
                <FlatButton label="More" />
              </CardActions>
              <CardMedia
                overlay={<CardTitle title="Black Swan Inn" subtitle="medium format photo" />}
              >
                <img src="../../images/haunted.jpg" />
              </CardMedia>  
            </Card>
          </Col>

        </Row>
      </div>
      //add Button list linking to other page subjects.
    );
  }
}