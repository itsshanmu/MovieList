import React, {useState} from 'react';
import { Grid } from '@material-ui/core';
import useStyles from './useStyles';

const MoviesList = (props) => {

  const { movieList, handleMovieInfo } =props;
  const { root, movieTitle, titleSelect, titleUnselect }  = useStyles();

  const [movieIndex, setMovieIndex] = useState(0);

  const handleMovieList = (item, index) => { 
    setMovieIndex(index);   
    handleMovieInfo && handleMovieInfo(item);
  };

  return (   
        <div className={root}>
           {movieList && movieList.map((item,index) => (<Grid item className={index === movieIndex ? titleSelect : titleUnselect} onClick={()=>{handleMovieList(item,index)}}><span className={movieTitle}>{item.title}</span></Grid>)) }
        </div>  
  );
}

export default MoviesList;
