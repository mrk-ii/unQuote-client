import React from "react";
import {connect} from 'react-redux';
import {fetchQuotes} from '../Actions/quote';
import {fetchImg} from '../Actions/img';
// import Unsplash from 'unsplash-js';
// import StarRating from 'react-star-rating';

export class Meme extends React.Component {

  componentWillMount(){
    // const unsplash = new Unsplash({
    //   applicationId: "5cfde36a7f5ab330ced5828a1ce5655b7e234144c6f1539be3729b3ec204fc90",
    //   secret: "6cf7c077b74ccaf8c41f2284618bd10702324e5db3c04ac4b5a68fc29e1c5dc0",
    //   callbackUrl: "urn:ietf:wg:oauth:2.0:oob"
    // });
    // unsplash.photos.getRandomPhoto()
    //   .then(res => res.json())
    //   .then(function (json) {
    //     console.log(json);
    //     console.log(json.user.name, json.user.name.portfolio_url, json.urls.regular);
    //   });
  }

  componentDidMount(){
    this.props.dispatch(fetchQuotes());
    this.props.dispatch(fetchImg());
  }


   render(){

console.log(this.props.img);

    return(
        <div className="capture" style={{backgroundImage: `url(${this.props.img})`}}>        
          <form className="navBar">
              <fieldset className="buttonBox">
                  <a href="pictures.html"><button type="button" className="button">Shuffle</button></a>
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
  quoteLoading: state.loading,
  quoteError: state.error,
  img: state.img.img,
  imgLoading: state.loading,
  imgError: state.error
}};

export default connect(mapStateToProps)(Meme);

