import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import movieListReducer from './redux/movieListReducer';
import MovieCatalog from './components/MovieCatalog/movieCatalog';
import './index.css';

const store = createStore(movieListReducer);
ReactDOM.render(<Provider store={store}><MovieCatalog /></Provider>, document.getElementById('root'));

