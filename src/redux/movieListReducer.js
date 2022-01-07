import movieList from '../data/movieList.json'

const movieListReducer = (state={}, action={}) =>{
    if(action.type === 'GET_MOVIES_LIST') {   
        const moviesList = movieList.data;
        return {...state,moviesList};      
    }else{
        return state;
    }
};

export default movieListReducer;