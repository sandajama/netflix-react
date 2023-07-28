import { useState } from "react";

function Search(props) {
 const [search,setsearch] =useState("")
  return (
    <div className="search-section">
      Search for your favorite shows
      <div classNameName="search-input">
        <input className="search-box" type="text" placeholder="Search" value={search} onChange={(e) => setsearch(e.target.value)}/>
        <button className="btn-search" onClick={()=> props.search(search)}>Search</button>
      </div>
    </div>
  );
}

export default Search;
