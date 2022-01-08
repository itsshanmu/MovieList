import React from "react"; 
import { render, configure } from "@testing-library/react";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import movieListReducer from '../redux/movieListReducer';
import MovieCatalog from "../components/MovieCatalog/movieCatalog";

const store = createStore(movieListReducer);

configure({testIdAttribute: 'id'})

describe("Movie Catalog Testing",() =>{

    it(" Check MovieCatalog parent component rendering",() =>{
       render(
                <Provider store={store}>
                    <MovieCatalog/>
                </Provider>
             );
    });  

    it(" Check Movie Info child componenet rendering",() =>{
        const { getByTestId } = render(
                 <Provider store={store}>
                     <MovieCatalog/>
                 </Provider>
              );
           const movieInfoChild = getByTestId('movie-info');
           expect(movieInfoChild).toBeInTheDocument();
     });  

     it(" Check Movie list componenet rendering",() =>{
        const { getByTestId } = render(
                 <Provider store={store}>
                     <MovieCatalog/>
                 </Provider>
              );
           const movieListChild = getByTestId('movie-list');
           expect(movieListChild).toBeInTheDocument();
     });  
})
