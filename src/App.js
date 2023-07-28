import Header from "./Components/Header";
import Search from "./Components/Search";
import MovieCard from "./Components/MovieCard";
import { useState ,useEffect } from "react";

function App() {

  const [card,setcard]=useState([])

  function movie(name){
    fetch (`https://api.tvmaze.com/search/shows?q=${name}`)
    .then((res)=>{
      return res.json()
    })
    .then((data)=> {
      setcard(data)
      })
  }
  useEffect(()=>{
    movie()
  },[])
  
  return (
    <div classNameName="App">
      <Header />
      <div className="main">
        <Search search={movie} />
        <div className="movies-section">
          {/* <!-- one card --> */}
          {card.map((card)=> <MovieCard data={card} />)}
          {/* <!-- one card --> */}
        </div>
      </div>
    </div>
  );
}

export default App;
