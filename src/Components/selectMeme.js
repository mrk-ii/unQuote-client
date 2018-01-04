import React from "react";
import {connect} from 'react-redux';
import {fetchQuotes} from '../Actions/quote';
import {fetchImg} from '../Actions/img';
// import StarRating from 'react-star-rating';

export class Meme extends React.Component {
  componentDidMount(){
    this.props.dispatch(fetchQuotes());
    this.props.dispatch(fetchImg());
  }

 

  render(){
    return(
      
        <div className="capture">
          <form className="navBar">
              <fieldset className="buttonBox">
                  <a href="pictures.html"><button type="button" className="button">New Meme</button></a>
                  {/* <form action="/api" method="POST">
                    <StarRating name="meme-rating" caption="Rate this meme!" totalStars={5} />
                    <button type="submit" className="btn btn-submit">Submit Rating</button>
                  </form> */}
              </fieldset>
          </form>
          <h1>
              <div className="memeText">
                <div className="quoteText">{this.props.quote.quote}</div> 
                <div className="authorText">— {(this.props.quote.author !== '') ? this.props.quote.author : 'Anonymous'}</div>
              </div>
          </h1>
        </div>
    )
  }
}

const mapStateToProps = state => {
  return{
  quote: state.quote.quote,
  loading: state.loading,
  error: state.error
}};
  
export default connect(mapStateToProps)(Meme);