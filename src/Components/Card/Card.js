import React from 'react';

const Card = (props) => {
  return (
    <React.Fragment>

      {
        props.movieReview.map(item => {
          return (
            <div className={`cardHeader invisible`} key={item.display_title}>
              <h2>{item.display_title}</h2>
              <p>MPAA:{item.mpaa_rating}</p>
              <p>Critics Pick: {item.critics_pick}</p>
              <p>by: {item.byline}</p>
              <p>Headline: {item.headline}</p>
              <p>Summery: {item.summary_short}</p>
            </div>
          )
        })
      }

    </React.Fragment>
  )
}

export default Card;