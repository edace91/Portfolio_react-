import React from 'react'
import { Row, Col } from 'react-grid-system'
//import Web Design Gallery component
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton';

export default class WebDesign extends React.Component {

  render() {
    return (
      //place the component between the First Row
      <div>
        <Row>
          <Col md={6} >
            <Card style={{ backgroundColor: "#52616B"}}>
              <CardTitle>
                <img style={{ width:"200px"}} src="../../images/votery_logo_Horizontal_KO.png" />
              </CardTitle>
              <CardText style={{"line-height":"200%"}}>
                 Votery, it is the easiest way of tracking your representatives voting history. Just enter
your state and your representatives will be listed for you to select. Once you choose a rep, their
information and voting history will be listed for their most recent legislative choices.
              </CardText>
              <CardMedia>
                <img src="../../images/sitting.jpg" />
              </CardMedia> 
              <CardHeader
                title="Contribution: Concept, UI/UX, html, css, bootstrap, Logo Design, table layout."
                subtitle="see more"
                actAsExpander={true}
                showExpandableButton={true}
              />
              <CardActions>
                <FlatButton label="Github" href="https://github.com/masonposch/votery"/>
                <FlatButton label="Go to App" href="https://morning-garden-54466.herokuapp.com/votery"/>
                <FlatButton label="Project Board" href="https://trello.com/b/88GNuB5N/votery"/>
              </CardActions>
              <CardText expandable={true} style={{"line-height":"200%", textIndent:"40px"}}>
                This project came to us at the tail end of the UT Austin coding Bootcamp. The main technology that we needed to use to create this project was Sequelize and mainly coded in javascript with assistance from handlebars to load in the data from MySQL. 
                The idea for the app came to me from following the 2017 Presidential election. Seeing the rise of the fake news epidemic, I proposed to my team an application that would make it easy for anyone to find out who was representing them in the House and the Senate, and find out the legislator’s voting history. Tracking the stance on each legislative action they have placed their vote on. This app platform would inform and simplify the voting preparation process was designed with ease of use in mind. I made the color scheme reflect the somber  mood in current politics, and coincidently make the information on the page the main focal point. 
              <br></br>
                In leading the concept I served as the layout and functionality director,  guiding the team in through the execution of the application. Collaborating on the ways the information should be organized and presented on each page of the application. 
                Overall working on this project allowed me to experience how design thinking can really be the map towards creation of an application. It also taught me the importance of both the front and back end advancing in tandem with clear communication between developers in order to unfurl a project successfully. 
                Once the project was presented all of our team understood that there needed to be new technologies implemented in order to make the application work to the full desired extent. Though there is still much to improve in the terms of populating the database with current information automatically, this is a project I will continue to work on with my teams help. 
              </CardText>
            </Card>
          </Col>
          <Col md={6}>
            <Card style={{ backgroundColor: "#52616B"}}>
              <CardTitle>
                <img style={{ width:"250px"}} src="../../images/logo.png" />
              </CardTitle>
              <CardText style={{"line-height":"200%"}}>
                 Pet travel made easy. Plan your trip find pet friendly places, be ready for anything.Our pets are part of our family and we would much rather take them along with us than leave them behind.
              </CardText>
              <CardMedia>
                <img src="../../images/dog_girl_beach.jpg" />
              </CardMedia>
              <CardHeader
                title="Contribution: Team Lead, UI/UX, Logo,layout."
                subtitle="see more"
                actAsExpander={true}
                showExpandableButton={true}
              />
              <CardActions>
                <FlatButton label="Github" href="https://github.com/edace91/Petripper.git"/>
                <FlatButton label="Go to App" href="http://enigmatic-savannah-90550.herokuapp.com/"/>
                <FlatButton label="Project Board" href="https://trello.com/b/1AvWHqmP/petripper"/>
              </CardActions>
              <CardMedia expandable={true}>
                <img src="../../images/photo.jpg" />
              </CardMedia>
               <CardText  expandable={true} style={{"line-height":"200%",textIndent:"40px"}}>
               Petripper was the result of the first project assignment  done at the University of Texas coding bootcamp. It was created by a team of four aspiring web developers including myself.  After tossing around a ton of ideas for our project this app stuck, mainly because of our collective natural affinity towards dogs.Along with being the team lead, I took the main front end role, picking the color scheme, adding the logo, and choosing the CSS framework. I used Materialize though it wasn't covered in the class curriculum like bootstrap was. I stuck with it due to its unique design elements and modern look. <br></br>
                Since this was the initial project early on in the bootcamp we had varying degrees of skills when it came to coding within our group. Making role decisions based on what each member of the group was more comfortable with and or wanted to improve or learn more about. Naturally I fell into the visual front end role, but my ability to visualize the structure of the application and scribble on to a piece of paper cemented my role as group leader. 
                Implementing all of the different functionalities of the application proved to be the biggest hurdle, and ultimately lead to the app not being fully realized. Despite its short comings the app itself showed great promise and got a great reaction from the audience once we presented the application. There were even prospects of a possible funder to continue developing our application. 
              </CardText> 
            </Card>
          </Col>
        </Row>
        <br></br>
      </div>
      //add Button list linking to other page subjects.
    );
  }
}