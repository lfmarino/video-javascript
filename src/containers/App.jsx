import React, { useState, useEffect } from 'react';

import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';

import useInitialState from '../hooks/useInitialState';

import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initalState';

const App = () => {
  const videos = useInitialState(API);

  return (
    <div className="app">
      <Header/>
      <Search/>
      {videos.mylist.length > 0 &&
      <Categories title="Mi Lista">
        <Carousel>
          {videos.mylist.map(video =>
            <CarouselItem key={video.id} {...video}/>
          )}
        </Carousel>
      </Categories>
      }
      {videos.trends.length > 0 &&
      <Categories title="Tendencias">
        <Carousel>
          {videos.trends.map(video =>
            <CarouselItem key={video.id} {...video}/>
          )}
        </Carousel>
      </Categories>
      }
      {videos.originals.length > 0 &&
      <Categories title="Originales">
        <Carousel>
          {videos.originals.map(video =>
            <CarouselItem key={video.id} {...video}/>
          )}
        </Carousel>
      </Categories>
      }
      <Footer/>
    </div>
  );
};

export default App;
