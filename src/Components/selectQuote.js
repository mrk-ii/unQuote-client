import React from "react";
import {connect} from 'react-redux';
import {fetchQuotes} from '../Actions/quote';
import {fetchImg} from '../Actions/img';

export class Quotes extends React.Component {
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
                  <a href="meme.html"><button type="button" className="button">Rate Meme</button></a>
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
  
export default connect(mapStateToProps)(Quotes);

