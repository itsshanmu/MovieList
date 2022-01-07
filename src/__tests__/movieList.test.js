import React from "react"; 
import { render } from "@testing-library/react";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import movieListReducer from '../redux/movieListReducer';
import MovieCatalog from "../components/MovieCatalog/movieCatalog";

const store = createStore(movieListReducer);

describe("Movie List Testing",() =>{
    it(" Check MovieCatalog rendering",() =>{
       render(
       <Provider store={store}><MovieCatalog/></Provider>);
    });  
})
