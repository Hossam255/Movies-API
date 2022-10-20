import {Container} from "react-bootstrap"
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from "./Components/NavBar";
import MoviesList from "./Components/MoviesList";
import MovieDetails from "./Components/MovieDetails";
import axios from "axios";
import {useSelector, useDispatch} from 'react-redux'

function App() {
  

  // search in movies 
 
    
  
  return (
    <div className="font color-body ">
      <NavBar />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MoviesList />}/>
            <Route path="/movie/:id" element={<MovieDetails />}/>
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
