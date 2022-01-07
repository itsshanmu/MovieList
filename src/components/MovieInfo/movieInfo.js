import React from 'react';
import { Grid } from '@material-ui/core';
import useStyles from './useStyles';

const MovieInfo = (props) => {

  const {movieData: {title, releaseYear, director,cast, genre, img} } = props;
  const { movieImg, movieTitle, movieReleaseYr, movieDirector}  = useStyles();

  return (   
    <Grid container>
    <Grid item xs={12}><img className={movieImg} src={'/'+img}/></Grid>
    <Grid item xs={12}><span className={movieTitle}>{title}</span><span className={movieReleaseYr}>{'('+releaseYear+')'}</span></Grid>

    <Grid item xs={12} className={movieDirector}><span>Director : {director}</span></Grid>
    <Grid item xs={12}><span>Cast :{cast}</span></Grid>
    <Grid item xs={12}><span>Genre :{genre}</span></Grid>
     
 </Grid>
  );
}

export default MovieInfo;
