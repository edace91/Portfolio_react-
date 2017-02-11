import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import { Link } from 'react-router'
import ImageZoom from 'react-medium-image-zoom'


const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'none',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',

  },
  titleStyle: {
    color: 'rgb(255, 255, 255)',
  },
};

const tilesData = [

  {
    img: '../../images/ScreenShot best.jpg',
    author: 'Eduardo Aceves',
  },

  {
    img: '../../images/Rowling menu_final_2_Page_1.png',
    author: 'Eduardo Aceves',
  },
  {
    img: '../../images/Quidditch.jpg',
    author: 'Eduardo Aceves',
  },
  {
    img: '../../images/CoursePacket.jpg',
    author: 'Eduardo Aceves',
  },
  {
    img: '../../images/DiazImmigrationLaw_final.jpg',
    author: 'Eduardo Aceves',
  },
  
  {
    img: '../../images/Promo Direct mail piece_2_Page_1.png',
    author: 'Eduardo Aceves',
  },
  {
    img: '../../images/lamberts_web.png',
    author: 'Eduardo Aceves',
  },
  {
    img: '../../images/Sewer.jpg',
    author: 'Eduardo Aceves',
  },
  {
    img: '../../images/food.png',
    author: 'Eduardo Aceves',
  },
];


export default class GallerySection extends React.Component {
      
  render(){

    return(

      <div style={styles.root}>
        <GridList style={styles.gridList} cols={2.2} padding={0} cellHeight={300}>
          {tilesData.map((tile) => (
            <GridTile
              key={tile.img}
              title={tile.title}
              actionIcon={<IconButton><StarBorder color="rgb(0, 188, 212)" /></IconButton>}
              titleStyle={styles.titleStyle}
              titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
            >
              <img src={tile.img} />
            </GridTile>
          ))}
        </GridList>
      </div>  
    );
  } 
}
