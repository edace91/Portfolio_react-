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
    height: 550,
    overflowY: 'auto',
  },
};

const tilesData = [
  {
    img: '../../images/Votery_logo.jpg',
    author: 'Eduardo Aceves',
    featured: true,
  },
  {
    img: '../../images/Petripper_gray.jpg',
    author: 'Eduardo Aceves',
  },
  {
    img: '../../images/SVR-Logo.jpg',
    author: 'Eduardo Aceves',
  },
  
  {
    img: '../../images/DiazImmigrationLaw_final.jpg',
    author: 'Eduardo Aceves',
    featured: true,
  },
];


export default class LogoSection extends React.Component {
      
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