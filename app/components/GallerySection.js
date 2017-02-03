import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

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
    img: '../../images/haunted.jpg',
    title: 'Haunted',
    author: 'Eduardo Aceves',
  },
  {
    img: '../../images/Fence.jpg',
    title: 'Fence',
    author: 'Eduardo Aceves',
  },
  {
    img: '../../images/Quidditch.jpg',
    title: 'Quidditch',
    author: 'Eduardo Aceves',
  },
  {
    img: '../../images/CoursePacket.jpg',
    title: 'Marketing',
    author: 'Eduardo Aceves',
  },
  {
    img: '../../images/DiazImmigrationLaw_final.jpg',
    title: 'Logos',
    author: 'Eduardo Aceves',
  },
  {
    img: '../../images/ConceptArt.jpg',
    title: 'Crucible',
    author: 'Eduardo Aceves',
  },
  {
    img: '../../images/Airforce.jpg',
    title: 'Airforce',
    author: 'Eduardo Aceves',
  },
];


export default class GallerySection extends React.Component {
      
  render(){

    return(

      <div style={styles.root}>
        <GridList style={styles.gridList} cols={2.2}>
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
