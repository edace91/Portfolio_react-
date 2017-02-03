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
    height: 450,
    overflowY: 'auto',
  },
};

const tilesData = [
  {
    img: '../../images/DiazImmigrationLaw_final.jpg',
    title: 'Logos',
    author: 'Eduardo Aceves',
    featured: true,
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
    img: '../../images/Airforce.jpg',
    title: 'Airforce',
    author: 'Eduardo Aceves',
    featured: true,
  },
  {
    img: '../../images/haunted.jpg',
    title: 'Haunted',
    author: 'Eduardo Aceves',
  },
  {
    img: '../../images/ConceptArt.jpg',
    title: 'Crucible',
    author: 'Eduardo Aceves',
  },
  {
    img: '../../images/CoursePacket.jpg',
    title: 'Marketing',
    author: 'Eduardo Aceves',
  },
];

/**
 * This example demonstrates "featured" tiles, using the `rows` and `cols` props to adjust the size of the tile.
 * The tiles have a customised title, positioned at the top and with a custom gradient `titleBackground`.
 */

export default class WebGallery extends React.Component {
  
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