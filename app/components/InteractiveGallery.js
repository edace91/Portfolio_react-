import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: "100%",
    height: 515,
    overflowY: 'auto',
  },
};

const tilesData = [
  
  {
    img: '../../images/ScreenShot best.jpg',
    author: 'Eduardo Aceves',
    featured: true,
  },
  {
    img: '../../images/sewer1.jpg',
    author: 'Eduardo Aceves',   
  },
  {
    img: '../../images/tool.jpg',
    author: 'Eduardo Aceves',
  },
  {
    img: '../../images/ConceptArt.jpg',
    author: 'Eduardo Aceves',
    featured: true,
  },
  {
    img: '../../images/wallJump.jpg',
    author: 'Eduardo Aceves',
  },
  {
    img: '../../images/sneakAttack.jpg',
    author: 'Eduardo Aceves',
  },
  {
    img: '../../images/Enemy1.jpeg',
    author: 'Eduardo Aceves',
    featured: true,
  },
  
];

/**
 * This example demonstrates "featured" tiles, using the `rows` and `cols` props to adjust the size of the tile.
 * The tiles have a customised title, positioned at the top and with a custom gradient `titleBackground`.
 */

export default class VideoGallery extends React.Component {
  
  render(){

    return(

      <div style={styles.root}>
        <GridList
          cols={2}
          cellHeight={200}
          padding={1}
          style={styles.gridList}
        >
          {tilesData.map((tile) => (
            <GridTile
              key={tile.img}
              title={tile.title}
              actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
              actionPosition="left"
              titlePosition="top"
              titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
              cols={tile.featured ? 2 : 1}
              rows={tile.featured ? 2 : 1}
            >
              <img src={tile.img} />
            </GridTile>
          ))}
        </GridList>
      </div>
    );
  }
}