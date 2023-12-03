//f85cdc36
import { useEffect, useState } from 'react';
import './App.css';
import MovieCard from './MovieCard';
const API_URL = 'http://www.omdbapi.com?apikey=f85cdc36'



const App = () => {
const [movies, setMovies] = useState([]);
const [searchTerm, setSearchTerm] = useState('');
const searchMovies = async (title) => {
  const response = await fetch(`${API_URL}&s=${title}`);
  const data = await response.json();
  console.log('data', data)
  setMovies(data.Search);
}
 
  return (
    <div className="App">
     <h1>Movie Land</h1>
     <div className='search'>
      <input placeholder='Search movies' onChange={(e)=>setSearchTerm(e.target.value)}/> 
      <img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3ASearch_Icon.svg&psig=AOvVaw2eEtJUEaMAwiiqqWil0QLf&ust=1701694866870000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKCxuMKp84IDFQAAAAAdAAAAABAE'
      onClick={()=>searchMovies(searchTerm)}/>
      </div>
   { 
  
   movies?.length > 0 ? (
   <div className='container'>
    {movies.map((movie) => <MovieCard movie={movie}/>)}
   </div>) :
   <div className='empty'></div>    
   }

    </div>
  );
}

export default App;
