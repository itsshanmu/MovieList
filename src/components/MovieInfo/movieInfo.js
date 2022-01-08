import React from 'react';
import { Grid } from '@material-ui/core';
import useStyles from './useStyles';

const MovieInfo = (props) => {

  const {movieData: {title, releaseYear, director,cast, genre, img} } = props;
  const { movieImg, movieTitle, movieReleaseYr, movieDirector}  = useStyles();

  return (   
          <Grid container id='movie-info'>
          <Grid item xs={12}>
            <img alt='movie-dp' className={movieImg} src={'/'+img}/>
          </Grid>
          <Grid item xs={12}>
            <span className={movieTitle}>{title}</span>
            <span className={movieReleaseYr}>{'('+releaseYear+')'}</span>
          </Grid>
          <Grid item xs={12} className={movieDirector}>
            <span><b>Director :</b> {director}</span>
          </Grid>
          <Grid item xs={12}>
            <span><b>Cast :</b>{cast}</span>
          </Grid>
          <Grid item xs={12}>
            <span><b>Genre :</b>{genre}</span>
          </Grid>     
        </Grid>
  );
}

export default MovieInfo;
