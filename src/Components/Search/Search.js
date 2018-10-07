import React from 'react';


const Search = (props) => {
  return (
    <form action="input">
      <label>Find Your Movie:</label>
      <input
        type="text"
        placeholder="what movie are you looking for?"
        name="search"
        onChange={props.changeHandler}
        value={props.value}
      />
      <div className="buttons">
        <button type="submit" onClick={event => props.filterSearch(event)}>
          Search
        </button>
        <button type="submit" onClick={event => props.seeAll(event)}>{props.seeAll}</button>
      </div>
    </form>
  )
}

export default Search;


