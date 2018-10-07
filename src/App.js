import React, { Component } from 'react';
import './App.css';
import Navigator from './Components/Navbar/Navigator';
import Search from './Components/Search/Search.js';
import Card from './Components/Card/Card.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieReview: [],
      searchterm: '',
      seeAll: ['See All', 'Hide All']
    };
  }

  changeHandler = event => {
    event.preventDefault();
    this.setState({ searchterm: event.target.value })
  }

  componentDidMount() {
    this.getMovieReview('https://api.nytimes.com/svc/movies/v2/reviews/search.json/?&api-key=6613c66ebf7746d5886ef3ea8601e7e2');
  }

  getMovieReview = URL => {
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ movieReview: data.results });
      })
      .catch(err => {
        throw new Error(err);
      })
  }

  filterSearch = event => {
    event.preventDefault();

    let cardDiv = document.querySelectorAll('.cardHeader');
    for (let i = 0; i < cardDiv.length; i++) {
      if (this.state.searchterm.toLowerCase().includes(this.state.movieReview[i].display_title.toLowerCase())) {
        return cardDiv[i].classList.toggle('invisible');
      }
    }
  }


  seeAll = event => {
    event.stopImmediatePropagation();
    event.target.preventDefault();
    let cardDiv = document.querySelectorAll('.cardHeader');
    cardDiv.classList.toggle('invisible');
    if (cardDiv.classList.includes('invisible')) {
      this.setState({ seeAll: 'See All' })
    } else {
      this.setState({ seeAll: 'Hide All' })
    }
  }


  render() {
    return (
      <div className="App">
        <Navigator></Navigator>
        <Search
          changeHandler={this.changeHandler}
          value={this.state.searchterm}
          filterSearch={this.filterSearch}
          seeAll={this.state.seeAll[0]}
        ></Search>
        <Card
          key={this.state.display_title}
          movieReview={this.state.movieReview}
          publication_date={this.state.publication_date}
          display_title={this.state.display_title}
          mpaa_raiting={this.state.mpaa_raiting}
          critics_pick={this.state.critics_pick}
          byline={this.state.byline}
          headline={this.state.headline}
          summary_short={this.state.summary_short}
        ></Card>
      </div>
    );

  }
}

export default App;
