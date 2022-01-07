
import React, { useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Grid } from '@material-ui/core';
import MovieInfo from '../MovieInfo/movieInfo';
import MoviesList from '../MoviesList/moviesList';
import useStyles from './useStyles';

const MovieCatalog = () => {  

  const { catalogTitleDiv, catalogTitle, movieInfoDiv, movieListDiv } = useStyles();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type:'GET_MOVIES_LIST'})
  }, []);


const movieList = useSelector(state => state.moviesList);
const [movieData, setMovieData] = useState({});

useEffect(() => { 
  if(movieList && movieList.length > 0 )
    setMovieData(movieList[0]);  
}, [movieList]);

  const handleMovieInfo = (movieInfo) => {
    if(movieInfo){
     setMovieData(movieInfo);
    }
  };

  return (   
        <Grid container>
          <Grid item xs={12} className={catalogTitleDiv}><span className={catalogTitle}>Movie Catalog</span></Grid>               
          <Grid item xs={12}>
             <Grid container>
                <Grid item xs={6} className={movieInfoDiv}><MovieInfo movieData={movieData}/></Grid>
                <Grid item xs={6} className={movieListDiv}><MoviesList movieList={movieList} handleMovieInfo={handleMovieInfo}/></Grid>
              </Grid>
          </Grid>      
       </Grid>
  );
}

export default MovieCatalog;

